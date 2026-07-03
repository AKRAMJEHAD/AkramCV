'use client'

import { CAPABILITIES, TECH_STACK } from '@/lib/portfolio-data'
import { TiltCard } from './tilt-card'
import { ScrambleText } from './scramble-text'
import { Reveal } from './reveal'

export function TechDirectory() {
  return (
    <section aria-labelledby="tech-title" className="space-y-4">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          // 04 — Technical Directory
        </p>
        <h2
          id="tech-title"
          className="mt-2 font-sans text-lg font-semibold tracking-tight text-foreground md:text-xl"
        >
          <ScrambleText text="Stack & Capabilities" />
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
        {/* Directory */}
        <TiltCard className="md:col-span-7" intensity={3}>
          <div className="p-2 md:p-3">
            <ul className="divide-y divide-border/70">
              {TECH_STACK.map((t, i) => (
                <li key={t.name} className="group/row">
                  <div className="flex items-center justify-between overflow-hidden px-4 py-3.5 transition-colors">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] text-muted-foreground">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="inline-block text-base font-medium tracking-tight text-foreground transition-all duration-300 group-hover/row:-translate-y-0.5 group-hover/row:text-accent md:text-lg">
                        {t.name}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors group-hover/row:text-foreground">
                      {t.cat}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </TiltCard>

        {/* Capabilities panel */}
        <TiltCard className="md:col-span-5" intensity={5}>
          <div className="flex h-full flex-col justify-between gap-6 p-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                Focus Areas
              </p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                A balanced perspective as both a secure software evaluator and a
                defensive security analyst — grounded in CCNA-level network
                architecture.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {CAPABILITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-secondary/30 px-3 py-1.5 text-xs font-medium tracking-tight text-foreground/85 transition-colors hover:border-accent hover:text-accent"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  )
}
