import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Home</Typography>
      <Typography>Welcome to the Admin panel.</Typography>
    </Box>
  )
}

function Dashboard() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography>Metrics and charts will go here.</Typography>
    </Box>
  )
}

function Settings() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Settings</Typography>
      <Typography>Application settings will go here.</Typography>
    </Box>
  )
}

export function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
