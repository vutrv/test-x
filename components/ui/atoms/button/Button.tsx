'use client'
import { Button as MuiButton, ButtonProps, styled } from '@mui/material'
import { FC } from 'react'

type TButtonFunc =
  | 'save'
  | 'cancel'
  | 'delete'
  | 'add'
  | 'submit'
  | 'fetch'
  | 'upload'
  | 'download'
  | 'navigate'
  | 'paginate'
  | 'open'
  | 'close'
  | 'toggle-theme'
  | 'toggle-view'
  | 'collapse-expand'
  | 'login'
  | 'logout'
  | 'signup'

export interface IButton extends ButtonProps {
  label: string
  markToTest?: boolean
  func?: TButtonFunc
  pageName?: string
  position?: number
}

const StyledButton = styled(MuiButton)(({ theme }) => ({
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

export const Button: FC<IButton> = (props) => {
  const { label, markToTest, func, pageName, position, onClick, ...muiProps } =
    props

  if (markToTest) {
    if (!func) throw new Error('func is required when component marked to test')
    if (!pageName)
      throw new Error('pageName is required when component marked to test')
    if (position === undefined || position <= 0) {
      throw new Error(
        'position must be greater than 0 when component marked to test',
      )
    }
  }

  const testId =
    markToTest && func && position && position > 0 && pageName
      ? `${func}-button-${pageName}-${position}`
      : undefined

  return (
    <StyledButton
      {...(testId ? { 'data-testid': testId } : {})}
      onClick={onClick}
      {...muiProps}
    >
      {label}
    </StyledButton>
  )
}
