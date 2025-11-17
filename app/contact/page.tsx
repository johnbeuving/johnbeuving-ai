import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — John Beuving',
  description:
    'Get in touch about AI systems, real-world applications, speaking engagements, collaborations, or general inquiries.',
  openGraph: {
    title: 'Contact — John Beuving',
    description:
      'Get in touch about AI systems, real-world applications, speaking engagements, collaborations, or general inquiries.',
    type: 'website',
    url: 'https://johnbeuving.ai/contact',
    images: [
      {
        url: 'https://johnbeuving.ai/og/default.png',
        width: 1200,
        height: 630,
        alt: 'John Beuving — Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — John Beuving',
    description:
      'Get in touch about AI systems, real-world applications, speaking engagements, collaborations, or general inquiries.',
    images: ['https://johnbeuving.ai/og/default.png'],
  },
  alternates: {
    canonical: 'https://johnbeuving.ai/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8">Contact</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          I'm always interested in connecting with others working on AI systems, real-world
          applications, and pushing the boundaries of what's possible with intelligent systems.
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          For speaking engagements, collaborations, or general inquiries, please reach out:
        </p>
        
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            <a
              href="mailto:contact@johnbeuving.com"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              contact@johnbeuving.com
            </a>
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            <a
              href="https://www.linkedin.com/in/john-beuving-7716633/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

