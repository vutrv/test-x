import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline } from '@mui/material'
import HomePage from '../../../pages/home'
import { ThemeProvider, UserProvider } from '../../../store'

describe('HomePage Component', () => {
  it('throws an error if useTheme is used outside of ThemeProvider', () => {
    const renderWithError = () => {
      render(<HomePage />)
    }

    expect(renderWithError).toThrow(
      'useTheme must be used within a ThemeProvider',
    )
  })

  it('toggles theme and updates background color when button is clicked', async () => {
    const user = userEvent.setup()

    render(
      <AppRouterCacheProvider>
        <ThemeProvider>
          <CssBaseline />
          <UserProvider user={{ name: 'admin', email: 'admin.test@gmail.com' }}>
            <HomePage />
          </UserProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>,
    )

    const button = screen.getByRole('button', { name: /Toggle Theme/i })

    // Verify initial background color (light theme)
    expect(getComputedStyle(document.body).backgroundColor).toBe(
      'rgb(255, 255, 255)',
    )

    // Click to toggle theme to dark
    await user.click(button)
    expect(getComputedStyle(document.body).backgroundColor).toBe(
      'rgb(18, 18, 18)',
    )

    // Click to toggle back to light
    await user.click(button)
    expect(getComputedStyle(document.body).backgroundColor).toBe(
      'rgb(255, 255, 255)',
    )
  })
})
