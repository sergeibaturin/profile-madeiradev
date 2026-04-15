import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { postGetTutorial } from '../../api/get-tutorial'
import { useEmailValidation } from '@repo/core'

const containerSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: 'calc(100vh - 4.5rem)',
  justifyContent: 'center',
  py: 8,
}

const cardSx = {
  width: '100%',
  backgroundColor: '#1e1e1e',
  border: '1px solid #2a2a2a',
  borderRadius: 3,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

export const GetTutorial = () => {
  const { pdfSlug } = useParams<{ pdfSlug: string }>()
  const navigate = useNavigate()
  const { email, error, setEmail, validate } = useEmailValidation()
  const [downloaded, setDownloaded] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!validate()) {
      return
    }
    setLoading(true)
    try {
      await postGetTutorial(email)
    } catch {
      // proceed with download even if the request fails
    } finally {
      setLoading(false)
    }
    const link = document.createElement('a')
    link.href = `/pdfs/${pdfSlug}.pdf`
    link.download = `${pdfSlug}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDownloaded(true)
  }

  if (downloaded) {
    return (
      <Container maxWidth="sm" sx={containerSx} disableGutters>
        <Box sx={cardSx}>
          <Typography
            sx={{
              fontFamily: 'Roboto',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 900,
              color: '#ffffff',
              textAlign: 'center',
            }}
          >
            Your PDF is downloading!
          </Typography>

          <Typography
            sx={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.9rem',
              color: '#6f6f6f',
              textAlign: 'center',
            }}
          >
            Check your downloads folder.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: '#38bbea',
              color: '#121212',
              fontFamily: 'JetBrains Mono',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: 2,
              '&:hover': { backgroundColor: '#2aa8d4' },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm" sx={containerSx} disableGutters>
      <Box sx={cardSx}>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 900,
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          Get Your Tutorial
        </Typography>

        <Typography
          sx={{
            fontFamily: 'JetBrains Mono',
            fontSize: '0.9rem',
            color: '#6f6f6f',
            textAlign: 'center',
          }}
        >
          Enter your email to download the PDF
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          error={!!error}
          helperText={error}
          InputLabelProps={{ sx: { fontFamily: 'JetBrains Mono' } }}
          inputProps={{ sx: { fontFamily: 'JetBrains Mono' } }}
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={loading}
          sx={{
            backgroundColor: '#38bbea',
            color: '#121212',
            fontFamily: 'JetBrains Mono',
            fontWeight: 700,
            fontSize: '1rem',
            borderRadius: 2,
            '&:hover': { backgroundColor: '#2aa8d4' },
            '&.Mui-disabled': { opacity: 0.6 },
          }}
        >
          {loading ? 'Loading...' : 'Get TUTORIAL'}
        </Button>
      </Box>
    </Container>
  )
}
