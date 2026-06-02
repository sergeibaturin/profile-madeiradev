import { Home } from './home.tsx'
import { Box } from '@mui/material'
import { Footer } from '../../components/footer'

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Home />
      <Footer />
    </Box>
  )
}
