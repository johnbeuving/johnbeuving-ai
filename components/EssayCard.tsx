import Link from 'next/link'
import { EssayMetadata, formatDate } from '@/lib/mdx'

interface EssayCardProps {
  essay: EssayMetadata
}

export default function EssayCard({ essay }: EssayCardProps) {
  return (
    <Link
      href={`/essays/${essay.slug}`}
      className="group block rounded-lg border border-gray-200 p-6 transition-colors hover:border-blue-500"
    >
      <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-500">
        {essay.title}
      </h3>
      <p className="mb-3 text-sm text-gray-600">{formatDate(essay.date)}</p>
      <p className="leading-relaxed text-gray-600">{essay.description}</p>
    </Link>
  )
}
