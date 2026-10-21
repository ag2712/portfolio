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
    "Seven years and a few time zones in, I connect the dots and make the messy middle of building products feel easy.",
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
    "I design tools in the marketing space that help brands get their message out, and understand how it’s landing.",
    "I got here sideways: an engineering degree, a master’s in information management, and a UX career that started in research (picked up across a few different countries along the way). That mix is why I adapt quickly, and why I can speak “engineer”, “researcher” and “PM” in the same meeting.",
    "These days I care most about the parts of a product that are easy to skip: the processes, the edge states, and the handoffs that quietly decide whether good design actually ships.",
  ],
  // Quick facts shown as a small grid.
  facts: [
    { label: "Focus", value: "Marketing tools" },
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
  // A flat brand fill (mist or sage) and an ink colour drive the cover art.
  // No images needed, and no gradients (the brand kit retires them).
  cover: { bg: string; ink: string };
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
    cover: { bg: "#dce4e9", ink: "#0a0a0a" }, // mist
    href: "/work/social-insights",
  },
  {
    slug: "knowledge-base",
    title: "Modernising HubSpot’s Knowledge Base",
    summary:
      "HubSpot’s Knowledge Base was placed in maintenance mode, and it showed: over 40% of support-product complaints traced back to it. I connected sales, support, and engineering priorities into one two-phase plan: unblock upmarket deals with multi-KB support, then migrate the tool onto HubSpot’s modern content platform for good.",
    role: "Lead product designer · HubSpot",
    year: "2022–2024",
    tags: ["Research", "Design strategy", "Platform"],
    metric: { value: "$169K", label: "net-new ARR" },
    cover: { bg: "#d9e3cc", ink: "#0a0a0a" }, // sage
    href: "/work/knowledge-base",
  },
  {
    // Hidden for now: only building out two case studies. Flip `hidden` to
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
    cover: { bg: "#dce4e9", ink: "#0a0a0a" }, // mist
    href: "#",
    hidden: true,
  },
];

export type Role = {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "University of Maryland",
    degree: "Master of Information Management",
    period: "2017–2019",
  },
  {
    school: "Symbiosis International University",
    degree: "Bachelor of Engineering in Information Technology",
    period: "2012–2016",
  },
];

export const resumeSummary =
  "Senior product designer with 7+ years of experience shaping content and platform products, with growing expertise in AI-powered features. I turn customer feedback and complex requirements into measurable outcomes.";

export const experience: Role[] = [
  {
    company: "HubSpot",
    location: "Cambridge, MA",
    title: "Senior Product Designer",
    period: "Nov 2023 to present",
    bullets: [
      "Led design for Social Insights, a product that turns Reddit conversations into brand insights marketers can act on. Validated with 14 marketing leaders mid-build and shipped to public beta, reaching 32% activation.",
      "Used AI across the design process: built prototypes to test multiple entry points in days rather than weeks, synthesised user feedback into themes, and wrote small PRs that tightened design-to-engineering handoffs.",
      "Shipped multiple editor features and set up processes to streamline feature requests and prioritisation.",
    ],
  },
  {
    company: "HubSpot",
    location: "Cambridge, MA",
    title: "Product Designer",
    period: "Sep 2021 to Oct 2023",
    bullets: [
      "Led design strategy to move the standalone Knowledge Base product onto HubSpot’s content platform, joining business and engineering priorities into a two-phase plan. Result: $169K net-new ARR.",
      "Designed knowledge base features that reached a 13.6% activation rate within 90 days.",
      "Created a GitHub-based bug quality testing process for faster pre-release bug resolution.",
    ],
  },
  {
    company: "CentralSquare Technologies",
    location: "Lake Mary, FL",
    title: "Associate UX Designer",
    period: "Aug 2019 to Aug 2021",
    bullets: [
      "Ran qualitative research, including user interviews and usability sessions.",
      "Set up product tracking to add quantitative insight.",
      "Built processes to streamline cross-functional collaboration.",
    ],
  },
  {
    company: "University of Maryland",
    location: "College Park, MD",
    title: "UX Graduate Assistant",
    period: "Sep 2018 to May 2019",
    bullets: [
      "Surfaced usability issues by running usability tests and reporting user feedback to guide design improvements.",
      "Co-authored a usability issues document that paired each issue with a proposed UX solution.",
      "Cleaned faculty data so it was ready for import.",
    ],
  },
  {
    company: "Experian",
    location: "Costa Mesa, CA",
    title: "Business UX Analyst Intern",
    period: "Jun 2018 to Aug 2018",
    bullets: [
      "Audited an internal tool for usability and delivered issue artifacts with prototyped improvements.",
    ],
  },
];

export const tools = [
  { label: "Design", items: ["Figma", "Sketch", "Photoshop", "Framer"] },
  {
    label: "AI",
    items: ["Lovable", "Conductor", "Claude", "Glean", "NotebookLM"],
  },
] as const;

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
