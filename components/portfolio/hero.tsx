'use client'

import { ArrowUpRight, Download, Mail, MessageCircle } from 'lucide-react'
import { LinkedinIcon } from './icons'
import { CONTACT } from '@/lib/portfolio-data'
import { ScrambleText } from './scramble-text'
import { TiltCard } from './tilt-card'
import { MagneticButton } from './magnetic-button'
import { ThemeToggle } from './theme-toggle'

const actions = [
  {
    label: 'Download CV',
    href: CONTACT.cv,
    icon: Download,
    primary: true,
    newTab: true,
  },
  { label: 'LinkedIn', href: CONTACT.linkedin, icon: LinkedinIcon, newTab: true },
  { label: 'WhatsApp', href: CONTACT.whatsapp, icon: MessageCircle, newTab: true },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: Mail },
]

export function Hero() {
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
      {/* Name box */}
      <TiltCard className="md:col-span-4 md:row-span-1">
        <div className="flex h-full flex-col justify-between gap-6 p-6 md:p-7">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Available for work
            </span>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio
            </p>
            <h1 className="mt-2 font-sans text-2xl font-semibold leading-[0.95] tracking-tight text-foreground md:text-3xl">
              AKRAM
              <br />
              MOUSA
            </h1>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              {CONTACT.location}
            </p>
          </div>
        </div>
      </TiltCard>

      {/* Core headline tile */}
      <TiltCard className="md:col-span-8" intensity={4}>
        <div className="noise relative flex h-full flex-col justify-between gap-8 overflow-hidden p-6 md:p-9">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              // Discipline
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              EST. 2026
            </span>
          </div>

          <div>
            <h2 className="max-w-3xl text-balance font-sans text-xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-2xl lg:text-3xl">
              <ScrambleText text="Cybersecurity Specialist" as="span" />
              <span className="text-muted-foreground"> & </span>
              <ScrambleText text="Secure Software Engineer" as="span" delay={220} />
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
              Computer Science graduate specializing in ethical hacking,
              runtime defense, and secure software design. I build systems that
              detect, contain, and preserve evidence of active threats — pairing
              hands-on penetration testing with clean, maintainable engineering.
            </p>
          </div>
        </div>
      </TiltCard>

      {/* Actions + theme toggle */}
      <TiltCard className="md:col-span-12" intensity={3} glow={false}>
        <div className="flex flex-col items-stretch gap-4 p-4 md:flex-row md:items-center md:justify-between md:p-5">
          <div className="flex items-center gap-3 pl-2">
            <ThemeToggle />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Theme
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {actions.map((a) => {
              const Icon = a.icon
              return (
                <MagneticButton
                  key={a.label}
                  href={a.href}
                  newTab={a.newTab}
                  ariaLabel={a.label}
                  strength={0.35}
                  className={`w-full rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                    a.primary
                      ? 'border-transparent bg-accent text-accent-foreground hover:opacity-90'
                      : 'border-border bg-secondary/40 text-foreground hover:border-accent hover:text-accent'
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {a.label}
                  {a.primary ? null : (
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  )}
                </MagneticButton>
              )
            })}
          </div>
        </div>
      </TiltCard>
    </section>
  )
}
