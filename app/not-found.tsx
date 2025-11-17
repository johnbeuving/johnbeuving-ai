import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-center">
      <h1 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
        404
      </h1>
      <p className="mb-8 text-xl text-gray-600">Page not found</p>
      <Link href="/" className="text-blue-500 underline hover:text-blue-600">
        Return home
      </Link>
    </div>
  )
}
