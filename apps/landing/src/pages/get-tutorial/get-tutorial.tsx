import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
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

type SlugState = 'valid' | 'invalid'

export const GetTutorial = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { email, error, setEmail, validate } = useEmailValidation()
  const [downloaded, setDownloaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')
  const [slugState] = useState<SlugState>('valid')
  const pdf = searchParams.get('pdf') ?? ''

  const handleSubmit = async () => {
    if (!validate()) return
    setApiError('')
    setLoading(true)
    try {
      const result = await postGetTutorial(email, pdf)
      if (!result.success) {
        setApiError(result.error)
        return
      }
      if (slugState === 'valid') {
        const link = document.createElement('a')
        link.href = result.data.url
        link.download = `${pdf}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        setDownloaded(true)
      }
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (slugState === 'invalid') {
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
            PDF not found
          </Typography>

          <Typography
            sx={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.9rem',
              color: '#6f6f6f',
              textAlign: 'center',
            }}
          >
            This PDF doesn't exist — check the link you followed.
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

        {apiError && (
          <Typography
            sx={{
              fontFamily: 'JetBrains Mono',
              fontSize: '0.85rem',
              color: '#f44336',
              textAlign: 'center',
            }}
          >
            {apiError}
          </Typography>
        )}
      </Box>
    </Container>
  )
}
