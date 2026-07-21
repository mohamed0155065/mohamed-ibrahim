'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, CheckCircle2, Lightbulb, TrendingUp, Wrench } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { RevealOnScroll, StaggerReveal, StaggerItem, fadeInUp } from '@/components/motion'
import type { Project } from '@/lib/data'

export default function CaseStudyClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-teal transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-mono text-xs text-teal border border-teal/25 bg-teal/8 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="font-mono text-xs text-muted-foreground border border-border px-3 py-1 rounded-full">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 font-mono">{project.subtitle}</p>
            <p className="text-base text-foreground/80 leading-relaxed max-w-2xl mb-8">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal text-background text-sm font-medium rounded-lg hover:bg-teal/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm text-foreground/80 rounded-lg hover:border-teal/40 hover:text-teal transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics bar */}
      <RevealOnScroll>
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl border border-teal/20 bg-teal/5">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-teal">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Tech stack */}
      <RevealOnScroll>
        <section className="px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-mono bg-surface-elevated border border-border px-3 py-1.5 rounded-lg text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <div className="max-w-4xl mx-auto px-6 space-y-16 pb-24">
        {/* Problem */}
        <RevealOnScroll>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-teal" />
              </div>
              <h2 className="text-xl font-bold text-foreground">The Problem</h2>
            </div>
            <p className="text-foreground/75 leading-relaxed pl-11">{project.problem}</p>
          </div>
        </RevealOnScroll>

        {/* Engineering decisions */}
        <RevealOnScroll>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-teal" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Key Engineering Decisions</h2>
            </div>
            <StaggerReveal className="space-y-5 pl-11">
              {project.decisions.map((decision, i) => (
                <StaggerItem key={decision.title} variants={fadeInUp}>
                  <div className="border border-border rounded-xl p-5 hover:border-teal/25 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs text-teal bg-teal/10 border border-teal/20 w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{decision.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {decision.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </RevealOnScroll>

        {/* Outcomes */}
        <RevealOnScroll>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-teal" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Outcomes & Results</h2>
            </div>
            <StaggerReveal className="space-y-3 pl-11">
              {project.outcomes.map((outcome) => (
                <StaggerItem key={outcome} variants={fadeInUp}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80 leading-relaxed">{outcome}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </RevealOnScroll>

        {/* Improvements */}
        <RevealOnScroll>
          <div className="border border-border rounded-2xl p-6 bg-card">
            <h2 className="text-base font-semibold text-foreground mb-3">
              What I&apos;d Improve Next
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.improvements}</p>
          </div>
        </RevealOnScroll>

        {/* Back link */}
        <RevealOnScroll>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-teal hover:text-teal/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </RevealOnScroll>
      </div>

      <Footer />
    </div>
  )
}
