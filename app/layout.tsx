import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import ReactLenis from 'lenis/react';
import './globals.css'
import Providers from '@/components/custom-wrapper/Providers'
// import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Justin Miguel',
  description: 'Next JS Portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={`${GeistSans.className} !scroll-smooth`}>
      <ReactLenis root>
        <body className='bg-zinc-950'>
          <Providers>
            <main className='grow'>{children}</main>
            {/* <Footer /> */}
          </Providers>
        </body>
      </ReactLenis>
    </html>
  )
}