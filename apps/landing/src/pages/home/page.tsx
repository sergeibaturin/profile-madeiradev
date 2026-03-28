import { Home } from './home.tsx'
import { LayoutWithMenu } from '../../layouts/layout-with-menu.tsx'

export const HomePage = () => {
  return (
    <LayoutWithMenu>
      <Home />
    </LayoutWithMenu>
  )
}
