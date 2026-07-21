'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { RevealOnScroll } from '@/components/motion'
import { siteConfig } from '@/lib/data'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { name, email, message } = formState
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll className="mb-14">
          <span className="font-mono text-xs text-teal tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4 text-balance">
            Ready to build something{' '}
            <span className="text-teal">production-grade?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            I&apos;m available for full-time remote opportunities. If you have a role, project, or
            idea that needs both frontend engineering and AI automation — reach out.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <RevealOnScroll delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-4">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-0.5">Email</p>
                    <p className="text-sm text-foreground group-hover:text-teal transition-colors">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-0.5">Phone</p>
                    <p className="text-sm text-foreground">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-teal" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-0.5">Location</p>
                    <p className="text-sm text-foreground">{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
                  Connect
                </p>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm text-muted-foreground hover:border-teal/30 hover:text-teal transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm text-muted-foreground hover:border-teal/30 hover:text-teal transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: form */}
          <RevealOnScroll delay={0.2}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-64 border border-teal/20 rounded-2xl bg-teal/5 p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center mb-4">
                  <Send className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Message ready to send</h3>
                <p className="text-sm text-muted-foreground">
                  Your default email client has been opened with your message pre-filled.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about the role or project..."
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal text-background font-medium rounded-xl hover:bg-teal/90 transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
