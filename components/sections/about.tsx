'use client'

import { RevealOnScroll, StaggerReveal, StaggerItem, fadeInUp } from '@/components/motion'
import { Code2, Cpu, Globe, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    description:
      'Production-grade React and Next.js applications with edge authentication, Server Actions, and type-safe architecture from the ground up.',
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description:
      'LLM integration, prompt engineering, and document processing pipelines — connecting AI capabilities to real-world workflows.',
  },
  {
    icon: Zap,
    title: 'Automation Systems',
    description:
      'n8n-powered automation pipelines that eliminate repetitive work: hiring funnels, customer service bots, and multi-step orchestration.',
  },
  {
    icon: Globe,
    title: 'Full Product Delivery',
    description:
      'From architecture decisions to deployment on Vercel. Every project I ship is a complete, production-ready product — not a demo.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="mb-4">
            <span className="font-mono text-xs text-teal tracking-widest uppercase">About</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-2xl text-balance">
            One engineer, two skill sets,{' '}
            <span className="text-teal">one integrated identity.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Narrative */}
          <RevealOnScroll delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Most frontend engineers build the interface. Most AI developers build the backend
                logic.{' '}
                <span className="text-foreground font-medium">
                  I build the complete product — both layers, integrated from the start.
                </span>
              </p>
              <p>
                My work combines production-grade Next.js applications — edge authentication, Server
                Actions, normalized state, zero hydration mismatches — with AI systems that make
                those applications genuinely intelligent. Document analysis platforms. Automated
                hiring pipelines. Context-aware customer service bots.
              </p>
              <p>
                Every project in my portfolio shipped to production with measurable outcomes: bundle
                reductions, database call cuts, security boundaries that hold. I don&apos;t list
                technologies — I list results.
              </p>
              <p>
                I&apos;m based in Mansoura, Egypt (UTC+2), available for full-time remote work, and
                comfortable overlapping with EU or US teams.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Core Stack', value: 'React · Next.js · TS' },
                { label: 'AI Tools', value: 'Groq · n8n · Supabase' },
                { label: 'Location', value: 'Mansoura, Egypt' },
                { label: 'Timezone', value: 'UTC+2' },
              ].map((fact) => (
                <div key={fact.label} className="border border-border rounded-xl p-4">
                  <p className="text-xs text-muted-foreground font-mono mb-1">{fact.label}</p>
                  <p className="text-sm font-medium text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Pillars */}
          <StaggerReveal className="grid grid-cols-1 gap-4">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title} variants={fadeInUp}>
                <div className="group flex gap-4 p-5 rounded-xl border border-border hover:border-teal/30 bg-card hover:bg-surface-elevated transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center">
                    <pillar.icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
