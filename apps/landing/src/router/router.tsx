import { createBrowserRouter } from 'react-router-dom'
import { appRoutes, routes } from './routes.tsx'
import { GetTutorialPage } from '../pages/get-tutorial'

export const router = createBrowserRouter([
  ...appRoutes,
  {
    path: routes.GET_TUTORIAL,
    element: <GetTutorialPage />,
  },
])
