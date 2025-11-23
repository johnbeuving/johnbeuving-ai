import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const essaysDirectory = path.join(process.cwd(), 'content/essays')

export type Locale = 'en' | 'nl'

export interface EssayMetadata {
  title: string
  date: string
  description: string
  slug: string
  locale: Locale
}

export function getAvailableLocales(): Locale[] {
  if (!fs.existsSync(essaysDirectory)) {
    return []
  }
  return fs
    .readdirSync(essaysDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name as Locale)
    .filter((locale): locale is Locale => locale === 'en' || locale === 'nl')
}

export function getEssaySlugs(locale: Locale): string[] {
  const localeDirectory = path.join(essaysDirectory, locale)
  if (!fs.existsSync(localeDirectory)) {
    return []
  }
  return fs
    .readdirSync(localeDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getEssayBySlug(slug: string, locale: Locale): {
  metadata: EssayMetadata
  content: string
} {
  const fullPath = path.join(essaysDirectory, locale, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Essay not found: ${slug} in locale ${locale}`)
  }
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
      locale,
    },
    content,
  }
}

export function getAllEssays(locale?: Locale): EssayMetadata[] {
  const locales = locale ? [locale] : getAvailableLocales()
  const allEssays: EssayMetadata[] = []

  for (const loc of locales) {
    const slugs = getEssaySlugs(loc)
    const essays = slugs
      .map((slug) => {
        try {
          const { metadata } = getEssayBySlug(slug, loc)
          return metadata
        } catch {
          return null
        }
      })
      .filter((essay): essay is EssayMetadata => essay !== null)

    allEssays.push(...essays)
  }

  return allEssays.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getEssayFrontmatter(slug: string, locale: Locale): EssayMetadata {
  const { metadata } = getEssayBySlug(slug, locale)
  return metadata
}

export function getOGImagePath(slug: string): string {
  const publicOgPath = path.join(process.cwd(), 'public', 'og', `${slug}.png`)
  if (fs.existsSync(publicOgPath)) {
    return `/og/${slug}.png`
  }
  return '/og/default.png'
}

export function formatDate(dateString: string, locale: Locale = 'en'): string {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}
