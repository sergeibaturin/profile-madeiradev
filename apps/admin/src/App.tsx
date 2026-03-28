import { Button } from '@repo/core'
import { AppThemeProvider } from './theme/ThemeProvider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { BrowserRouter, Link } from 'react-router-dom'
import { RouterConfig } from './router'
import { useUserSessionStore } from './store/userSessionStore'

function Nav() {
  const { user, isAuthenticated, setUser, clearSession } = useUserSessionStore()

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        gap: 2,
        px: 4,
        py: 2,
        borderBottom: 1,
        borderColor: 'divider',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Admin
      </Typography>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/settings">Settings</Link>
      {isAuthenticated ? (
        <Button color="secondary" onClick={clearSession}>
          Sign out ({user?.name})
        </Button>
      ) : (
        <Button
          onClick={() =>
            setUser({ id: '1', name: 'Admin', email: 'admin@example.com', role: 'admin' })
          }
        >
          Sign in
        </Button>
      )}
    </Box>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <Nav />
        <RouterConfig />
      </AppThemeProvider>
    </BrowserRouter>
  )
}
