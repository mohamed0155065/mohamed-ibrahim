'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
      style={{ borderBottom: '1px solid', borderColor: `oklch(1 0 0 / ${borderOpacity.get() * 8}%)` }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans font-semibold text-base text-foreground hover:text-teal transition-colors tracking-tight"
        >
          Mohamed<span className="text-teal">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Mohamed-Ebrahim-Mohamed-CV.pdf"
            download="Mohamed-Ebrahim-Mohamed-CV.pdf"
            className="text-sm px-4 py-2 border border-teal/40 text-teal rounded-lg hover:bg-teal/10 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              'w-5 h-0.5 bg-foreground transition-transform duration-200',
              mobileOpen && 'translate-y-2 rotate-45'
            )}
          />
          <span
            className={cn(
              'w-5 h-0.5 bg-foreground transition-opacity duration-200',
              mobileOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'w-5 h-0.5 bg-foreground transition-transform duration-200',
              mobileOpen && '-translate-y-2 -rotate-45'
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Mohamed-Ebrahim-Mohamed-CV.pdf"
              download="Mohamed-Ebrahim-Mohamed-CV.pdf"
              className="text-sm px-4 py-2 border border-teal/40 text-teal rounded-lg hover:bg-teal/10 transition-colors text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
