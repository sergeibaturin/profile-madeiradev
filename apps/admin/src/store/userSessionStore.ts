import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'viewer'
}

interface UserSessionState {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User) => void
  clearSession: () => void
}

export const useUserSessionStore = create<UserSessionState>()(set => ({
  user: null,
  isAuthenticated: false,
  setUser: user => set({ user, isAuthenticated: true }),
  clearSession: () => set({ user: null, isAuthenticated: false }),
}))
