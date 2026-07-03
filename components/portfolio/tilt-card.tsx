'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  className?: string
  /** max tilt in degrees */
  intensity?: number
  glow?: boolean
}

export function TiltCard({
  children,
  className,
  intensity = 6,
  glow = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    ry.set((px - 0.5) * intensity * 2)
    rx.set((0.5 - py) * intensity * 2)
  }

  const handleLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
        WebkitTapHighlightColor: 'transparent',
      }}
      className={cn(
        'group relative rounded-3xl border border-border glass transition-all duration-500',
        glow &&
          'hover:border-accent/40 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_35%,transparent),0_20px_60px_-20px_color-mix(in_oklab,var(--accent)_25%,transparent)]',
        className,
      )}
    >
      <div
        style={{ transform: 'translateZ(40px)' }}
        className="relative h-full"
      >
        {children}
      </div>
    </motion.div>
  )
}
