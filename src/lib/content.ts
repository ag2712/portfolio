// ─────────────────────────────────────────────────────────────────────────────
// EDIT ME — all portfolio content lives here.
// Swap the copy, projects, and links below with your own. Everything is typed,
// so your editor will guide you.
//
// TODO markers flag things I couldn't confirm from your LinkedIn paste —
// fill these in when you get a chance.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Alisha Gonsalves",
  role: "Senior Product Designer",
  // A short, spoken-word intro used in the hero.
  tagline:
    "Senior product designer at HubSpot. I design scalable, insight-driven experiences for content tooling — research-led, and shipped at platform scale.",
  // TODO: add your city (left blank so nothing is invented).
  location: "",
  email: "a27gonsalves@gmail.com",
  // Drop a PDF at /public/resume.pdf to make this button work.
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alisha-gonsalves/" },
    // TODO: add Dribbble / personal site / Read.cv if you have them.
  ],
} as const;

export const about = {
  // 2–3 short paragraphs. Keep it human.
  paragraphs: [
    "I’m a senior product designer at HubSpot, where I design scalable, insight-driven experiences in the content editor space — the tools brands rely on to publish and make informed decisions.",
    "I came into product design through research. Earlier roles at CentralSquare, the University of Maryland, and Experian were grounded in user interviews, usability testing, and quantitative tracking — and that research instinct still shapes how I approach every problem.",
    "I care about the parts of a product that are easy to skip: the processes, the edge states, and the handoffs that decide whether good design actually ships.",
  ],
  // Quick facts shown as a small grid.
  facts: [
    { label: "Focus", value: "Content platform · Systems" },
    { label: "Experience", value: "7+ years" }, // TODO: adjust if you prefer
    { label: "Currently", value: "Senior PD @ HubSpot" },
    { label: "Education", value: "University of Maryland" }, // TODO: add degree
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
    slug: "content-editor",
    title: "Insight-driven experiences in the content editor",
    summary:
      "Designing scalable experiences that help brands make informed decisions — shipping multiple features across HubSpot’s content editor and establishing how feature requests get triaged and prioritized.",
    role: "Senior Product Designer · HubSpot",
    year: "2024",
    tags: ["Content Tools", "Systems", "Strategy"],
    // TODO: replace with a real outcome metric when you have one.
    metric: { value: "Insight-driven", label: "brand decisions" },
    cover: { from: "#e8623c", to: "#f2a65a", ink: "#2a1206" },
    href: "#",
  },
  {
    slug: "knowledge-bases",
    title: "Knowledge Bases on the content platform",
    summary:
      "Designed knowledge base features and shaped the first-run experience as the tool moved onto HubSpot’s content platform — with a focus on getting teams activated early.",
    role: "Product Designer · HubSpot",
    year: "2023",
    tags: ["Research", "Activation", "Platform"],
    metric: { value: "13.6%", label: "activation in 90 days" },
    cover: { from: "#3f6f6b", to: "#7fb2a6", ink: "#0e1f1d" },
    href: "#",
  },
  {
    slug: "platform-migration",
    title: "Migrating a standalone tool onto the platform",
    summary:
      "Led the design strategy to bring a standalone tool onto HubSpot’s content platform, and introduced a testing process for efficient bug resolution before each release.",
    role: "Product Designer · HubSpot",
    year: "2022",
    tags: ["Design Strategy", "Platform", "Process"],
    // TODO: replace with a real outcome metric when you have one.
    metric: { value: "Standalone → Platform", label: "migration led" },
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
    company: "HubSpot",
    title: "Senior Product Designer",
    period: "Nov 2023 — Present",
    blurb:
      "Design scalable, insight-driven experiences for brand decision-making in the content editor space. Shipped multiple editor features and established processes to streamline feature requests and prioritization.",
  },
  {
    company: "HubSpot",
    title: "Product Designer",
    period: "Sep 2021 — Oct 2023",
    blurb:
      "Led the design strategy to move a standalone tool onto HubSpot’s content platform. Designed knowledge base features that reached a 13.6% activation rate within 90 days, and created a testing process for faster pre-release bug resolution.",
  },
  {
    company: "CentralSquare Technologies",
    title: "Associate UX Designer",
    period: "Aug 2019 — Aug 2021",
    blurb:
      "Ran qualitative research — user interviews and usability sessions — and set up product tracking for quantitative insight. Built processes to streamline cross-functional collaboration.",
  },
  {
    company: "University of Maryland",
    title: "UX Graduate Assistant",
    period: "Sep 2018 — May 2019",
    blurb:
      "Gathered and reported user feedback through usability testing, co-authored a usability issues document with proposed UX solutions, and helped clean faculty data for import.",
  },
  {
    company: "Experian",
    title: "Business UX Analyst Intern",
    period: "Jun 2018 — Aug 2018",
    blurb:
      "Audited an internal tool for usability and delivered issue artifacts with prototyped improvement solutions.",
  },
];

export const capabilities = [
  "Product strategy",
  "Interaction design",
  "Design systems",
  "User research",
  "Usability testing",
  "Prototyping",
  "Content design",
  "Cross-functional leadership",
] as const;
