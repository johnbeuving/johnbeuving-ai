import { SITE } from '@/lib/constants'

// Escapes `<` so essay text can never close the script tag early
function serialize(data: object): string {
  return JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(
    /</g,
    '\u003c'
  )
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  )
}

export const person = {
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/profile.jpg`,
  jobTitle: 'Founder & CTO',
  worksFor: { '@type': 'Organization', name: 'Valtes' },
  sameAs: [SITE.linkedIn],
}
