import { RouterProvider } from 'react-router-dom'
import { SharedThemeProvider } from '@repo/core'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { router } from './router/router'
import { useAuthStore } from './store/authStore'

function AuthGate() {
  const loading = useAuthStore(state => state.loading)

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  }

  return <RouterProvider router={router} />
}

export function App() {
  return (
    <SharedThemeProvider>
      <AuthGate />
    </SharedThemeProvider>
  )
}
