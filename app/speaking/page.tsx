import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speaking — John Beuving',
  description:
    'Speaking at conferences, workshops, and events about AI systems, architecture, and building intelligent systems for the real world.',
  openGraph: {
    title: 'Speaking — John Beuving',
    description:
      'Speaking at conferences, workshops, and events about AI systems, architecture, and building intelligent systems for the real world.',
    type: 'website',
    url: 'https://johnbeuving.ai/speaking',
    images: [
      {
        url: 'https://johnbeuving.ai/og/default.png',
        width: 1200,
        height: 630,
        alt: 'John Beuving — Speaking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaking — John Beuving',
    description:
      'Speaking at conferences, workshops, and events about AI systems, architecture, and building intelligent systems for the real world.',
    images: ['https://johnbeuving.ai/og/default.png'],
  },
  alternates: {
    canonical: 'https://johnbeuving.ai/speaking',
  },
}

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
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
        Speaking
      </h1>
      <p className="mb-12 text-xl text-gray-600">
        I speak at conferences, workshops, and events about AI systems,
        architecture, and building intelligent systems for the real world.
      </p>

      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Topics</h2>
        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div key={index} className="rounded-lg border border-gray-200 p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {topic.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Availability
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          I'm available for speaking engagements at conferences, workshops, and
          corporate events. Please reach out through the contact page to discuss
          your event.
        </p>
      </div>
    </div>
  )
}
