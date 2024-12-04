'use client'
import { Button as MuiButton, styled } from '@mui/material'

const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: '10px',
  padding: '10px 20px',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

export default Button
