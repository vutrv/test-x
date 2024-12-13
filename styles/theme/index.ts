'use client'

import { createTheme } from '@mui/material/styles'
import typography from './typography'
import { lightPalette, darkPalette } from './palette'

const lightTheme = createTheme({
  typography,
  palette: lightPalette,
})

const darkTheme = createTheme({
  typography,
  palette: darkPalette,
})

export { lightTheme, darkTheme }
