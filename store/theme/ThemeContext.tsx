'use client'

import React, {
  createContext,
  useState,
  ReactNode,
  FC,
  useCallback,
} from 'react'
import { ThemeProvider as MuiThemProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../../styles/theme'

export type TThemeContext = {
  toggleTheme: () => void
  currentTheme: 'light' | 'dark'
}

export const ThemeContext = createContext<TThemeContext | undefined>(undefined)

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme: theme }}>
      <MuiThemProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </MuiThemProvider>
    </ThemeContext.Provider>
  )
}
