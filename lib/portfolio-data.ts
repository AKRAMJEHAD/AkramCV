export const CONTACT = {
  name: 'Akram Jehad Mousa',
  shortName: 'AKRAM MOUSA',
  role: 'Cybersecurity Specialist & Secure Software Engineer',
  location: 'Amman, Jordan',
  email: 'alqaryoutiakram@gmail.com',
  phone: '+962 77 585 2866',
  whatsapp: 'https://wa.me/962775852866',
  linkedin:
    'https://linkedin.com/in/akram-jehad-mousa-7a130a41b',
  cv: '/Akram_Mousa_CV.pdf',
}

export const CREDENTIALS = [
  {
    index: '01',
    tag: 'ACADEMIC RANK',
    title: 'Graduated with Excellence',
    issuer: 'Zarqa University · Faculty of Information Technology',
  },
  {
    index: '02',
    tag: 'COMPLIANCE',
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'Green Circle for Cybersecurity',
  },
  {
    index: '03',
    tag: 'INFRASTRUCTURE',
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Pioneers Academy',
  },
  {
    index: '04',
    tag: 'CORE DEV',
    title: 'JavaScript Essentials',
    issuer: 'Cisco Networking Academy',
  },
  {
    index: '05',
    tag: 'WEB STRUCTURE',
    title: 'HTML Essentials',
    issuer: 'Cisco Networking Academy',
  },
  {
    index: '06',
    tag: 'WEB STYLING',
    title: 'CSS Essentials',
    issuer: 'Cisco Networking Academy',
  },
] as const

export const PROJECTS = [
  {
    id: 'mrsad',
    name: 'MRSAD',
    full: 'Monitoring Runtime Sentinel & Autonomous Defense',
    period: 'Feb 2026 – Jun 2026',
    role: 'Project Team Leader & Lead Backend Architect',
    link: '',
    linkLabel: 'Graduation Project · Zarqa University',
    summary:
      'A containerized runtime security platform that autonomously detects, isolates, and preserves forensic evidence of active threats.',
    highlights: [
      'Led a 5-member team through architecture, sprint coordination, and deployment.',
      'Built a Go-based runtime anomaly engine flagging unauthorized shell spawning.',
      'Automated Policy-as-Code evaluation with Open Policy Agent (OPA / Rego).',
      'Embedded SHA-256 cryptographic evidence preservation for forensic integrity.',
    ],
    stack: ['Go', 'Docker', 'OPA / Rego', 'Falco', 'Next.js', 'SHA-256'],
  },
  {
    id: 'ztsplit',
    name: 'ZTSplit',
    full: 'Zero-Trust Split-Key Cloud Storage Protocol',
    period: 'Oct 2025 – Jan 2026',
    role: 'Security Research & Cryptographic Protocol Developer',
    link: '',
    linkLabel: 'Zarqa University Research',
    summary:
      'A 4-party zero-trust cloud storage protocol that eliminates single points of failure through split-key encryption.',
    highlights: [
      'Co-designed a 4-party zero-trust protocol removing single points of failure.',
      'Distributed file layers and decryption keys across independent nodes.',
      'Formally verified with AVISPA (OFMC back-end) against MitM and replay attacks.',
      'Validated mathematical resilience of the cryptographic scheme.',
    ],
    stack: ['Cryptography', 'AVISPA', 'OFMC', 'Zero-Trust', 'Split-Key'],
  },
  {
    id: 'carenet',
    name: 'CareNet',
    full: 'Smart Health & Donation Hub',
    period: 'Mar 2025 – Jun 2025',
    role: 'Full-Stack Secure Software Developer',
    link: '',
    linkLabel: 'Course Project · Visual Programming',
    summary:
      'A responsive health management portal with real-time blood-donation matching and strict privacy controls.',
    highlights: [
      'Built an ASP.NET Core MVC portal with structured clinical telemetry logs.',
      'Engineered “BloodLink” real-time donor-to-request matching across regions.',
      'Enforced session-based auth and strict owner-level data validation.',
      'Applied MVC to separate business logic from UI for maintainability.',
    ],
    stack: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Session Auth'],
  },
] as const

export const TECH_STACK = [
  { name: 'C# / .NET', cat: 'Language' },
  { name: 'Python', cat: 'Language' },
  { name: 'JavaScript', cat: 'Language' },
  { name: 'Docker', cat: 'Containers' },
  { name: 'Falco / OPA', cat: 'Runtime Security' },
  { name: 'Linux (Ubuntu)', cat: 'Systems' },
] as const

export const CAPABILITIES = [
  'Penetration Testing',
  'Runtime Security',
  'Cryptography',
  'Network Routing & Switching',
] as const
