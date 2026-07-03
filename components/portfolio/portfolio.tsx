'use client'

import { motion, useScroll, useSpring } from 'motion/react'
import { ThemeProvider } from './theme-context'
import { Hero } from './hero'
import { Credentials } from './credentials'
import { Projects } from './projects'
import { TechDirectory } from './tech-directory'
import { Conversion } from './conversion'
import { Marquee } from './marquee'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
    />
  )
}

export function Portfolio() {
  return (
    <ThemeProvider>
      <div id="top" className="theme-morph relative min-h-screen bg-background">
        <ScrollProgress />

        {/* Ambient grid backdrop */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="grid-backdrop absolute inset-0 h-[70vh]" />
        </div>

        <main className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
          <div className="space-y-4 md:space-y-6">
            <Hero />
          </div>

          <div className="my-8 md:my-12">
            <Marquee />
          </div>

          <div className="space-y-12 md:space-y-20">
            <Credentials />
            <Projects />
            <TechDirectory />
            <Conversion />
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
