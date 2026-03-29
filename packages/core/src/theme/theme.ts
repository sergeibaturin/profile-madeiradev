import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
  },
  typography: {
    fontFamily: `'JetBrains Mono', monospace`,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFormHelperText-root.Mui-error': {
            color: '#ea8686',
          },
          '& .MuiOutlinedInput-root.Mui-error fieldset': {
            borderColor: '#ea8686',
          },
          '& label.Mui-error': {
            color: '#ea8686',
          },
        },
      },
    },
  },
})
