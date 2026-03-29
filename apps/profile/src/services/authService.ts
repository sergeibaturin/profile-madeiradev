import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '../lib/firebase'

const googleProvider = new GoogleAuthProvider()

export const authService = {
  login: (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password),

  signup: (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password),

  loginWithGoogle: () =>
    signInWithPopup(auth, googleProvider),
}
