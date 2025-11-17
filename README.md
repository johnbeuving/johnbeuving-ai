# John Beuving — Personal Website

A minimal, premium personal website built with Next.js, MDX, and Tailwind CSS. Designed for sharing essays, thoughts on AI, and professional information.

## Features

- **Static Site Generation**: Fully static site deployable to Vercel
- **MDX Support**: Write essays in Markdown with frontmatter metadata
- **OpenGraph Support**: Rich preview cards for social media sharing (LinkedIn, Twitter, Slack, WhatsApp)
- **Minimal Design**: Clean, premium aesthetic with lots of whitespace
- **TypeScript**: Full type safety throughout
- **Tailwind CSS**: Utility-first styling

## Tech Stack

- Next.js 14+ (App Router)
- MDX via @next/mdx
- Tailwind CSS
- TypeScript
- Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without making changes
npm run format:check
```

## Project Structure

```
/
  app/                    # Next.js App Router pages
    layout.tsx           # Root layout
    page.tsx             # Homepage
    about/               # About page
    speaking/            # Speaking page
    contact/             # Contact page
    essays/              # Essays listing and individual pages
      [slug]/            # Dynamic essay pages
  components/            # React components
    Header.tsx
    Footer.tsx
    EssayCard.tsx
    MDXContent.tsx
  content/               # MDX content files
    essays/              # Essay MDX files
  lib/                   # Utility functions
    mdx.ts              # MDX reading and parsing helpers
  styles/                # Global styles
    globals.css
  public/                # Static assets
```

## Adding New Essays

1. Create a new `.mdx` file in `content/essays/`
2. Add frontmatter with required metadata:

```mdx
---
title: Your Essay Title
date: 2024-01-15
description: A brief description of your essay
---

Your essay content here...
```

3. The essay will automatically appear on the homepage and essays page
4. The URL will be `/essays/your-filename` (without the `.mdx` extension)

### OpenGraph Images

To add a custom OpenGraph preview image for an essay:

1. Create an image file: `public/og/<slug>.png` (e.g., `public/og/real-world-ai.png`)
2. Recommended size: 1200x630px
3. If no custom image exists, the site will fall back to `public/og/default.png`
4. Make sure to create `public/og/default.png` as a fallback image

The OpenGraph metadata is automatically generated from the essay's frontmatter (title and description).

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and deploy

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. Follow the prompts to link your project

### Configuration

The site is configured for static export (`output: 'export'` in `next.config.js`), which means:

- No server-side features (API routes, server components with dynamic data)
- Fully static HTML/CSS/JS output
- Perfect for Vercel, Netlify, or any static hosting

## Customization

### Styling

- Global styles: `styles/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Inline Tailwind classes in components

### Content

- Update homepage content in `app/page.tsx`
- Update about page in `app/about/page.tsx`
- Update speaking topics in `app/speaking/page.tsx`
- Update contact email in `app/contact/page.tsx`

### Profile Image

Replace `public/profile.jpg` with your own profile image.

## License

Private project — All rights reserved.
