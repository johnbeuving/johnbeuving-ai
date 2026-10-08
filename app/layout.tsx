import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import 'katex/dist/katex.min.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generateMetadata as genMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...genMetadata({
    title: SITE.title,
    description: SITE.description,
  }),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a
          href="#main"
          className="sr-only rounded-md bg-white px-4 py-2 text-blue-700 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main" className="grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
