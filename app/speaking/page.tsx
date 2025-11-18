import type { Metadata } from 'next'
import { generateMetadata as genMetadata, pageTitle } from '@/lib/metadata'
import { PAGE_DESCRIPTIONS, SITE } from '@/lib/constants'

export const metadata: Metadata = genMetadata({
  title: pageTitle('Speaking'),
  description: PAGE_DESCRIPTIONS.speaking,
  path: '/speaking',
  ogImageAlt: `${SITE.name} — Speaking`,
})

export default function SpeakingPage() {
  const topics = [
    {
      title: 'Real-World AI',
      description:
        'Building AI systems that operate in the physical world, integrating sensors, perception, and reasoning to solve practical problems.',
    },
    {
      title: 'Agentic AI',
      description:
        'Designing autonomous AI agents that can plan, reason, and act independently in complex environments.',
    },
    {
      title: 'Sensors & Perception',
      description:
        'Combining radar, computer vision, and other sensor modalities to create robust perception systems for real-world applications.',
    },
    {
      title: 'AI in Healthcare',
      description:
        'Applying AI systems to healthcare challenges, from diagnostic tools to treatment optimization and patient care.',
    },
  ]

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
        Speaking
      </h1>
      <p className="mb-8 text-lg text-gray-600 sm:mb-12 sm:text-xl">
        {PAGE_DESCRIPTIONS.speaking}
      </p>

      <div className="mb-8 sm:mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:mb-6 sm:text-2xl">
          Topics
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-4 sm:p-6"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                {topic.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 sm:pt-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900 sm:mb-4 sm:text-2xl">
          Availability
        </h2>
        <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          I'm available for speaking engagements at conferences, workshops, and
          corporate events. Please reach out through the contact page to discuss
          your event.
        </p>
      </div>
    </div>
  )
}
