import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Page not found — ${SITE.name}`,
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-center">
      <h1 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
        404
      </h1>
      <p className="mb-2 text-xl text-gray-600">Page not found</p>
      <p lang="nl" className="mb-8 text-gray-500">
        Deze pagina bestaat niet (meer).
      </p>
      <div className="flex justify-center gap-6">
        <Link href="/" className="text-blue-700 underline hover:text-blue-800">
          Home
        </Link>
        <Link
          href="/essays"
          className="text-blue-700 underline hover:text-blue-800"
        >
          Essays
        </Link>
        <Link
          href="/contact"
          className="text-blue-700 underline hover:text-blue-800"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
