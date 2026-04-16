import { HomePage } from '../pages/home'
import { TermsPage } from '../pages/terms'
import { AboutPage } from '../pages/about'

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  TERMS: '/terms',
  GET_TUTORIAL: '/get-tutorial',
}

export const appRoutes = [
  {
    path: routes.HOME,
    title: 'Home',
    element: <HomePage />,
    showInHeader: true,
  },
  {
    path: routes.ABOUT,
    title: 'About',
    element: <AboutPage />,
    showInHeader: true,
  },
  {
    path: routes.TERMS,
    title: 'Terms',
    element: <TermsPage />,
    showInHeader: false,
  },
]
