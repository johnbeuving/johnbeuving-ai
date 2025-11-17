import { ReactNode } from 'react'

export const mdxComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 mt-8">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a href={href} className="text-blue-500 hover:text-blue-600 underline">
      {children}
    </a>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => <li className="ml-4">{children}</li>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
      {children}
    </code>
  ),
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
  ),
}

