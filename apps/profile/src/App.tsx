import { Button } from '@repo/core'
import { AppThemeProvider } from './theme/ThemeProvider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { BrowserRouter, Link } from 'react-router-dom'
import { RouterConfig } from './router'

function Nav() {
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

      <Button>Sign in</Button>
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
