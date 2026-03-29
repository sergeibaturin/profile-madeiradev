import { Navigate } from 'react-router-dom'
import { LoginPage } from '../pages/login'
import { SignupPage } from '../pages/signup'
import { ProfilePage } from '../pages/profile'
import { ProtectedRoute } from './ProtectedRoute'

export const routes = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROFILE: '/profile',
}

export const appRoutes = [
  {
    path: routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: routes.SIGNUP,
    element: <SignupPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: routes.PROFILE,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to={routes.LOGIN} replace />,
  },
]
