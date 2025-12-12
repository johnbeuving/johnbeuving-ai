import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllEssays } from '@/lib/mdx'
import EssayCard from '@/components/EssayCard'
import { generateMetadata as genMetadata } from '@/lib/metadata'
import { SITE, CONTENT } from '@/lib/constants'

export const metadata: Metadata = genMetadata({
  title: SITE.title,
  description: SITE.description,
})

export default function HomePage() {
  const essays = getAllEssays().slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-12 max-w-3xl sm:mb-16">
        <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt={SITE.name}
              width={80}
              height={80}
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="mb-3 text-3xl font-semibold text-gray-900 sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              {SITE.name}
            </h1>
            <p className="mb-2 text-xl text-gray-600 sm:text-2xl md:text-3xl">
              AI Systems Architect & CTO
            </p>
            <p className="text-base text-gray-500 sm:text-lg md:text-xl">
              {SITE.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 grid gap-4 sm:mb-16 sm:gap-6 md:grid-cols-3">
        <Link
          href="/essays"
          className="group rounded-lg border border-gray-200 p-5 transition-colors hover:border-blue-500 sm:p-6"
        >
          <h2 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-500 sm:text-xl">
            Essays
          </h2>
          <p className="text-sm text-gray-600 sm:text-base">
            {CONTENT.essaysDescription}
          </p>
        </Link>

        <Link
          href="/about"
          className="group rounded-lg border border-gray-200 p-5 transition-colors hover:border-blue-500 sm:p-6"
        >
          <h2 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-500 sm:text-xl">
            About
          </h2>
          <p className="text-sm text-gray-600 sm:text-base">
            {CONTENT.aboutDescription}
          </p>
        </Link>

        <Link
          href="/speaking"
          className="group rounded-lg border border-gray-200 p-5 transition-colors hover:border-blue-500 sm:p-6"
        >
          <h2 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-500 sm:text-xl">
            Speaking
          </h2>
          <p className="text-sm text-gray-600 sm:text-base">
            {CONTENT.speakingDescription}
          </p>
        </Link>
      </div>

      <div className="mb-8 mt-8 sm:mt-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:mb-6 sm:text-3xl">
          Latest Essays
        </h2>
        <div className="space-y-6">
          {essays.length > 0 ? (
            essays.map((essay) => <EssayCard key={`${essay.locale}-${essay.slug}`} essay={essay} />)
          ) : (
            <p className="text-gray-500">No essays yet. Check back soon!</p>
          )}
        </div>
      </div>
    </div>
  )
}
