import { Box } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { keyframes } from '@emotion/react'

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(8px); }
  60% { transform: translateY(4px); }
`

export const ScrollIndicator = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        animation: `${bounce} 2s infinite`,
        color: 'gray',
        cursor: 'pointer',
      }}
    >
      <KeyboardArrowDownIcon fontSize="large" />
    </Box>
  )
}
