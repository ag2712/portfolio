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
    "Senior product designer at HubSpot. Seven years and a few time zones in, I connect the dots and make the messy middle of content tooling feel easy.",
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
    "I’m a senior product designer at HubSpot, designing the content tools brands rely on to publish — and to make smarter calls about what they publish.",
    "I got here sideways: an engineering degree, a master’s in information management, and a UX career that started in research — picked up across a few different countries along the way. That mix is why I adapt quickly, and why I can speak “engineer,” “researcher,” and “PM” in the same meeting.",
    "These days I care most about the parts of a product that are easy to skip — the processes, the edge states, and the handoffs that quietly decide whether good design actually ships.",
  ],
  // Quick facts shown as a small grid.
  facts: [
    { label: "Focus", value: "Content platform · Systems" },
    { label: "Experience", value: "7+ years" }, // TODO: adjust if you prefer
    { label: "Currently", value: "Senior PD @ HubSpot" },
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
  // Set true to keep a project in this file but drop it from the Work grid.
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    slug: "social-insights",
    title: "Social Insights: Reddit-powered brand visibility",
    summary:
      "A 0→1 product turning Reddit conversations into brand insights marketers can act on. Validated with 14 marketing leaders mid-build and shipped to a public beta inside HubSpot’s Marketing Hub.",
    role: "Senior Product Designer · HubSpot",
    year: "2026",
    tags: ["0→1", "Research", "AI-assisted"],
    metric: { value: "32%", label: "beta activation rate" },
    cover: { from: "#3a52cf", to: "#93a4e8", ink: "#0f1633" },
    href: "/work/social-insights",
  },
  {
    slug: "knowledge-base",
    title: "Modernizing HubSpot’s Knowledge Base",
    summary:
      "HubSpot’s Knowledge Base was placed in maintenance mode, and it showed: over 40% of support-product complaints traced back to it. I connected sales, support, and engineering priorities into one two-phase plan — unblock upmarket deals with multi-KB support, then migrate the tool onto HubSpot’s modern content platform for good.",
    role: "Lead product designer · HubSpot",
    year: "2022–24",
    tags: ["Research", "Design strategy", "Platform"],
    metric: { value: "$169K", label: "net-new ARR" },
    cover: { from: "#3f6f6b", to: "#7fb2a6", ink: "#0e1f1d" },
    href: "/work/knowledge-base",
  },
  {
    // Hidden for now — only building out two case studies. Flip `hidden` to
    // false (or remove it) to bring this back into the Work grid.
    slug: "platform-migration",
    title: "Migrating a standalone tool onto the platform",
    summary:
      "I led the design strategy to bring a standalone tool onto HubSpot’s content platform, and set up a testing process to catch bugs before they shipped.",
    role: "Product Designer · HubSpot",
    year: "2022",
    tags: ["Design Strategy", "Platform", "Process"],
    // TODO: replace with a real outcome metric when you have one.
    metric: { value: "Standalone → Platform", label: "migration led" },
    cover: { from: "#6f7f4a", to: "#a7b681", ink: "#1a2010" },
    href: "#",
    hidden: true,
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  blurb: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "University of Maryland",
    degree: "Master's degree, Information Management",
    period: "2017 – 2019",
  },
  {
    school: "Symbiosis International University",
    degree: "Engineer's Degree, Information Technology",
    period: "2012 – 2016",
  },
];

export const experience: Role[] = [
  {
    company: "HubSpot",
    title: "Senior Product Designer",
    period: "Nov 2023 — Present",
    blurb:
      "Led design for Social Insights, an AI-assisted 0→1 product turning Reddit conversations into brand insights marketers can act on — validated with 14 marketing leaders and shipped to a public beta with 32% activation. Shipped multiple editor features and established processes to streamline feature requests and prioritization.",
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
