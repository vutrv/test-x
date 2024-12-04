import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import fonts from './fonts'
import { lightTheme } from './theme'
import { fetchUser } from '@/utils'
import { UserProvider } from '@/store'

const { geist } = fonts

export const metadata: Metadata = {
  title: 'Project-X',
  description: '',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = lightTheme
  const user = await fetchUser()

  return (
    <html lang="en" className={geist.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <UserProvider user={user}>{children}</UserProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
