import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  getEssaySlugs,
  getEssayBySlug,
  getEssayFrontmatter,
  getOGImagePath,
  formatDate,
} from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/MDXContent'
import { generateMetadata as genMetadata } from '@/lib/metadata'
import { SITE } from '@/lib/constants'

export async function generateStaticParams() {
  const slugs = getEssaySlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const post = getEssayFrontmatter(params.slug)
    const ogImagePath = getOGImagePath(params.slug)
    const ogImageUrl = `${SITE.url}${ogImagePath}`

    return genMetadata({
      title: post.title,
      description: post.description,
      path: `/essays/${params.slug}`,
      ogImage: ogImageUrl,
      ogImageAlt: post.title,
      type: 'article',
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
  params: { slug: string }
}) {
  const { slug } = params

  try {
    const { metadata, content } = getEssayBySlug(slug)

    return (
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <h1 className="mb-3 text-2xl font-semibold text-gray-900 sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {metadata.title}
          </h1>
          <p className="mb-2 text-xs text-gray-500 sm:text-sm">
            {formatDate(metadata.date)}
          </p>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            {metadata.description}
          </p>
        </header>

        <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
    )
  } catch {
    notFound()
  }
}
