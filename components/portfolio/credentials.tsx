'use client'

import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { CREDENTIALS } from '@/lib/portfolio-data'
import { TiltCard } from './tilt-card'
import { ScrambleText } from './scramble-text'
import { Reveal } from './reveal'

export function Credentials() {
  return (
    <section aria-labelledby="credentials-title" className="space-y-4">
      <Reveal className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            // 02 — Prestige Matrix
          </p>
          <h2
            id="credentials-title"
            className="mt-2 font-sans text-lg font-semibold tracking-tight text-foreground md:text-xl"
          >
            <ScrambleText text="Credentials & Distinctions" />
          </h2>
        </div>
        <ShieldCheck className="hidden h-6 w-6 text-muted-foreground sm:block" />
      </Reveal>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
        {/* Portrait */}
        <TiltCard className="md:col-span-5 md:row-span-2" intensity={5}>
          <div className="group/portrait relative h-full min-h-[22rem] overflow-hidden rounded-3xl">
            <Image
              src="/akram-portrait.png"
              alt="Portrait of Akram Jehad Mousa"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/portrait:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                The Architect
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                Akram Jehad Mousa
              </p>
              <p className="text-sm text-muted-foreground">
                Amman, Jordan · CEH · CCNA
              </p>
            </div>
          </div>
        </TiltCard>

        {/* Credential cells */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-7 md:gap-4">
          {CREDENTIALS.map((c, i) => (
            <Reveal key={c.index} delay={i * 0.06}>
              <TiltCard className="h-full" intensity={8}>
                <div className="flex h-full flex-col justify-between gap-6 p-5">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-2xl font-semibold text-border transition-colors group-hover:text-accent">
                      {c.index}
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {c.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-pretty text-base font-semibold leading-snug tracking-tight text-foreground">
                      {c.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {c.issuer}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
