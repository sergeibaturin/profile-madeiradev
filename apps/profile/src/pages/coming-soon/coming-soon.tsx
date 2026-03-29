import { Box, Container, Typography } from '@mui/material'

export function ComingSoon() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        gap: 3,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'JetBrains Mono',
          fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
          color: '#38bbea',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        madeiradev.com
      </Typography>

      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 900,
          color: '#ffffff',
          lineHeight: 1.1,
        }}
      >
        We're Coming Soon
      </Typography>

      <Box
        sx={{
          width: 60,
          height: 3,
          backgroundColor: '#38bbea',
          borderRadius: 2,
        }}
      />

      <Typography
        sx={{
          fontFamily: 'JetBrains Mono',
          fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
          color: '#bebebe',
          maxWidth: 480,
          lineHeight: 1.8,
        }}
      >
        Something great is on the way.
        <br />
        We're working hard to bring it to you.
      </Typography>
    </Container>
  )
}
