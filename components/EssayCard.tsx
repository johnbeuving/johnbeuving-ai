import Link from 'next/link'
import { EssayMetadata, formatDate } from '@/lib/mdx'

interface EssayCardProps {
  essay: EssayMetadata
}

export default function EssayCard({ essay }: EssayCardProps) {
  return (
    <Link
      href={`/essays/${essay.slug}`}
      className="block border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors group"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
        {essay.title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">{formatDate(essay.date)}</p>
      <p className="text-gray-600 leading-relaxed">{essay.description}</p>
    </Link>
  )
}

