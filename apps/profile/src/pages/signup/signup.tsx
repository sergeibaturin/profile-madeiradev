import { useState } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Button } from '@repo/core'
import { authService } from '../../services/authService'
import { routes } from '../../router/routes'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Signup() {
  const navigate = useNavigate()

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
      await authService.signup(email, password)
      navigate(`${routes.LOGIN}?registered=true`)
    } catch (err: unknown) {
      const code = (err as { code?: string }).code
      const message = code === 'auth/email-already-in-use'
        ? 'An account with this email already exists.'
        : 'Could not create account. Please try again.'
      setErrors({ form: message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 400, px: 2 }}>
      <Typography variant="h5" fontWeight={700} mb={1} textAlign="center">
        Create account
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
        Join MadeiraDev
      </Typography>

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
          helperText={errors.password ?? 'Minimum 8 characters'}
        />

        <Button
          type="submit"
          fullWidth
          disabled={loading}
          sx={{ mt: 2, mb: 1 }}
        >
          {loading ? 'Creating account…' : 'Create account'}
        </Button>
      </Box>

      <Typography variant="body2" textAlign="center" mt={3} color="text.secondary">
        Already have an account?{' '}
        <Link component={RouterLink} to={routes.LOGIN} underline="hover">
          Sign in
        </Link>
      </Typography>
    </Box>
  )
}
