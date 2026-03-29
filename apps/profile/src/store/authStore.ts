import { create } from 'zustand'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

interface AuthUser {
  id: string
  email: string
}

interface AuthState {
  user: AuthUser | null
  isAuthenticated: boolean
  idToken: string | null
  loading: boolean
  setAuth: (user: AuthUser, idToken: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()(set => ({
  user: null,
  isAuthenticated: false,
  idToken: null,
  loading: true,
  setAuth: (user, idToken) => set({ user, idToken, isAuthenticated: true, loading: false }),
  clearAuth: () => set({ user: null, idToken: null, isAuthenticated: false, loading: false }),
}))

// Module-level subscription — fires once on init, then on every auth state change
onAuthStateChanged(auth, async firebaseUser => {
  if (firebaseUser) {
    const idToken = await firebaseUser.getIdToken()
    useAuthStore.getState().setAuth(
      { id: firebaseUser.uid, email: firebaseUser.email ?? '' },
      idToken,
    )
  } else {
    useAuthStore.getState().clearAuth()
  }
})
