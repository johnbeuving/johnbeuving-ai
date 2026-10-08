import fs from 'fs'
import path from 'path'
import { ImageResponse } from 'next/og'
import { getAllEssays, getEssayFrontmatter, type Locale } from '@/lib/mdx'
import { SITE } from '@/lib/constants'

export const dynamic = 'force-static'

// One share card for the site, plus one per essay named `<locale>-<slug>.png`
export function generateStaticParams() {
  return [
    { image: 'default.png' },
    ...getAllEssays().map((essay) => ({
      image: `${essay.locale}-${essay.slug}.png`,
    })),
  ]
}

function essayTitle(image: string): string | null {
  const match = image.match(/^(en|nl)-(.+)\.png$/)
  if (!match) return null
  return getEssayFrontmatter(match[2], match[1] as Locale).title
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ image: string }> }
) {
  const { image } = await params
  const title = image === 'default.png' ? null : essayTitle(image)
  const photo = `data:image/jpeg;base64,${fs
    .readFileSync(path.join(process.cwd(), 'public', 'profile.jpg'))
    .toString('base64')}`

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px 80px',
        backgroundColor: '#ffffff',
        borderTop: '16px solid #1d4ed8',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: title ? 64 : 84,
          fontWeight: 600,
          lineHeight: 1.15,
          color: '#111827',
        }}
      >
        {title ?? SITE.name}
      </div>
      {!title && (
        <div style={{ display: 'flex', fontSize: 34, color: '#4b5563' }}>
          {SITE.description}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          width={112}
          height={112}
          alt=""
          style={{ borderRadius: 56 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 38, fontWeight: 600, color: '#111827' }}>
            {SITE.name}
          </div>
          <div style={{ fontSize: 28, color: '#4b5563' }}>
            {`${SITE.role} · johnbeuving.ai`}
          </div>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
