// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME — all portfolio content lives here.
// Swap the copy, projects, and links below with your own. Everything is typed,
// so your editor will guide you.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Alisha Gonsalves",
  role: "Senior Product Designer",
  // A short, spoken-word intro used in the hero.
  tagline:
    "I design calm, considered products for complex problems — from 0→1 bets to systems used by millions.",
  location: "San Francisco, CA",
  email: "a27gonsalves@gmail.com",
  // Drop a PDF at /public/resume.pdf to make this button work.
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "Read.cv", href: "https://read.cv/" },
  ],
} as const;

export const about = {
  // 2–3 short paragraphs. Keep it human.
  paragraphs: [
    "I’m a senior product designer with 8+ years shaping software that people reach for every day. I care about the unglamorous middle of a product — the states, the edges, the moments where clarity earns trust.",
    "My work spans fintech, healthcare, and B2B platforms. I move comfortably between zero-to-one exploration and the systems thinking it takes to scale a mature product without it turning to mush.",
    "Away from the canvas I’m usually with a film camera, a bread starter that demands attention, or a trail somewhere with no signal.",
  ],
  // Quick facts shown as a small grid.
  facts: [
    { label: "Focus", value: "Product · Systems · 0→1" },
    { label: "Experience", value: "8+ years" },
    { label: "Tools", value: "Figma · Framer · Swift" },
    { label: "Based in", value: "San Francisco" },
  ],
} as const;

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  metric: { value: string; label: string };
  // Two tailwind color stops drive the generated cover art — no images needed.
  cover: { from: string; to: string; ink: string };
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "atlas-checkout",
    title: "Rebuilding checkout for a fintech platform",
    summary:
      "Led the redesign of a multi-step payment flow, collapsing friction and rebuilding trust at the moment money moves. Ran the research, shipped the system, and measured the lift.",
    role: "Lead Product Designer",
    year: "2024",
    tags: ["Research", "Interaction", "Design System"],
    metric: { value: "+34%", label: "checkout conversion" },
    cover: { from: "#e8623c", to: "#f2a65a", ink: "#2a1206" },
    href: "#",
  },
  {
    slug: "vela-health",
    title: "A design system for a healthcare suite",
    summary:
      "Built Vela — a token-driven system unifying five products and three platforms. Cut design-to-ship time and gave 40+ engineers a single, accessible source of truth.",
    role: "Staff Designer, Design Systems",
    year: "2023",
    tags: ["Design System", "Accessibility", "Tokens"],
    metric: { value: "5→1", label: "products unified" },
    cover: { from: "#3f6f6b", to: "#7fb2a6", ink: "#0e1f1d" },
    href: "#",
  },
  {
    slug: "nimbus-onboarding",
    title: "0→1 onboarding for a B2B SaaS",
    summary:
      "Shaped the first-run experience for a new analytics product — from blank-canvas concept to a guided setup that got teams to their first insight in minutes, not days.",
    role: "Founding Product Designer",
    year: "2022",
    tags: ["0→1", "Prototyping", "Onboarding"],
    metric: { value: "3 days → 9 min", label: "time to value" },
    cover: { from: "#4b4bd6", to: "#8f7bf0", ink: "#0c0a2b" },
    href: "#",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  blurb: string;
};

export const experience: Role[] = [
  {
    company: "Northwind",
    title: "Senior Product Designer",
    period: "2022 — Present",
    blurb:
      "Own end-to-end design for the payments platform. Partner with PM and eng on strategy, ship the roadmap, and steward the design system.",
  },
  {
    company: "Vela Health",
    title: "Staff Designer, Design Systems",
    period: "2020 — 2022",
    blurb:
      "Founded and scaled the design system across five products; drove the org’s accessibility standards to WCAG 2.1 AA.",
  },
  {
    company: "Nimbus",
    title: "Founding Product Designer",
    period: "2018 — 2020",
    blurb:
      "First designer at a seed-stage analytics startup. Set the visual language, shipped the MVP, and helped raise a Series A.",
  },
  {
    company: "Studio Field",
    title: "Product Designer",
    period: "2016 — 2018",
    blurb:
      "Design consultancy — shipped web and mobile products for clients across fintech, retail, and civic tech.",
  },
];

export const capabilities = [
  "Product strategy",
  "Interaction design",
  "Design systems",
  "User research",
  "Prototyping",
  "Design ops",
  "Accessibility",
  "Front-end (React / SwiftUI)",
] as const;
