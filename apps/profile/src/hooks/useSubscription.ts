import { useState, useEffect, useCallback } from 'react'
import { initializePaddle, type Paddle, CheckoutEventNames } from '@paddle/paddle-js'
import { subscriptionService, type UserMe } from '../services/subscriptionService'
import { useAuthStore } from '../store/authStore'

type ActionKey = 'cancel' | 'pause'

export interface UseSubscriptionReturn {
  data: UserMe | null
  loadingData: boolean
  loadingAction: ActionKey | null
  error: string | null
  actionError: string | null
  hasActiveSubscription: boolean
  openCheckout: () => void
  handleCancel: () => Promise<void>
  handlePause: () => Promise<void>
}

export function useSubscription(): UseSubscriptionReturn {
  const { user } = useAuthStore()
  const [data, setData] = useState<UserMe | null>(null)
  const [loadingData, setLoadingData] = useState(true)
  const [loadingAction, setLoadingAction] = useState<ActionKey | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [actionError, setActionError] = useState<string | null>(null)
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined)

  const fetchData = useCallback(async () => {
    setLoadingData(true)
    setError(null)
    try {
      const result = await subscriptionService.getMe()
      setData(result)
    } catch {
      setError('Failed to load profile. Please refresh.')
    } finally {
      setLoadingData(false)
    }
  }, [])

  useEffect(() => {
    void fetchData()
  }, [fetchData])

  useEffect(() => {
    void initializePaddle({
      token: import.meta.env.VITE_PADDLE_CLIENT_TOKEN,
      environment: import.meta.env.DEV ? 'sandbox' : 'production',
      eventCallback: event => {
        if (event.name === CheckoutEventNames.CHECKOUT_COMPLETED) {
          // TODO: Paddle fires this before the backend webhook processes — re-fetch may
          // briefly show the old state. Consider a short delay or WebSocket for production.
          void fetchData()
        }
      },
    }).then(instance => {
      if (instance) setPaddle(instance)
    })
  }, [fetchData])

  const hasActiveSubscription =
    data?.subscription?.status === 'active' ||
    data?.subscription?.status === 'trialing'

  const openCheckout = useCallback(() => {
    paddle?.Checkout.open({
      items: [{ priceId: import.meta.env.VITE_PADDLE_PRICE_ID, quantity: 1 }],
      ...(user?.email ? { customer: { email: user.email } } : {}),
      settings: {
        displayMode: 'overlay',
        theme: 'dark',
      },
    })
  }, [paddle, user?.email])

  const handleCancel = useCallback(async () => {
    setLoadingAction('cancel')
    setActionError(null)
    try {
      await subscriptionService.cancel()
      await fetchData()
    } catch {
      setActionError('Failed to cancel subscription. Please try again.')
    } finally {
      setLoadingAction(null)
    }
  }, [fetchData])

  const handlePause = useCallback(async () => {
    setLoadingAction('pause')
    setActionError(null)
    try {
      await subscriptionService.pause()
      await fetchData()
    } catch {
      setActionError('Failed to suspend subscription. Please try again.')
    } finally {
      setLoadingAction(null)
    }
  }, [fetchData])

  return {
    data,
    loadingData,
    loadingAction,
    error,
    actionError,
    hasActiveSubscription,
    openCheckout,
    handleCancel,
    handlePause,
  }
}
