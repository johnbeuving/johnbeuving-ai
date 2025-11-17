import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — John Beuving',
  description:
    'AI Systems Architect and CTO with a passion for building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications.',
  openGraph: {
    title: 'About — John Beuving',
    description:
      'AI Systems Architect and CTO with a passion for building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications.',
    type: 'website',
    url: 'https://johnbeuving.ai/about',
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
    title: 'About — John Beuving',
    description:
      'AI Systems Architect and CTO with a passion for building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications.',
    images: ['https://johnbeuving.ai/og/default.png'],
  },
  alternates: {
    canonical: 'https://johnbeuving.ai/about',
  },
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-semibold text-gray-900 md:text-5xl">
        About
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="mb-6 leading-relaxed text-gray-700">
          I'm an AI Systems Architect and CTO with a passion for building
          intelligent systems that bridge the gap between cutting-edge AI
          research and real-world applications.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          My work focuses on creating AI systems that understand and interact
          with the physical world—combining sensor data, perception, and
          reasoning to build practical intelligence. I've spent years working on
          systems that integrate radar, computer vision, and large language
          models to solve complex problems in healthcare, autonomous systems,
          and beyond.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          I believe the future of AI lies not just in language models, but in
          systems that can perceive, reason about, and act in the real world.
          This requires a deep understanding of both the theoretical foundations
          of AI and the practical constraints of deploying systems at scale.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          When I'm not building systems, I write about AI, speak at conferences,
          and contribute to the open-source community. I'm always interested in
          connecting with others who share a passion for pushing the boundaries
          of what's possible with AI.
        </p>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="mb-4 leading-relaxed text-gray-700">Connect with me:</p>
          <p className="leading-relaxed text-gray-700">
            <a
              href="https://www.linkedin.com/in/john-beuving-7716633/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-600"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
