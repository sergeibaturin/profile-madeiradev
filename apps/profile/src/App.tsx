import { AppThemeProvider } from './theme/ThemeProvider'
import { ComingSoon } from './pages/coming-soon/coming-soon'

export function App() {
  return (
    <AppThemeProvider>
      <ComingSoon />
    </AppThemeProvider>
  )
}
