import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MuiButton from '@mui/material/Button'
import { HeroLogoIcon } from '@repo/core'
import { signOut } from 'firebase/auth'
import { auth } from '../../lib/firebase'
import { routes } from '../../router/routes'
import { useAuthStore } from '../../store/authStore'

export function Profile() {
  const navigate = useNavigate()
  const { user } = useAuthStore()

  const handleLogout = async () => {
    await signOut(auth)
    navigate(routes.LOGIN)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
      }}
    >
      <Box component="img" src={HeroLogoIcon} alt="MadeiraDev" sx={{ width: 80 }} />
      <Typography variant="h5" fontWeight={700}>
        Your Profile
      </Typography>
      {user && (
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      )}
      <MuiButton variant="outlined" onClick={handleLogout}>
        Sign out
      </MuiButton>
    </Box>
  )
}