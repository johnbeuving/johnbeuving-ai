import { ComponentPropsWithoutRef } from 'react'

export const mdxComponents = {
  h1: ({ children, className, ...props }: ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className={`mb-6 mt-8 text-4xl font-semibold text-gray-900 md:text-5xl ${className || ''}`}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className={`mb-4 mt-8 text-3xl font-semibold text-gray-900 md:text-4xl ${className || ''}`}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className={`mb-3 mt-6 text-2xl font-semibold text-gray-900 md:text-3xl ${className || ''}`}
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) => (
    <p
      className={`mb-4 leading-relaxed text-gray-700 ${className || ''}`}
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
      className={`text-blue-500 underline hover:text-blue-600 ${className || ''}`}
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, className, ...props }: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className={`mb-4 list-inside list-disc space-y-2 text-gray-700 ${className || ''}`}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, className, ...props }: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className={`mb-4 list-inside list-decimal space-y-2 text-gray-700 ${className || ''}`}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, className, ...props }: ComponentPropsWithoutRef<'li'>) => (
    <li className={`ml-4 ${className || ''}`} {...props}>
      {children}
    </li>
  ),
  blockquote: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className={`my-4 border-l-4 border-gray-300 pl-4 italic text-gray-600 ${className || ''}`}
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
      className={`rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800 ${className || ''}`}
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, className, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className={`mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4 ${className || ''}`}
      {...props}
    >
      {children}
    </pre>
  ),
}
