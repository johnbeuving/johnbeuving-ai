import Link from 'next/link'
import { EssayMetadata, formatDate } from '@/lib/mdx'

interface EssayCardProps {
  essay: EssayMetadata
}

export default function EssayCard({ essay }: EssayCardProps) {
  return (
    <Link
      href={`/essays/${essay.slug}`}
      className="group block rounded-lg border border-gray-200 p-4 transition-colors hover:border-blue-500 sm:p-6"
    >
      <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-500 sm:text-xl">
        {essay.title}
      </h3>
      <p className="mb-2 text-xs text-gray-600 sm:mb-3 sm:text-sm">
        {formatDate(essay.date)}
      </p>
      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
        {essay.description}
      </p>
    </Link>
  )
}
