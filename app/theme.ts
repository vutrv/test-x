'use client'
import { createTheme } from '@mui/material/styles'
import { typography, lightPalette, darkPalette } from '@/styles/theme'

// Default Material-UI palette values
const lightTheme = createTheme({
  typography,
  palette: lightPalette,
})

const darkTheme = createTheme({
  typography,
  palette: darkPalette,
})

export { lightTheme, darkTheme }
