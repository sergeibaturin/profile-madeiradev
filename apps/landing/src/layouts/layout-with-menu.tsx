import * as React from 'react'
import { Box, Container } from '@mui/material'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const LayoutWithMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          mt: 4,
          width: '90%',
        }}
        disableGutters
      >
        <Header />
      </Container>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '90%',
        }}
        disableGutters
      >
        {children}
      </Container>

      <Footer />
    </Box>
  )
}
