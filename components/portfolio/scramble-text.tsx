'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#01ABCDEF$%&'

type Props = {
  text: string
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  /** ms per reveal step */
  speed?: number
  delay?: number
}

export function ScrambleText({
  text,
  className,
  as = 'span',
  speed = 26,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(text)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduce) {
      setDisplay(text)
      return
    }

    let frame = 0
    const total = text.length
    let raf = 0
    let last = 0

    const timeout = setTimeout(() => {
      const tick = (now: number) => {
        if (now - last >= speed) {
          last = now
          const revealed = Math.floor(frame)
          let out = ''
          for (let i = 0; i < total; i++) {
            const ch = text[i]
            if (ch === ' ') {
              out += ' '
            } else if (i < revealed) {
              out += ch
            } else {
              out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
            }
          }
          setDisplay(out)
          frame += 1
        }
        if (frame <= total) {
          raf = requestAnimationFrame(tick)
        } else {
          setDisplay(text)
        }
      }
      raf = requestAnimationFrame(tick)
    }, delay)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [inView, text, speed, delay])

  const Tag = as as 'span'
  return (
    <Tag
      ref={ref as React.Ref<HTMLSpanElement>}
      className={className}
      aria-label={text}
    >
      <span aria-hidden="true">{display}</span>
    </Tag>
  )
}
