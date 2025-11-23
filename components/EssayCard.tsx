import Link from 'next/link'
import { EssayMetadata, formatDate } from '@/lib/mdx'

interface EssayCardProps {
  essay: EssayMetadata
}

export default function EssayCard({ essay }: EssayCardProps) {
  const languageLabel = essay.locale === 'nl' ? 'NL' : 'EN'
  
  return (
    <Link
      href={`/essays/${essay.locale}/${essay.slug}`}
      className="group block rounded-lg border border-gray-200 p-4 transition-colors hover:border-blue-500 sm:p-6"
    >
      <div className="mb-2 flex items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-500 sm:text-xl">
          {essay.title}
        </h3>
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
          {languageLabel}
        </span>
      </div>
      <p className="mb-2 text-xs text-gray-600 sm:mb-3 sm:text-sm">
        {formatDate(essay.date, essay.locale)}
      </p>
      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
        {essay.description}
      </p>
    </Link>
  )
}
