import { createBrowserRouter, type RouterProviderProps, type RouteObject } from 'react-router-dom'
import { appRoutes } from './routes'

export const router: RouterProviderProps['router'] = createBrowserRouter(appRoutes as RouteObject[])
