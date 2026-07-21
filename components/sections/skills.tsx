'use client'

import { RevealOnScroll, StaggerReveal, StaggerItem, fadeInUp } from '@/components/motion'
import { skills } from '@/lib/data'

const categories = [
  { label: 'Frontend Core', key: 'frontend', items: skills.frontend },
  { label: 'State Management', key: 'state', items: skills.state },
  { label: 'Forms & Validation', key: 'forms', items: skills.forms },
  { label: 'Backend / BaaS', key: 'backend', items: skills.backend },
  { label: 'AI & Automation', key: 'ai', items: skills.ai },
  { label: 'Tooling & DevOps', key: 'tooling', items: skills.tooling },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <span className="font-mono text-xs text-teal tracking-widest uppercase">Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4 text-balance">
            The tools I use to{' '}
            <span className="text-teal">ship production code.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Organized by category. Not a buzzword list — these are the specific tools I&apos;ve used
            to build and deploy production systems.
          </p>
        </RevealOnScroll>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <StaggerItem key={cat.key} variants={fadeInUp}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-teal/25 transition-colors">
                <h3 className="text-xs font-mono text-teal uppercase tracking-widest mb-4">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-foreground/80 bg-surface-elevated border border-border rounded-lg px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
