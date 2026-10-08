import type { Metadata } from 'next'
import { SITE } from './constants'

interface GenerateMetadataOptions {
  title: string
  description: string
  path?: string
  ogImage?: string
  ogImageAlt?: string
  type?: 'website' | 'article'
  publishedTime?: string
  locale?: string
  // Locale code → path, for pages published in more than one language
  languages?: Record<string, string>
}

/**
 * Generates metadata object for Next.js pages with OpenGraph and Twitter cards
 */
export function generateMetadata({
  title,
  description,
  path = '',
  ogImage = SITE.ogImage,
  ogImageAlt = SITE.name,
  type = 'website',
  publishedTime,
  locale = 'en',
  languages,
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: SITE.name,
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
      ...(type === 'article' && {
        publishedTime,
        authors: [SITE.url + '/about'],
      }),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      ...(languages && {
        languages: Object.fromEntries(
          Object.entries(languages).map(([code, href]) => [
            code,
            `${SITE.url}${href}`,
          ])
        ),
      }),
    },
  }
}

/**
 * Generates page title with site name
 */
export function pageTitle(pageName: string): string {
  return `${pageName} — ${SITE.name}`
}
