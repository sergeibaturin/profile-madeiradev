import { Box, Container, Typography, Chip, Link } from '@mui/material'
import { FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { useScrollIndicatorHook } from '@repo/core'
import { ScrollIndicator } from '@repo/core'

const techList = [
  'mobile / Flutter',
  'front-end / React',
  'back-end / Go, Dart, Node',
  'db / SQL, NoSQL',
  'platforms / AWS, GCP',
  'LLM, Vector DBs',
  'AI solutions',
]

export const About = () => {
  const isBottom = useScrollIndicatorHook()
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        '@media (max-width:600px)': {
          mt: 2,
          pb: 2,
        },
      }}
      disableGutters
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '@media (max-width:600px)': {
            flexDirection: 'column-reverse',
            justifyContent: 'start',
          },
        }}
      >
        <Box
          sx={{
            width: '50%',
            '@media (max-width:600px)': {
              width: '100%',
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: '64px',
              fontWeight: 900,
              '@media (max-width:600px)': {
                fontSize: 'clamp(3rem, 5vw, 9rem)',
              },
            }}
          >
            Serge
          </Typography>
          <Typography
            sx={{
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(1rem, 1.7vw, 3rem)',
              fontWeight: 300,
              color: '#6f6f6f',
            }}
          >
            full stack engineer / 11 years experience
          </Typography>
          <Typography
            sx={{
              mb: 7,
              fontFamily: 'JetBrains Mono',
              fontSize: 'clamp(0.875rem, 1.7vw, 1.25rem)',
              fontWeight: 300,
              color: '#6f6f6f',
              '@media (max-width:600px)': {
                mb: 2,
              },
            }}
          >
            sergei.baturin.pt@gmail.com
          </Typography>
          <Typography>
            {techList.map(tech => (
              <Chip
                component="span"
                key={tech}
                label={tech}
                sx={{
                  fontFamily: 'JetBrains Mono',
                  bgcolor: 'rgba(30,41,59,0.5)',
                  borderRadius: '4px',
                  color: '#E2E8F0',
                  fontSize: 14,
                  mr: 2,
                  mb: 2,
                  '@media (max-width:600px)': {
                    mr: 1,
                    mb: 1,
                    fontSize: 12,
                  },
                }}
              />
            ))}
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
            <Link
              href="https://www.linkedin.com/in/sergei-baturin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} color="#1DA1F2" />
            </Link>
            {/*<Link*/}
            {/*  href="https://x.com/sergebaturin"*/}
            {/*  target="_blank"*/}
            {/*  rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  <FaXTwitter size={24} color="#fff" />*/}
            {/*</Link>*/}
            <Link
              href="https://www.youtube.com/@madeiradev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} color="red" />
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            width: '50%',
            height: '450px',
            '@media (max-width:600px)': {
              width: '100%',
              height: '250px',
            },
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/uofSK7H9TmE?si=e1U7NtM-WN1YnKm1?controls=0&autoplay=1&loop=1&mute=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px',
            }}
          />
        </Box>
      </Box>
      {!isBottom && <ScrollIndicator />}
    </Container>
  )
}
