import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  getEssaySlugs,
  getEssayBySlug,
  getEssayFrontmatter,
  getTranslations,
  formatDate,
  type Locale,
} from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { mdxComponents } from '@/components/MDXContent'
import { JsonLd, person } from '@/components/JsonLd'
import { generateMetadata as genMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'nl']
  const params: { locale: Locale; slug: string }[] = []

  for (const locale of locales) {
    const slugs = getEssaySlugs(locale)
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  try {
    const { slug, locale } = await params
    const post = getEssayFrontmatter(slug, locale)
    const ogImageUrl = `${SITE.url}/og/${locale}-${slug}.png`
    const translations = getTranslations(slug)

    return genMetadata({
      title: post.title,
      description: post.description,
      path: `/essays/${locale}/${slug}`,
      ogImage: ogImageUrl,
      ogImageAlt: post.title,
      type: 'article',
      publishedTime: post.date,
      locale,
      languages:
        translations.length > 1
          ? Object.fromEntries(
              translations.map((code) => [code, `/essays/${code}/${slug}`])
            )
          : undefined,
    })
  } catch {
    return {
      title: 'Essay Not Found',
      description: 'The requested essay could not be found.',
    }
  }
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { slug, locale } = await params

  let essay: ReturnType<typeof getEssayBySlug>
  try {
    essay = getEssayBySlug(slug, locale)
  } catch {
    notFound()
  }
  const { metadata, content } = essay
  const otherLocale = locale === 'en' ? 'nl' : 'en'
  const translated = getTranslations(slug).includes(otherLocale)

  return (
    <article
      lang={locale}
      className="mx-auto max-w-prose px-4 py-8 sm:px-6 sm:py-12"
    >
      <JsonLd
        data={{
          '@type': 'BlogPosting',
          headline: metadata.title,
          description: metadata.description,
          datePublished: metadata.date,
          inLanguage: locale,
          url: `${SITE.url}/essays/${locale}/${slug}`,
          image: `${SITE.url}/og/${locale}-${slug}.png`,
          author: person,
        }}
      />
      <header className="mb-8 sm:mb-12">
        <h1 className="mb-3 text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
          {metadata.title}
        </h1>
        <p className="mb-2 text-xs text-gray-500 sm:text-sm">
          {formatDate(metadata.date, locale)}
        </p>
        <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
          {metadata.description}
        </p>
        {translated && (
          <p lang={otherLocale} className="mt-4 text-sm">
            <Link
              href={`/essays/${otherLocale}/${slug}`}
              hrefLang={otherLocale}
              className="text-blue-700 underline hover:text-blue-800"
            >
              {otherLocale === 'nl'
                ? 'Lees dit essay in het Nederlands'
                : 'Read this essay in English'}
            </Link>
          </p>
        )}
      </header>

      <div>
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
        />
      </div>
    </article>
  )
}
