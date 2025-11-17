import type { Metadata } from 'next'
import { getAllEssays } from '@/lib/mdx'
import EssayCard from '@/components/EssayCard'

export const metadata: Metadata = {
  title: 'Essays — John Beuving',
  description:
    'Thoughts on AI, systems architecture, and building intelligent systems that understand the real world.',
  openGraph: {
    title: 'Essays — John Beuving',
    description:
      'Thoughts on AI, systems architecture, and building intelligent systems that understand the real world.',
    type: 'website',
    url: 'https://johnbeuving.ai/essays',
    images: [
      {
        url: 'https://johnbeuving.ai/og/default.png',
        width: 1200,
        height: 630,
        alt: 'John Beuving — Essays',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essays — John Beuving',
    description:
      'Thoughts on AI, systems architecture, and building intelligent systems that understand the real world.',
    images: ['https://johnbeuving.ai/og/default.png'],
  },
  alternates: {
    canonical: 'https://johnbeuving.ai/essays',
  },
}

export default function EssaysPage() {
  const essays = getAllEssays()

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-semibold text-gray-900 md:text-5xl">
        Essays
      </h1>
      <p className="mb-12 text-xl text-gray-600">
        Thoughts on AI, systems architecture, and building intelligent systems.
      </p>

      <div className="space-y-6">
        {essays.length > 0 ? (
          essays.map((essay) => <EssayCard key={essay.slug} essay={essay} />)
        ) : (
          <p className="text-gray-500">No essays yet. Check back soon!</p>
        )}
      </div>
    </div>
  )
}
