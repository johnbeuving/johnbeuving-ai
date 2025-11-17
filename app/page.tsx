import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllEssays } from '@/lib/mdx'
import EssayCard from '@/components/EssayCard'

export const metadata: Metadata = {
  title: 'John Beuving — AI Systems Architect & CTO',
  description: 'Building AI systems that bridge the physical world and intelligent models: from sensors and radar to multimodal and agentic AI.',
  openGraph: {
    title: 'John Beuving — AI Systems Architect & CTO',
    description: 'Building AI systems that bridge the physical world and intelligent models: from sensors and radar to multimodal and agentic AI.',
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
    description: 'Building AI systems that bridge the physical world and intelligent models: from sensors and radar to multimodal and agentic AI.',
    images: ['https://johnbeuving.ai/og/default.png'],
  },
  alternates: {
    canonical: 'https://johnbeuving.ai',
  },
}

export default function HomePage() {
  const essays = getAllEssays().slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="max-w-3xl mb-16">
        <div className="flex items-start gap-6 mb-6">
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="John Beuving"
              width={80}
              height={80}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
              John Beuving
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-2">
              AI Systems Architect & CTO
            </p>
            <p className="text-xl text-gray-500">
            Building AI systems that bridge the physical world and intelligent models: from sensors and radar to multimodal and agentic AI
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <Link
          href="/essays"
          className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors group"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
            Essays
          </h2>
          <p className="text-gray-600">
            Thoughts on AI, systems architecture, and building intelligent systems.
          </p>
        </Link>

        <Link
          href="/about"
          className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors group"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
            About
          </h2>
          <p className="text-gray-600">
            Learn about my background in AI systems and technology leadership.
          </p>
        </Link>

        <Link
          href="/speaking"
          className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors group"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
            Speaking
          </h2>
          <p className="text-gray-600">
            Topics and availability for conferences and events.
          </p>
        </Link>
      </div>

      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Latest Essays</h2>
        <div className="space-y-6">
          {essays.length > 0 ? (
            essays.map((essay) => <EssayCard key={essay.slug} essay={essay} />)
          ) : (
            <p className="text-gray-500">No essays yet. Check back soon!</p>
          )}
        </div>
      </div>
    </div>
  )
}

