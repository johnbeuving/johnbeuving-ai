import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-6 mb-12">
      <nav className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-blue-500 transition-colors">
          John Beuving
        </Link>
        <div className="flex gap-6">
          <Link href="/essays" className="text-gray-600 hover:text-gray-900 transition-colors">
            Essays
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/speaking" className="text-gray-600 hover:text-gray-900 transition-colors">
            Speaking
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}

