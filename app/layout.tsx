import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Content Plagiarism Checker — Protect Your Work',
  description: 'Crawls the web to find unauthorized copies of your blog posts, course content, or marketing materials. Monitor your content and get alerted when copies are detected.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f735f932-3ef7-404b-943b-0748b58de343"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
