import type { Metadata } from 'next'
import { generateMetadata as genMetadata, pageTitle } from '@/lib/metadata'
import { PAGE_DESCRIPTIONS, SITE } from '@/lib/constants'

export const metadata: Metadata = genMetadata({
  title: pageTitle('Contact'),
  description: PAGE_DESCRIPTIONS.contact,
  path: '/contact',
  ogImageAlt: `${SITE.name} — Contact`,
})

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-prose px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="mb-6 text-3xl font-semibold text-gray-900 sm:mb-8 sm:text-4xl md:text-5xl">
        Contact
      </h1>

      <div>
        <p className="mb-4 leading-relaxed text-gray-700 sm:mb-6">
          I'm always interested in connecting with others working on AI systems,
          real-world applications, and pushing the boundaries of what's possible
          with intelligent systems.
        </p>

        <p className="mb-4 leading-relaxed text-gray-700 sm:mb-6">
          For speaking engagements, collaborations, or general inquiries, please
          reach out:
        </p>

        <div className="space-y-3 sm:space-y-4">
          <p className="leading-relaxed text-gray-700">
            <a
              href={`mailto:${SITE.email}`}
              className="break-all text-blue-500 underline hover:text-blue-600"
            >
              {SITE.email}
            </a>
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
