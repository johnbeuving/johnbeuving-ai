import type { Metadata } from 'next'
import { getAllEssays, type Locale } from '@/lib/mdx'
import EssayCard from '@/components/EssayCard'
import { generateMetadata as genMetadata, pageTitle } from '@/lib/metadata'
import { PAGE_DESCRIPTIONS, CONTENT, SITE } from '@/lib/constants'

export const metadata: Metadata = genMetadata({
  title: pageTitle('Essays'),
  description: PAGE_DESCRIPTIONS.essays,
  path: '/essays',
  ogImageAlt: `${SITE.name} — Essays`,
})

export default function EssaysPage() {
  const allEssays = getAllEssays()
  const enEssays = allEssays.filter((e) => e.locale === 'en')
  const nlEssays = allEssays.filter((e) => e.locale === 'nl')

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="mb-6 text-3xl font-semibold text-gray-900 sm:mb-8 sm:text-4xl md:text-5xl">
        Essays
      </h1>
      <p className="mb-8 text-lg text-gray-600 sm:mb-12 sm:text-xl">
        {CONTENT.essaysDescription}
      </p>

      {allEssays.length === 0 ? (
        <p className="text-gray-500">No essays yet. Check back soon!</p>
      ) : (
        <div className="space-y-12">
          {enEssays.length > 0 && (
            <section>
              <h2 className="mb-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
                English
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {enEssays.map((essay) => (
                  <EssayCard key={`en-${essay.slug}`} essay={essay} />
                ))}
              </div>
            </section>
          )}

          {nlEssays.length > 0 && (
            <section>
              <h2 className="mb-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
                Nederlands
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {nlEssays.map((essay) => (
                  <EssayCard key={`nl-${essay.slug}`} essay={essay} />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}
