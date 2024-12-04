import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'

const geistMono = localFont({ src: '../styles/fonts/GeistMonoVF.woff' })
const geist = localFont({ src: '../styles/fonts/GeistVF.woff' })

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const fonts = {
  geist,
  geistMono,
  roboto,
}

export default fonts
