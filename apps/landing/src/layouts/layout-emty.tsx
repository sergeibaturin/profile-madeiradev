import * as React from 'react'
import { Box, Container } from '@mui/material'

export const LayoutEmpty = ({ children }: { children: React.ReactNode }) => {
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '100%',
          height: '100vh',
          '@media (max-width:600px)': {
            width: '90%',
          },
          '@media (max-width:1024px)': {
            width: '90%',
          },
        }}
        disableGutters
      >
        {children}
      </Container>
    </Box>
  )
}
