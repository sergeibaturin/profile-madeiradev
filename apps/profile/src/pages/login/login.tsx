import { useState } from 'react'
import { useNavigate, useSearchParams, Link as RouterLink } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'
import { Button } from '@repo/core'
import { authService } from '../../services/authService'
import { routes } from '../../router/routes'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      fill="#4285F4"
    />
    <path
      d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
      fill="#34A853"
    />
    <path
      d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      fill="#FBBC05"
    />
    <path
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"
      fill="#EA4335"
    />
  </svg>
)

export function Login() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const registered = searchParams.get('registered') === 'true'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const next: typeof errors = {}
    if (!email) next.email = 'Email is required'
    else if (!EMAIL_REGEX.test(email)) next.email = 'Enter a valid email address'
    if (!password) next.password = 'Password is required'
    else if (password.length < 8) next.password = 'Password must be at least 8 characters'
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length > 0) { setErrors(next); return }

    setLoading(true)
    setErrors({})
    try {
      await authService.login(email, password)
      navigate(routes.PROFILE)
    } catch (err: unknown) {
      const code = (err as { code?: string }).code
      const message = ['auth/invalid-credential', 'auth/user-not-found', 'auth/wrong-password'].includes(code ?? '')
        ? 'Invalid email or password. Please try again.'
        : 'Sign in failed. Please try again.'
      setErrors({ form: message })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await authService.loginWithGoogle()
      navigate(routes.PROFILE)
    } catch (err: unknown) {
      const code = (err as { code?: string }).code
      if (code !== 'auth/popup-closed-by-user') {
        setErrors({ form: 'Google sign-in failed. Please try again.' })
      }
    }
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 400, px: 2 }}>
      <Typography variant="h5" fontWeight={700} mb={1} textAlign="center">
        Sign in
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
        Welcome back to MadeiraDev
      </Typography>

      {registered && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Account created! Please sign in.
        </Alert>
      )}

      {errors.form && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errors.form}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={e => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: undefined })) }}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={e => { setPassword(e.target.value); setErrors(prev => ({ ...prev, password: undefined })) }}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Button
          type="submit"
          fullWidth
          disabled={loading}
          sx={{ mt: 2, mb: 1 }}
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </Button>
      </Box>

      <Divider sx={{ my: 2 }}>
        <Typography variant="caption" color="text.secondary">
          or
        </Typography>
      </Divider>

      <MuiButton
        variant="outlined"
        fullWidth
        onClick={handleGoogleLogin}
        startIcon={<GoogleIcon />}
        sx={{ textTransform: 'none' }}
      >
        Continue with Google
      </MuiButton>

      <Typography variant="body2" textAlign="center" mt={3} color="text.secondary">
        Don&apos;t have an account?{' '}
        <Link component={RouterLink} to={routes.SIGNUP} underline="hover">
          Sign up
        </Link>
      </Typography>
    </Box>
  )
}
