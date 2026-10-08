import { ComponentPropsWithoutRef } from 'react'

export const mdxComponents = {
  // The essay title is the page's only <h1>, so a `#` heading in MDX renders as a section heading
  h1: ({ children, className, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className={`mt-8 mb-3 text-xl font-semibold wrap-break-word text-gray-900 sm:mt-10 sm:mb-4 sm:text-2xl ${className || ''}`}
      {...props}
    >
      {children}
    </h2>
  ),
  h2: ({ children, className, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className={`mt-8 mb-3 text-xl font-semibold wrap-break-word text-gray-900 sm:mt-10 sm:mb-4 sm:text-2xl ${className || ''}`}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className={`mt-6 mb-2 text-lg font-semibold wrap-break-word text-gray-900 sm:mt-8 sm:mb-3 sm:text-xl ${className || ''}`}
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) => (
    <p
      className={`mb-3 leading-relaxed wrap-break-word text-gray-700 sm:mb-4 ${className || ''}`}
      {...props}
    >
      {children}
    </p>
  ),
  a: ({
    href,
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<'a'>) => (
    <a
      href={href}
      className={`wrap-break-word text-blue-500 underline hover:text-blue-600 ${className || ''}`}
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, className, ...props }: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className={`mb-4 list-outside list-disc space-y-2 pl-5 text-gray-700 ${className || ''}`}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, className, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className={`mb-4 list-outside list-decimal space-y-2 pl-5 text-gray-700 ${className || ''}`}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, className, ...props }: ComponentPropsWithoutRef<'li'>) => (
    <li className={`pl-1 ${className || ''}`} {...props}>
      {children}
    </li>
  ),
  blockquote: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className={`my-4 border-l-4 border-gray-300 pl-4 text-gray-600 italic ${className || ''}`}
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<'code'>) => (
    <code
      className={`rounded-sm bg-gray-100 px-1.5 py-0.5 font-mono text-xs wrap-break-word text-gray-800 sm:text-sm ${className || ''}`}
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, className, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className={`mb-4 overflow-x-auto rounded-lg bg-gray-100 p-3 text-xs sm:p-4 sm:text-sm ${className || ''}`}
      {...props}
    >
      {children}
    </pre>
  ),
  table: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<'table'>) => (
    <div className="my-6 overflow-x-auto">
      <table
        className={`min-w-full divide-y divide-gray-200 border border-gray-300 ${className || ''}`}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<'thead'>) => (
    <thead className={`bg-gray-50 ${className || ''}`} {...props}>
      {children}
    </thead>
  ),
  tbody: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<'tbody'>) => (
    <tbody
      className={`divide-y divide-gray-200 bg-white ${className || ''}`}
      {...props}
    >
      {children}
    </tbody>
  ),
  tr: ({ children, className, ...props }: ComponentPropsWithoutRef<'tr'>) => (
    <tr className={className || ''} {...props}>
      {children}
    </tr>
  ),
  th: ({ children, className, ...props }: ComponentPropsWithoutRef<'th'>) => (
    <th
      className={`px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase sm:px-6 ${className || ''}`}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, className, ...props }: ComponentPropsWithoutRef<'td'>) => (
    <td
      className={`px-4 py-3 text-sm text-gray-700 sm:px-6 ${className || ''}`}
      {...props}
    >
      {children}
    </td>
  ),
  img: ({ src, alt, className, ...props }: ComponentPropsWithoutRef<'img'>) => (
    // MDX images carry no width/height, which next/image requires
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || ''}
      className={`my-6 w-full rounded-lg ${className || ''}`}
      {...props}
    />
  ),
}
