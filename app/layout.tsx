import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mohamed Ibrahim — Frontend Engineer & AI Automation Developer',
  description:
    'Frontend Engineer specializing in React and Next.js, building secure, scalable, production-grade web applications and AI automation systems. Based in Mansoura, Egypt. Available for full-time remote work.',
  keywords: [
    'Frontend Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'AI Automation',
    'Full Stack Developer',
    'Egypt',
    'Remote',
  ],
  authors: [{ name: 'Mohamed Ibrahim Mohamed' }],
  openGraph: {
    title: 'Mohamed Ibrahim — Frontend Engineer & AI Automation Developer',
    description:
      'Building production-grade web applications and AI automation systems with React, Next.js, and TypeScript.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0e1220',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
