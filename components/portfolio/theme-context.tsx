'use client'

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

type Theme = 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  toggle: (origin?: { x: number; y: number }) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = 'akram-theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme) || 'dark'
    setTheme(stored)
  }, [])

  const apply = useCallback((next: Theme) => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(next)
    root.style.colorScheme = next
    localStorage.setItem(STORAGE_KEY, next)
    setTheme(next)
  }, [])

  const toggle = useCallback(
    (origin?: { x: number; y: number }) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'

      // Liquid ripple sweep using the View Transitions API when available.
      const doc = document as Document & {
        startViewTransition?: (cb: () => void) => { ready: Promise<void> }
      }

      if (
        !doc.startViewTransition ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        apply(next)
        return
      }

      const x = origin?.x ?? window.innerWidth - 48
      const y = origin?.y ?? 48
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      )

      const transition = doc.startViewTransition(() => apply(next))
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 720,
            easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        )
      })
    },
    [theme, apply],
  )

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
