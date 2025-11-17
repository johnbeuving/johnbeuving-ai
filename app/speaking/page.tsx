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
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Speaking</h1>
      <p className="text-xl text-gray-600 mb-12">
        I speak at conferences, workshops, and events about AI systems, architecture, and
        building intelligent systems for the real world.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Topics</h2>
        <div className="space-y-6">
          {topics.map((topic, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{topic.title}</h3>
              <p className="text-gray-600 leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Availability</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I'm available for speaking engagements at conferences, workshops, and corporate events.
          Please reach out through the contact page to discuss your event.
        </p>
      </div>
    </div>
  )
}

