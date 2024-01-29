import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Page } from './components/Page'
import { Container } from './components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ankith T V',
  description: 'Web Developer | React | React Native | Redux | Node | Angular | Express | Postgresql | Websocket | Mongodb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Page>
          <Container>
            {children}
          </Container>
        </Page>
      </body>
    </html>
  )
}
