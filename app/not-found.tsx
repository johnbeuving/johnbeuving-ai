import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-600 underline"
      >
        Return home
      </Link>
    </div>
  )
}

