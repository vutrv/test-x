'use client'

import { Button } from '../../components'
import { useTheme } from '../../hooks'

export const Home = () => {
  const { toggleTheme } = useTheme()
  const handleClick = () => {
    toggleTheme()
  }

  return (
    <Button
      label="Toggle Theme"
      func="toggle-theme"
      markToTest={true}
      position={1}
      pageName="home"
      onClick={handleClick}
      variant="contained"
      color="primary"
      size="large"
      sx={{ backgroundColor: 'green', fontSize: '1.2rem' }}
    />
  )
}
