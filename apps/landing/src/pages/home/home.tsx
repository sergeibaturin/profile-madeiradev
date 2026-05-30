import { Box, Button, Container, Paper, Typography, useTheme, useMediaQuery, List, ListItem } from '@mui/material'
import { HeroLogoIcon } from '@repo/core'
import { motion } from 'framer-motion'
import { text } from './text'

const BackgroundAnimation = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#121212',
      }}
    >
      {/* Grid Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(rgba(56, 187, 234, 0.03) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(56, 187, 234, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {[...Array(300)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: Math.random() * 0.4 + 0.1,
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [Math.random() * 100 + 'vw', Math.random() * 100 + 'vw', Math.random() * 100 + 'vw'],
            y: [Math.random() * 100 + 'vh', Math.random() * 100 + 'vh', Math.random() * 100 + 'vh'],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 30 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            borderRadius: '50%',
            backgroundColor: i % 3 === 0 ? '#38bbea' : '#ffffff',
            boxShadow: i % 3 === 0 ? '0 0 15px #38bbea' : '0 0 10px #ffffff',
          }}
        />
      ))}
    </Box>
  )
}

export const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100%', overflow: 'visible' }}>
      <BackgroundAnimation />

      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 200px)', // Adjust for header/footer
          py: { xs: 8, md: 12 },
        }}
        disableGutters
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
        >
          <Box
            component="img"
            src={HeroLogoIcon}
            alt="Madeira Dev Logo"
            sx={{
              mb: 6,
              width: '240px',
              filter: 'drop-shadow(0 0 30px rgba(56, 187, 234, 0.4))',
              '@media (max-width:600px)': { width: '160px' },
            }}
          />

          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              fontWeight: 900,
              textAlign: 'center',
              lineHeight: 1.05,
              mb: 3,
              letterSpacing: '1px',
              // background: 'linear-gradient(180deg, #FFFFFF 30%, #38bbea 150%)',
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
              // textTransform: 'uppercase',
            }}
          >
            Your Fractional CTO
            <br />
            Zero Overhead, Total Ownership
          </Typography>

          <Typography
            sx={{
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              color: '#38bbea',
              mb: 6,
              p: 2,
              borderRadius: 2,
              textAlign: 'center',
              fontWeight: 'bold',
              maxWidth: '850px',
              px: 2,
              letterSpacing: '0.05em',
              backgroundColor: 'rgba(56, 187, 234, 0.1)',
            }}

          >
            Expert Troubleshooting for Startups, SaaS Products & Applications
            {/*We bridge the gap between prototypes and production-ready products.*/}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 3,
              width: '100%',
              maxWidth: '1200px',
              mb: 10,
              // px: 3,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: { xs: 4, md: 5 },
                backgroundColor: 'rgba(25, 25, 25, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: 6,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  borderColor: 'rgba(56, 187, 234, 0.4)',
                  backgroundColor: 'rgba(56, 187, 234, 0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                },
              }}
            >
              <Typography
                sx={{
                  color: '#e34d4d',
                  mb: 3,
                  fontFamily: 'JetBrains Mono',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                }}
              >
                [ FROM CHAOS TO CODE ]
              </Typography>
              <Typography
                sx={{ color: '#bebebe', lineHeight: 1.8, fontSize: '1.1rem', fontWeight: 300 }}
              >
                Stop "vibe-coding" and start scaling. We take full ownership of your security,
                infrastructure, and code quality. Get senior technical leadership to harden your
                stack, optimize your costs, and ship production-ready features — without the $200k
                salary.
              </Typography>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: { xs: 4, md: 5 },
                backgroundColor: 'rgba(25, 25, 25, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: 6,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  borderColor: 'rgba(56, 187, 234, 0.4)',
                  backgroundColor: 'rgba(56, 187, 234, 0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                },
              }}
            >
              <Typography
                sx={{
                  color: '#38bbea',
                  mb: 3,
                  fontFamily: 'JetBrains Mono',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                }}
              >
                [ THE OPERATING MODEL ]
              </Typography>
              <Typography
                sx={{ color: '#bebebe', lineHeight: 1.8, fontSize: '1.1rem', fontWeight: 300 }}
              >
                We act as your technical co-founder on demand. From hardening your database to
                setting up automated pipelines, we clean up the "AI mess" and ensure your app is
                enterprise-grade. Total technical ownership so you can focus 100% on marketing and
                growth.
              </Typography>
            </Paper>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 3,
            width: '100%',
            maxWidth: '1200px',
            mb: 10,
            // px: 3,
          }}>
            <Paper elevation={0}
              sx={{
                flex: 1,
                p: { xs: 4, md: 5 },
                backgroundColor: 'rgba(25, 25, 25, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: 6,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  borderColor: 'rgba(56, 187, 234, 0.4)',
                  backgroundColor: 'rgba(56, 187, 234, 0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                },
              }}>
              <Typography sx={{
                color: '#bdff8f',
                mb: 3,
                fontFamily: 'JetBrains Mono',
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '0.1em',
              }}>
                {text.sectionTitle}
              </Typography>
              <Typography sx={{ color: '#bebebe', lineHeight: 1.8, fontSize: '1.1rem', fontWeight: 300 }}>
                {text.billingNote}
              </Typography>


              <List sx={{
                listStyle: 'outside',
                listStyleType: 'disc',
              }}>
                {text.steps.map(step => (
                  <ListItem key={step.id} sx={{ display: 'list-item', mb: 2, pl: 0 }}>
                    <Typography sx={{ color: '#38bbea', fontWeight: 600, fontSize: '1.05rem' }}>
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: '#bebebe', lineHeight: 1.6, fontSize: '1rem', fontWeight: 300, mt: 0.5 }}>
                      {step.description}
                    </Typography>
                  </ListItem>
                ))}
              </List>

            </Paper>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Paper
              elevation={0}
              sx={{
                width: '100%',
                maxWidth: '700px',
                backgroundColor: 'rgba(15, 15, 15, 0.9)',
                backdropFilter: 'blur(30px)',
                border: '2px solid #38bbea22',
                borderRadius: 8,
                p: { xs: 5, md: 7 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 0 40px rgba(56, 187, 234, 0.05)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'baseline',
                }}
              >
                $5,999
                <Typography
                  component="span"
                  sx={{
                    fontFamily: 'JetBrains Mono',
                    fontSize: '1.5rem',
                    color: '#38bbea',
                    fontWeight: 500,
                    ml: 2,
                  }}
                >
                  / month
                </Typography>
              </Typography>

              <Box
                sx={{
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #38bbea44, transparent)',
                }}
              />

              <Typography
                sx={{
                  fontFamily: 'JetBrains Mono',
                  fontSize: '1.05rem',
                  color: '#bebebe',
                  textAlign: 'center',
                  lineHeight: 2.4,
                  fontWeight: 300,
                }}
              >
                • Full codebase audit on day one
                <br />
                • Up to 40 hrs/mo · unlimited bug fixes
                <br />
                • CI/CD setup · security monitoring
                <br />
                • Weekly strategy call · production support
                <br />
                <Typography
                  component="span"
                  sx={{
                    color: '#38bbea',
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    mt: 1,
                    display: 'inline-block',
                  }}
                >
                  PAUSE OR CANCEL ANYTIME
                </Typography>
              </Typography>

              <Button
                component="a"
                href="https://calendar.app.google/3P5PXptTcdtggiqb7"
                target="_blank"
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  backgroundColor: '#38bbea',
                  color: '#000000',
                  fontFamily: 'JetBrains Mono',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  borderRadius: 3,
                  px: 8,
                  py: 2,
                  boxShadow: '0 0 30px rgba(56, 187, 234, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#ffffff',
                    boxShadow: '0 0 50px rgba(255, 255, 255, 0.6)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                BOOK A STRATEGY CALL
              </Button>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box >
  )
}
