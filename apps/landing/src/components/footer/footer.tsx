import { Box, Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { routes } from '../../router/routes'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 2,
        mt: 4,
      }}
    >
      <Typography>© MadeiraDev 2026, </Typography>
      <Button
        component={NavLink}
        to={routes.TERMS}
        target="_blank"
        sx={{
          minWidth: 'unset',
          minHeight: 'unset',
          color: '#38bbea',
          textDecoration: 'underline',
        }}
      >
        Terms Of Service
      </Button>
    </Box>
  )
}
