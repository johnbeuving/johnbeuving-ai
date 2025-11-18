import type { Metadata } from 'next'
import { generateMetadata as genMetadata, pageTitle } from '@/lib/metadata'
import { PAGE_DESCRIPTIONS, SITE } from '@/lib/constants'

export const metadata: Metadata = genMetadata({
  title: pageTitle('About'),
  description: PAGE_DESCRIPTIONS.about,
  path: '/about',
})

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="mb-6 text-3xl font-semibold text-gray-900 sm:mb-8 sm:text-4xl md:text-5xl">
        About
      </h1>

      <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
        <p className="mb-4 leading-relaxed text-gray-700 sm:mb-6">
          I'm an AI Systems Architect and CTO with a passion for building
          intelligent systems that bridge the gap between cutting-edge AI
          research and real-world applications.
        </p>

        <p className="mb-4 leading-relaxed text-gray-700 sm:mb-6">
          My work focuses on creating AI systems that understand and interact
          with the physical world—combining sensor data, perception, and
          reasoning to build practical intelligence. I've spent years working on
          systems that integrate radar, computer vision, and large language
          models to solve complex problems in healthcare, autonomous systems,
          and beyond.
        </p>

        <p className="mb-4 leading-relaxed text-gray-700 sm:mb-6">
          I believe the future of AI lies not just in language models, but in
          systems that can perceive, reason about, and act in the real world.
          This requires a deep understanding of both the theoretical foundations
          of AI and the practical constraints of deploying systems at scale.
        </p>

        <p className="mb-4 leading-relaxed text-gray-700 sm:mb-6">
          When I'm not building systems, I write about AI, speak at conferences,
          and contribute to the open-source community. I'm always interested in
          connecting with others who share a passion for pushing the boundaries
          of what's possible with AI.
        </p>

        <div className="mt-6 border-t border-gray-200 pt-6 sm:mt-8">
          <p className="mb-3 leading-relaxed text-gray-700 sm:mb-4">
            Connect with me:
          </p>
          <p className="leading-relaxed text-gray-700">
            <a
              href={SITE.linkedIn}
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
