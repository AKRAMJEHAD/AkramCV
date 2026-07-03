'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
  ariaLabel?: string
  strength?: number
  newTab?: boolean
  download?: boolean
}

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  ariaLabel,
  strength = 0.4,
  newTab,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const inner = (
    <span
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap',
        className,
      )}
    >
      {children}
    </span>
  )

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className="inline-flex"
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener noreferrer' : undefined}
        >
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} aria-label={ariaLabel}>
          {inner}
        </button>
      )}
    </motion.div>
  )
}
