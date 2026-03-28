import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { NavLink } from 'react-router-dom'
import { MenuIcon } from '@repo/core'
import { appRoutes } from '../../router/routes.jsx'

export const HamburgerMenu = () => {
  const [open, setOpen] = React.useState<boolean>(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <Box sx={{ width: '300px' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {appRoutes
          .filter(route => route.showInHeader)
          .map(route => (
            <ListItem key={route.path} disablePadding>
              <ListItemButton>
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
              </ListItemButton>
            </ListItem>
          ))}
        {/*<Divider />*/}
        {/*<ListItem disablePadding>*/}
        {/*  <ListItemButton>*/}
        {/*    <Button*/}
        {/*      component={Link}*/}
        {/*      to={'https://blog.madeiradev.com'}*/}
        {/*      sx={{*/}
        {/*        minWidth: 'unset',*/}
        {/*        minHeight: 'unset',*/}
        {/*        color: 'primary.main',*/}
        {/*        padding: 0,*/}
        {/*        marginLeft: 0,*/}
        {/*        '&.active': {*/}
        {/*          color: '#fff',*/}
        {/*          fontWeight: 'bold',*/}
        {/*        },*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      Blog*/}
        {/*    </Button>*/}
        {/*  </ListItemButton>*/}
        {/*</ListItem>*/}
      </List>
    </Box>
  )

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          minWidth: 'unset',
          minHeight: 'unset',
          padding: 0,
          marginLeft: '-2px',
          color: '#fff',
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}
