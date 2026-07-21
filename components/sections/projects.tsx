'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { RevealOnScroll, StaggerReveal, StaggerItem, fadeInUp } from '@/components/motion'
import { projects } from '@/lib/data'

const numberWords: Record<number, string> = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
}

export default function Projects() {
  const count = projects.length
  const countLabel = numberWords[count] ?? String(count)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <span className="font-mono text-xs text-teal tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4 text-balance">
            {countLabel} projects. Each one{' '}
            <span className="text-teal">shipped to production.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Quality over quantity. Each project below is a complete product with measurable outcomes
            and a full case study explaining the engineering decisions behind it.
          </p>
        </RevealOnScroll>

        <StaggerReveal className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.slug} variants={fadeInUp}>
              <article className="group relative flex flex-col h-full border border-border rounded-2xl overflow-hidden bg-card hover:border-teal/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal/5">
                {/* Header: screenshot if available, gradient fallback otherwise */}
                <div className={`relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.color}`}>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 font-mono text-xs text-muted-foreground border border-border bg-background/60 backdrop-blur-sm rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-teal transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground flex-shrink-0 border border-border rounded px-2 py-0.5">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {project.summary}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-surface-elevated rounded-lg p-2 text-center border border-border"
                      >
                        <p className="text-sm font-bold text-teal leading-tight">{metric.value}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-surface-elevated border border-border px-2 py-0.5 rounded text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-teal hover:text-teal/80 font-medium transition-colors"
                    >
                      Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}