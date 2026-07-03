'use client'

const ITEMS = [
  'RUNTIME SECURITY',
  'PENETRATION TESTING',
  'CRYPTOGRAPHY',
  'ZERO-TRUST',
  'CONTAINER DEFENSE',
  'POLICY-AS-CODE',
  'DIGITAL FORENSICS',
  'SECURE ENGINEERING',
]

export function Marquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-border py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </div>
  )
}
