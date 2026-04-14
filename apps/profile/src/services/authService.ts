import { apiClient } from '../api/apiClient'
import { useAuthStore } from '../store/authStore'

interface AuthResponse {
  token: string
  user: { id: string; email: string; name: string }
}

export const authService = {
  signup: async (email: string, password: string) => {
    const { data } = await apiClient.post<AuthResponse>('/auth/signup', { email, password })
    useAuthStore.getState().setAuth(data.user, data.token)
    return data
  },

  login: async (email: string, password: string) => {
    const { data } = await apiClient.post<AuthResponse>('/auth/login', { email, password })
    useAuthStore.getState().setAuth(data.user, data.token)
    return data
  },
}
