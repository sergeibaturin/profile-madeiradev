import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { routes } from './routes'

export function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuthStore()
  if (loading) return null
  return isAuthenticated ? <Outlet /> : <Navigate to={routes.LOGIN} replace />
}
