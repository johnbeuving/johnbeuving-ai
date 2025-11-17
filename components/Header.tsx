import Link from 'next/link'

export default function Header() {
  return (
    <header className="mb-12 border-b border-gray-200 py-6">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-semibold text-gray-900 transition-colors hover:text-blue-500"
        >
          John Beuving
        </Link>
        <div className="flex gap-6">
          <Link
            href="/essays"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            Essays
          </Link>
          <Link
            href="/about"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="/speaking"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            Speaking
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
