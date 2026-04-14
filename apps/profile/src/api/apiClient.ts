import { createApiClient } from '@repo/core'
import { useAuthStore } from '../store/authStore'

export const apiClient = createApiClient(import.meta.env.VITE_BASE_URL)

apiClient.interceptors.request.use(config => {
  const token = useAuthStore.getState().token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
