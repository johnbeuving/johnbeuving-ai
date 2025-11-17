import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const essaysDirectory = path.join(process.cwd(), 'content/essays')

export interface EssayMetadata {
  title: string
  date: string
  description: string
  slug: string
}

export function getEssaySlugs(): string[] {
  if (!fs.existsSync(essaysDirectory)) {
    return []
  }
  return fs
    .readdirSync(essaysDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getEssayBySlug(slug: string): {
  metadata: EssayMetadata
  content: string
} {
  const fullPath = path.join(essaysDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Ensure date is always a string
  let dateString = ''
  if (data.date) {
    if (data.date instanceof Date) {
      dateString = data.date.toISOString().split('T')[0] // Format as YYYY-MM-DD
    } else {
      dateString = String(data.date)
    }
  }

  return {
    metadata: {
      title: data.title || '',
      date: dateString,
      description: data.description || '',
      slug,
    },
    content,
  }
}

export function getAllEssays(): EssayMetadata[] {
  const slugs = getEssaySlugs()
  const essays = slugs
    .map((slug) => {
      const { metadata } = getEssayBySlug(slug)
      return metadata
    })
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })

  return essays
}

export function getEssayFrontmatter(slug: string): EssayMetadata {
  const { metadata } = getEssayBySlug(slug)
  return metadata
}

export function getOGImagePath(slug: string): string {
  const publicOgPath = path.join(process.cwd(), 'public', 'og', `${slug}.png`)
  if (fs.existsSync(publicOgPath)) {
    return `/og/${slug}.png`
  }
  return '/og/default.png'
}

export function formatDate(dateString: string): string {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}
