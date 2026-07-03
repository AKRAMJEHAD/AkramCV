'use client'

import { motion } from 'motion/react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-context'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  const handle = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggle({ x: e.clientX, y: e.clientY })
  }

  return (
    <button
      type="button"
      onClick={handle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative flex h-9 w-16 shrink-0 items-center rounded-full border border-border bg-secondary/60 px-1 backdrop-blur transition-colors',
        className,
      )}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 34 }}
        className={cn(
          'flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg',
          isDark ? 'ml-0' : 'ml-auto',
        )}
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          {isDark ? (
            <Moon className="h-4 w-4" strokeWidth={2.2} />
          ) : (
            <Sun className="h-4 w-4" strokeWidth={2.2} />
          )}
        </motion.span>
      </motion.span>
    </button>
  )
}
