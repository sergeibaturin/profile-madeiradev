import { apiClient } from '../api/apiClient'

export type SubscriptionStatus = 'active' | 'trialing' | 'paused' | 'cancelled' | 'past_due'

export interface UserProfile {
  id: string
  name: string
  email: string
}

export interface SubscriptionInfo {
  subscriptionId: string
  planName: string
  priceFormatted: string
  status: SubscriptionStatus
  nextBillingDate: string
}

export interface UserMe {
  user: UserProfile
  subscription: SubscriptionInfo | null
}

export const subscriptionService = {
  getMe: (): Promise<UserMe> => apiClient.get<UserMe>('/user/me').then(r => r.data),

  cancel: (): Promise<void> => apiClient.post('/subscription/cancel').then(() => undefined),

  pause: (): Promise<void> => apiClient.post('/subscription/pause').then(() => undefined),
}
