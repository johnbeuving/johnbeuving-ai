import type { Metadata } from 'next'
import { getAllEssays } from '@/lib/mdx'
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
  const essays = getAllEssays()

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="mb-6 text-3xl font-semibold text-gray-900 sm:mb-8 sm:text-4xl md:text-5xl">
        Essays
      </h1>
      <p className="mb-8 text-lg text-gray-600 sm:mb-12 sm:text-xl">
        {CONTENT.essaysDescription}
      </p>

      <div className="space-y-4 sm:space-y-6">
        {essays.length > 0 ? (
          essays.map((essay) => <EssayCard key={essay.slug} essay={essay} />)
        ) : (
          <p className="text-gray-500">No essays yet. Check back soon!</p>
        )}
      </div>
    </div>
  )
}
