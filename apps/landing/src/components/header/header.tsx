import { Box } from '@mui/material'
import { HamburgerMenu } from './hamburger-menu.tsx'
import { useCollapse } from '@repo/core'
import { FullMenu } from './full-menu.tsx'

export const Header = () => {
  const isCollapse = useCollapse()
  return <Box>{!isCollapse ? <HamburgerMenu /> : <FullMenu />}</Box>
}
