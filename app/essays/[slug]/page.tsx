import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getEssaySlugs, getEssayBySlug, getEssayFrontmatter, getOGImagePath, formatDate } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '@/components/MDXContent'

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
    const ogImageUrl = `https://johnbeuving.ai${ogImagePath}`
    const url = `https://johnbeuving.ai/essays/${params.slug}`

    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        url,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: [ogImageUrl],
      },
      alternates: {
        canonical: url,
      },
    }
  } catch (error) {
    return {
      title: 'Essay Not Found',
      description: 'The requested essay could not be found.',
    }
  }
}

export default async function EssayPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  try {
    const { metadata, content } = getEssayBySlug(slug)

    return (
      <article className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            {metadata.title}
          </h1>
          <p className="text-gray-500 text-sm mb-2">{formatDate(metadata.date)}</p>
          <p className="text-gray-600 text-lg leading-relaxed">{metadata.description}</p>
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
    )
  } catch (error) {
    notFound()
  }
}

