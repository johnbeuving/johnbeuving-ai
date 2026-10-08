import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

// Monogram favicon in the site's accent blue
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d4ed8',
        borderRadius: 12,
        color: '#ffffff',
        fontSize: 34,
        letterSpacing: -1,
      }}
    >
      JB
    </div>,
    size
  )
}
