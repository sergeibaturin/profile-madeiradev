import { createApiClient } from '@repo/core'
import { auth } from '../lib/firebase'

export const apiClient = createApiClient(import.meta.env.VITE_BASE_URL)

apiClient.interceptors.request.use(async config => {
  const user = auth.currentUser
  if (user) {
    const token = await user.getIdToken()
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
