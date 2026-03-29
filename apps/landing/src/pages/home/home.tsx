import { Box, Button, Container, Paper, Typography } from '@mui/material'
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

      {/* Pricing */}
      <Box
        sx={{
          width: '100%',
          mt: 8,
          mb: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/*<Typography*/}
        {/*  sx={{*/}
        {/*    fontFamily: 'JetBrains Mono',*/}
        {/*    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',*/}
        {/*    color: '#bebebe',*/}
        {/*    mb: 4,*/}
        {/*    textAlign: 'center',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Pricing*/}
        {/*</Typography>*/}
        <Paper
          elevation={4}
          sx={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: '#1e1e1e',
            border: '1px solid #2a2a2a',
            borderRadius: 3,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1,
            }}
          >
            $5,999
            <Typography
              component="span"
              sx={{
                fontFamily: 'JetBrains Mono',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                color: '#bebebe',
                fontWeight: 400,
                ml: 1,
              }}
            >
              / mo
            </Typography>
          </Typography>

          <Typography
            sx={{
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
              color: '#bebebe',
              textAlign: 'center',
              lineHeight: 2,
            }}
          >
            Full codebase audit on day one
            <br />
            Up to 40 hrs/mo · unlimited bug fixes & production support
            <br />
            CI/CD setup · security monitoring · weekly strategy call
            <br />
            <Typography
              component="span"
              sx={{ fontFamily: 'JetBrains Mono', fontSize: 'inherit', color: '#38bbea' }}
            >
              Pause or cancel anytime
            </Typography>
          </Typography>

          <Button
            component="a"
            // href="https://profile.madeiradev.com"
            href="https://calendar.app.google/3P5PXptTcdtggiqb7"
            target="_blank"
            variant="contained"
            size="large"
            sx={{
              mt: 1,
              backgroundColor: '#38bbea',
              color: '#121212',
              fontFamily: 'JetBrains Mono',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: 2,
              px: 5,
              '&:hover': { backgroundColor: '#2aa8d4' },
            }}
          >
            BOOK A CALL
          </Button>
        </Paper>
      </Box>
    </Container>
  )
}
