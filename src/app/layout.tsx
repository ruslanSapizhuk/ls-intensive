import { Mulish } from 'next/font/google'
import './globals.css'

const mulish = Mulish({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'B&M University',
  description: '',
}

export default function RootLayout({children}: React.PropsWithChildren) {
    return (
      <html lang="uk-UA">
      <head>
          {/*<meta name="facebook-domain-verification" content="tpm3cetyhyaa37wzdx9alwr1x1350i" />*/}
      </head>
        <body className={mulish.className}>
        {children}
        </body>
      </html>
  )
}
