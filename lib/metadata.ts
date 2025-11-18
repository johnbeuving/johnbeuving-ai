import type { Metadata } from 'next'
import { SITE } from './constants'

interface GenerateMetadataOptions {
  title: string
  description: string
  path?: string
  ogImage?: string
  ogImageAlt?: string
  type?: 'website' | 'article'
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
    },
  }
}

/**
 * Generates page title with site name
 */
export function pageTitle(pageName: string): string {
  return `${pageName} — ${SITE.name}`
}
