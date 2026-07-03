'use client'

import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { LinkedinIcon } from './icons'
import { CONTACT } from '@/lib/portfolio-data'
import { TiltCard } from './tilt-card'
import { ScrambleText } from './scramble-text'
import { MagneticButton } from './magnetic-button'
import { Reveal } from './reveal'

const channels = [
  {
    label: 'WhatsApp',
    detail: CONTACT.phone,
    href: CONTACT.whatsapp,
    icon: MessageCircle,
    newTab: true,
  },
  {
    label: 'Email',
    detail: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    detail: 'akram-jehad-mousa',
    href: CONTACT.linkedin,
    icon: LinkedinIcon,
    newTab: true,
  },
]

export function Conversion() {
  return (
    <section aria-labelledby="cta-title">
      <TiltCard intensity={2} glow={false}>
        <div className="noise relative overflow-hidden p-6 md:p-12">
          <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
                // 05 — Conversion Hub
              </p>
              <h2
                id="cta-title"
                className="mt-4 max-w-4xl text-balance font-sans text-4xl font-semibold leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl"
              >
                <ScrambleText text="LET'S SECURE" />
                <br />
                <span className="text-muted-foreground">
                  <ScrambleText text="THE FUTURE." delay={200} />
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                Open to security engineering, research, and secure development
                roles. Reach out through any channel below.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
              {channels.map((c, i) => {
                const Icon = c.icon
                return (
                  <Reveal key={c.label} delay={i * 0.08}>
                    <a
                      href={c.href}
                      target={c.newTab ? '_blank' : undefined}
                      rel={c.newTab ? 'noopener noreferrer' : undefined}
                      className="group/ch flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-card/50 p-5 backdrop-blur transition-colors hover:border-accent"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-foreground">
                          <Icon className="h-4 w-4 text-accent" />
                          <span className="text-sm font-semibold tracking-tight">
                            {c.label}
                          </span>
                        </div>
                        <p className="mt-1 truncate font-mono text-xs text-muted-foreground">
                          {c.detail}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover/ch:-translate-y-0.5 group-hover/ch:translate-x-0.5 group-hover/ch:text-accent" />
                    </a>
                  </Reveal>
                )
              })}
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                © 2026 Akram Jehad Mousa
              </p>
              <MagneticButton
                href="#top"
                ariaLabel="Back to top"
                className="rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Back to top ↑
              </MagneticButton>
            </div>
          </div>
        </div>
      </TiltCard>
    </section>
  )
}
