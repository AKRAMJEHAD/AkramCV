import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Akram Mousa — Cybersecurity Specialist & Secure Software Engineer',
  description:
    'Portfolio of Akram Jehad Mousa — Certified Ethical Hacker (CEH), CCNA, and secure software engineer specializing in runtime security, cryptography, and high-velocity development.',
  generator: 'v0.app',
  keywords: [
    'Akram Mousa',
    'Cybersecurity',
    'Certified Ethical Hacker',
    'CEH',
    'CCNA',
    'Secure Software Engineer',
    'Penetration Testing',
  ],
  authors: [{ name: 'Akram Jehad Mousa' }],
  openGraph: {
    title: 'Akram Mousa — Cybersecurity Specialist & Secure Software Engineer',
    description:
      'Certified Ethical Hacker and secure software engineer. Runtime security, cryptography, and high-velocity development.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f6f0' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('akram-theme');
    if (!t) t = 'dark';
    document.documentElement.classList.remove('light','dark');
    document.documentElement.classList.add(t);
    document.documentElement.style.colorScheme = t;
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark bg-background`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
