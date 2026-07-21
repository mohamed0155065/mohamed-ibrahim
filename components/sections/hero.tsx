'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { siteConfig } from '@/lib/data'
import { fadeInUp, stagger } from '@/components/motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-6">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-teal border border-teal/25 bg-teal/8 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                Available for full-time remote work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight mb-4"
            >
              Mohamed{' '}
              <span className="text-teal">Ibrahim</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground font-mono mb-6 leading-relaxed"
            >
              Frontend Engineer & AI Automation Developer
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg text-pretty"
            >
              I build the interface{' '}
              <span className="text-foreground font-medium">and the intelligence behind it.</span>{' '}
              React, Next.js, and TypeScript on the frontend — LLM integration, prompt engineering,
              and automation pipelines on the backend.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-background font-medium rounded-lg hover:bg-teal/90 transition-colors text-sm"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground/80 font-medium rounded-lg hover:border-teal/40 hover:text-teal transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-teal transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-border">|</span>
              <span className="text-xs text-muted-foreground font-mono">Mansoura, Egypt · UTC+2</span>
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Teal glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-teal/15 blur-2xl scale-110" />
              {/* Border frame */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-teal/20 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Mohamed Ibrahim Mohamed — Frontend Engineer & AI Automation Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              </div>
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-4 top-8 bg-surface-elevated border border-border rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-xs text-muted-foreground font-mono">stack</p>
                <p className="text-xs font-medium text-foreground">React · Next.js · AI</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-4 bottom-10 bg-surface-elevated border border-border rounded-xl px-3 py-2 shadow-xl"
              >
                <p className="text-xs text-muted-foreground font-mono">projects shipped</p>
                <p className="text-xl font-bold text-teal">6+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 mt-16 text-muted-foreground"
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 h-8 bg-gradient-to-b from-teal/60 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
