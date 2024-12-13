import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { CssBaseline } from '@mui/material'
import fonts from './fonts'
import { fetchUser } from '../utils'
import { UserProvider, ThemeProvider } from '../store'

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
  const user = await fetchUser()

  return (
    <html lang="en" className={geist.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <CssBaseline />
            <UserProvider user={user}>{children}</UserProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
