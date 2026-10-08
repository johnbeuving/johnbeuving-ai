import type { MetadataRoute } from 'next'
import { getAllEssays, getTranslations } from '@/lib/mdx'
import { SITE } from '@/lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const essays = getAllEssays()
  const latest = essays[0]?.date

  const pages = ['', '/essays', '/about', '/speaking', '/contact'].map(
    (path) => ({
      url: `${SITE.url}${path}`,
      lastModified: path === '' || path === '/essays' ? latest : undefined,
    })
  )

  const essayPages = essays.map((essay) => {
    const translations = getTranslations(essay.slug)
    return {
      url: `${SITE.url}/essays/${essay.locale}/${essay.slug}`,
      lastModified: essay.date,
      ...(translations.length > 1 && {
        alternates: {
          languages: Object.fromEntries(
            translations.map((locale) => [
              locale,
              `${SITE.url}/essays/${locale}/${essay.slug}`,
            ])
          ),
        },
      }),
    }
  })

  return [...pages, ...essayPages]
}
