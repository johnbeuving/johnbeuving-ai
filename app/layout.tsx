import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Beuving — AI Systems Architect & CTO',
  description:
    'Building AI systems that bridge the physical world and intelligent models: from sensors and radar to multimodal and agentic AI.',
  openGraph: {
    title: 'John Beuving — AI Systems Architect & CTO',
    description:
      'Building AI systems that bridge the physical world and intelligent models: from sensors and radar to multimodal and agentic AI.',
    type: 'website',
    url: 'https://johnbeuving.ai',
    images: [
      {
        url: 'https://johnbeuving.ai/og/default.png',
        width: 1200,
        height: 630,
        alt: 'John Beuving',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Beuving — AI Systems Architect & CTO',
    description:
      'Building AI systems that bridge the physical world and intelligent models: from sensors and radar to multimodal and agentic AI.',
    images: ['https://johnbeuving.ai/og/default.png'],
  },
  alternates: {
    canonical: 'https://johnbeuving.ai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
