import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import { Button, HeroLogoIcon } from '@repo/core'
import { useAuthStore } from '../../store/authStore'
import { routes } from '../../router/routes'
import { useSubscription } from '../../hooks/useSubscription'
import type { SubscriptionStatus } from '../../services/subscriptionService'

const STATUS_COLOR: Record<SubscriptionStatus, 'success' | 'warning' | 'error' | 'info'> = {
  active: 'success',
  trialing: 'info',
  paused: 'warning',
  cancelled: 'error',
  past_due: 'error',
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(iso))
}

export function Profile() {
  const navigate = useNavigate()
  const {
    data,
    loadingData,
    loadingAction,
    error,
    actionError,
    hasActiveSubscription,
    openCheckout,
    handleCancel,
    handlePause,
  } = useSubscription()

  const handleLogout = () => {
    useAuthStore.getState().clearAuth()
    navigate(routes.LOGIN)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 6,
        gap: 3,
      }}
    >
      <Box component="img" src={HeroLogoIcon} alt="MadeiraDev" sx={{ width: 80 }} />

      <Typography variant="h5" fontWeight={700}>
        Your Profile
      </Typography>

      {loadingData && <CircularProgress />}

      {error && (
        <Alert severity="error" sx={{ width: '100%', maxWidth: 480 }}>
          {error}
        </Alert>
      )}

      {!loadingData && data && (
        <Paper sx={{ p: 3, width: '100%', maxWidth: 480 }}>
          {/* User info */}
          <Typography variant="caption" color="text.secondary">
            NAME
          </Typography>
          <Typography variant="body1" fontWeight={600} sx={{ mb: 1.5 }}>
            {data.user.name}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            EMAIL
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.user.email}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Subscription info */}
          {data.subscription ? (
            <>
              <Typography variant="caption" color="text.secondary">
                PLAN
              </Typography>
              <Typography variant="body1" fontWeight={600} sx={{ mb: 1.5 }}>
                {data.subscription.planName}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                PRICE
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                {data.subscription.priceFormatted}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                STATUS
              </Typography>
              <Box sx={{ mt: 0.5, mb: 1.5 }}>
                <Chip
                  label={data.subscription.status.replace('_', ' ')}
                  color={STATUS_COLOR[data.subscription.status]}
                  size="small"
                />
              </Box>

              {data.subscription.status !== 'cancelled' && (
                <>
                  <Typography variant="caption" color="text.secondary">
                    NEXT BILLING
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {formatDate(data.subscription.nextBillingDate)}
                  </Typography>
                </>
              )}
            </>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No active subscription
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          {actionError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {actionError}
            </Alert>
          )}

          {/* Action buttons */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {!hasActiveSubscription && (
              <Button onClick={openCheckout}>
                Subscribe
              </Button>
            )}

            {hasActiveSubscription && (
              <MuiButton
                variant="outlined"
                color="warning"
                onClick={() => void handlePause()}
                disabled={loadingAction !== null}
                startIcon={
                  loadingAction === 'pause' ? <CircularProgress size={16} color="inherit" /> : undefined
                }
              >
                {loadingAction === 'pause' ? 'Suspending…' : 'Suspend subscription'}
              </MuiButton>
            )}

            {hasActiveSubscription && (
              <MuiButton
                variant="outlined"
                color="error"
                onClick={() => void handleCancel()}
                disabled={loadingAction !== null}
                startIcon={
                  loadingAction === 'cancel' ? <CircularProgress size={16} color="inherit" /> : undefined
                }
              >
                {loadingAction === 'cancel' ? 'Cancelling…' : 'Cancel subscription'}
              </MuiButton>
            )}
          </Box>
        </Paper>
      )}

      <MuiButton variant="outlined" onClick={() => void handleLogout()} sx={{ mt: 1 }}>
        Sign out
      </MuiButton>
    </Box>
  )
}
