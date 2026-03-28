import { Box, Container, Typography } from '@mui/material'
import { HeroLogoIcon } from '@repo/core'

export const Home = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 4.5rem)',
        pt: 4,
        pb: 8,
      }}
      disableGutters
    >
      <Box
        component="img"
        src={HeroLogoIcon}
        alt=""
        sx={{
          mt: 2,
          mb: 4,
          width: '300px',
          '@media (max-width:600px)': { width: '200px' },
        }}
      />
      {/* Page Header */}
      <Typography
        sx={{
          fontFamily: 'Roboto',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 900,
          textAlign: 'center',
        }}
      >
        Your Fractional CTO
        <br />
        Zero Overhead, Total Ownership
      </Typography>

      <Typography
        sx={{
          fontFamily: 'JetBrains Mono',
          fontSize: 'clamp(1rem, 1.7vw, 1.25rem)',
          color: '#38bbea',
          mb: 6,
          textAlign: 'center',
        }}
      >
        100% IP Ownership. No Vendor Lock-in
      </Typography>

      <Box sx={{ mb: 0 }}>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono',
            fontSize: 'clamp(1rem, 1.7vw, 1.25rem)',
            color: '#e34d4d',
            mb: 2,
            textAlign: 'left',
          }}
        >
          Your Pains
        </Typography>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono',
            fontSize: 'clamp(1rem, 1.7vw, 1.25rem)',
            color: '#ffffff',
            mb: 6,
            textAlign: 'center',
          }}
        >
          Babysitting "cheap" freelancers who write spaghetti code?
          <br />
          Infrastructure that crashes at the first 1,000 users?
          <br />
          Losing your IP to a black-box agency?
        </Typography>

        <Typography
          sx={{
            fontFamily: 'JetBrains Mono',
            fontSize: 'clamp(1rem, 1.7vw, 1.25rem)',
            color: '#38bbea',
            mb: 2,
            textAlign: 'left',
          }}
        >
          Solution
        </Typography>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono',
            fontSize: 'clamp(1rem, 1.7vw, 1.25rem)',
            color: '#ffffff',
            mb: 6,
            textAlign: 'center',
          }}
        >
          A production-grade MVP built directly in your cloud.
          <br />
          We provide the architecture, the CI/CD, and the clean code
          <br />
          you need to scale to 10k users on day one.
        </Typography>
      </Box>

      {/*<Typography*/}
      {/*  sx={{*/}
      {/*    fontFamily: 'JetBrains Mono',*/}
      {/*    fontSize: 'clamp(1rem, 1.7vw, 1.25rem)',*/}
      {/*    color: '#6f6f6f',*/}
      {/*    mb: 6,*/}
      {/*    textAlign: 'center',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Choose the scope that fits your project needs*/}
      {/*</Typography>*/}

      {/* Pricing Cards */}
      <Box sx={{ mb: 12 }}></Box>
      <Box sx={{ mb: 8 }}>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono',
            fontSize: 'clamp(2rem, 1.7vw, 3rem)',
            color: '#bebebe',
            mb: 0,
            textAlign: 'left',
          }}
        >
          Prising
        </Typography>
      </Box>
    </Container>
  )
}
