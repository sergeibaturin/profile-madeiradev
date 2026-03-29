import { Box, Button } from '@mui/material'
import { appRoutes } from '../../router/routes.tsx'
import { NavLink } from 'react-router-dom'

export const FullMenu = () => {
  return (
    <Box sx={{ position: 'sticky', top: 100 }}>
      {appRoutes
        .filter(route => route.showInHeader)
        .map(route => (
          <Button
            component={NavLink}
            to={route.path}
            key={route.path}
            sx={{
              minWidth: 'unset',
              minHeight: 'unset',
              color: '#6f6f6f',
              marginLeft: '1rem',
              '&.active': {
                color: '#fff',
                fontWeight: 'bold',
              },
              '&:first-of-type': {
                marginLeft: '-.5rem',
              },
            }}
          >
            {route.title}
          </Button>
        ))}
      {/*<Button*/}
      {/*  component={Link}*/}
      {/*  to={'https://blog.madeiradev.com'}*/}
      {/*  sx={{*/}
      {/*    minWidth: 'unset',*/}
      {/*    minHeight: 'unset',*/}
      {/*    color: 'primary.main',*/}
      {/*    marginLeft: '1rem',*/}
      {/*    '&.active': {*/}
      {/*      color: '#fff',*/}
      {/*      fontWeight: 'bold',*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Blog*/}
      {/*</Button>*/}
    </Box>
  )
}
