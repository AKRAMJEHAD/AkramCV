'use client'

import { ArrowUpRight, Check, FlaskConical } from 'lucide-react'
import { PROJECTS } from '@/lib/portfolio-data'
import { TiltCard } from './tilt-card'
import { ScrambleText } from './scramble-text'
import { Reveal } from './reveal'

export function Projects() {
  return (
    <section aria-labelledby="projects-title" className="space-y-5">
      <Reveal className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            // 03 — Selected Work
          </p>
          <h2
            id="projects-title"
            className="mt-2 font-sans text-lg font-semibold tracking-tight text-foreground md:text-xl"
          >
            <ScrambleText text="Selected Work" />
          </h2>
        </div>
        <FlaskConical className="hidden h-5 w-5 text-muted-foreground sm:block" />
      </Reveal>

      <div className="flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <TiltCard intensity={1.5}>
              <div className="p-5 md:p-7">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                  {/* Left: identity */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="mt-4 font-sans text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.full}
                    </p>

                    <div className="mt-4 inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                        {project.role}
                      </span>
                    </div>

                    <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>

                    <div className="mt-5">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 rounded-2xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                        >
                          {project.linkLabel}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          {project.linkLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: highlights + stack */}
                  <div className="lg:col-span-7">
                    <ul className="space-y-2.5">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 border-b border-border/60 pb-2.5 text-sm leading-relaxed text-foreground/90"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-pretty">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg border border-border bg-secondary/30 px-3 py-1.5 font-mono text-[11px] tracking-tight text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
