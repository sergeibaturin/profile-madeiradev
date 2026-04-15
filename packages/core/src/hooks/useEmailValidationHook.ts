import { useState, useCallback } from 'react'
import isEmail from 'validator/lib/isEmail'

const MAX_EMAIL_LENGTH = 254

export interface UseEmailValidationReturn {
  email: string
  error: string
  setEmail: (value: string) => void
  validate: () => boolean
  clearError: () => void
}

export const useEmailValidation = (): UseEmailValidationReturn => {
  const [email, setEmailState] = useState('')
  const [error, setError] = useState('')

  const setEmail = useCallback((value: string) => {
    setEmailState(value)
    setError('')
  }, [])

  const clearError = useCallback(() => setError(''), [])

  const validate = useCallback((): boolean => {
    if (email.length > MAX_EMAIL_LENGTH) {
      setError(`Email must be ${MAX_EMAIL_LENGTH} characters or fewer`)
      return false
    }
    if (!isEmail(email)) {
      setError('Please enter a valid email')
      return false
    }
    return true
  }, [email])

  return { email, error, setEmail, validate, clearError }
}
