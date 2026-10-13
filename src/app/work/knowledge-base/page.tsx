import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import RevealScript from "@/components/RevealScript";
import { site } from "@/lib/content";
import kbBefore from "./kb-before.png";
import kbAfter from "./kb-after.png";

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY — Knowledge Base
// All copy for this page lives right here so it's easy to edit in one place.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Knowledge Base · Case study · ${site.name}`,
  description:
    "Modernizing HubSpot’s Knowledge Base. A two-phase project: ship multiple knowledge bases to unblock upmarket sales, then move the whole tool onto HubSpot’s content platform.",
};

// Before / after of the article list. Shown side by side rather than as a
// drag slider: the two screens differ in scale and layout, so an overlay
// slider would misalign mid-drag. Both frames share the before shot's aspect
// ratio, top-aligned, so the pair sits level. Colleagues' names are blurred.
type Hotspot = { n: number; x: number; y: number; w: number; h: number };

// Hotspot boxes are percentages of each screenshot. Matching numbers on the
// before and after screens point at the same change, so readers compare
// like for like instead of hunting for differences.
const beforeAfter: {
  tag: string;
  title: string;
  state: "before" | "after";
  image: typeof kbBefore;
  alt: string;
  hotspots: Hotspot[];
  notes: string[];
}[] = [
  {
    tag: "Before · Legacy tool",
    title: "The original Knowledge Base",
    state: "before",
    image: kbBefore,
    alt: "The legacy Knowledge Base article list in HubSpot, with separate Customize template and Organize categories buttons, and no way to switch between knowledge bases.",
    hotspots: [
      { n: 1, x: 4.3, y: 21.5, w: 15.2, h: 20.5 },
      { n: 2, x: 64.6, y: 8.4, w: 21.3, h: 5.8 },
    ],
    notes: [
      "One knowledge base per account, with no way to switch",
      "Template and category settings on separate buttons",
    ],
  },
  {
    tag: "After · Content platform",
    title: "Rebuilt on the content platform",
    state: "after",
    image: kbAfter,
    alt: "The new Knowledge Base article list on HubSpot’s content platform, with a knowledge base switcher in the sidebar and a Configure menu beside Create article.",
    hotspots: [
      { n: 1, x: 3.6, y: 28.3, w: 14.4, h: 10.6 },
      { n: 2, x: 76.8, y: 11.0, w: 9.3, h: 6.6 },
    ],
    notes: [
      "Switch between knowledge bases from the sidebar",
      "Settings grouped under one Configure menu",
    ],
  },
];

const meta = [
  { label: "Role", value: "Lead Product Designer · end to end" },
  { label: "Team", value: "Customer service & content platform" },
  { label: "Timeline", value: "2022 to 2024 · overlapping phases" },
  {
    label: "Priority",
    value: "P0 · top company priority",
  },
];

// Customer- and business-side framing of the same P0 problem.
const problemViews = [
  {
    label: "The customer view",
    points: [
      "The Knowledge Base tool was the largest source of feedback on HubSpot’s customer-service product. Complaints were still rising every quarter.",
      "Multiple knowledge bases was the community’s #1 unmet request, with more votes than any other.",
      "Customers bought second HubSpot portals or moved to competitors to work around it.",
      "Branding, categories and customization were all limited.",
    ],
  },
  {
    label: "The business view",
    points: [
      "Multiple knowledge bases was the #1 deal-blocker for Enterprise accounts.",
      "We lost recurring revenue every quarter to the missing feature.",
      "By a conservative estimate, missed revenue had reached six figures since 2018.",
      "Platform improvements didn’t reach the tool, so every fix was expensive.",
    ],
  },
];

// Where the Knowledge Base tool sat in HubSpot's product org over time.
// Service Hub and Content Hub are siblings — both Hubs under the platform —
// so they share a depth; only the move between them is what changed.
const ecosystem = [
  {
    depth: 0,
    level: "Level 01 · Platform",
    name: "HubSpot",
    desc: "Marketing, sales, service, content, data and revenue teams all work from one shared customer record.",
  },
  {
    depth: 1,
    level: "Level 02 · Hub · where it started",
    name: "Service Hub",
    desc: "The Knowledge Base tool started in Service Hub, HubSpot’s customer-service product, next to support tickets and chat.",
    moveNote: "→ moved to",
  },
  {
    depth: 1,
    level: "Level 02 · Hub · where it moved",
    name: "Content Hub",
    desc: "HubSpot later grouped its content tools under Content Hub: blog, website pages and Knowledge Base. These products share an editor and a way of publishing.",
  },
  {
    depth: 2,
    level: "Level 03 · This work",
    name: "Knowledge Base",
    desc: "My team. The tool moved again, onto HubSpot’s shared content platform. That move is what this case study covers.",
    highlight: true,
  },
];

const phases = [
  {
    phase: "Phase 1",
    window: "Q3 to Q4 2022",
    name: "Multiple knowledge bases on the old infrastructure",
    desc: "Build the feature on the existing infrastructure, reusing patterns from the blog tool. Ship fast to unblock upmarket deals, build trust across the product trio (PM, engineering and design), and buy time for the bigger rebuild.",
  },
  {
    phase: "Phase 2",
    window: "Scoping from Q4 2022 · shipped 2023",
    name: "Platform migration",
    desc: "Rebuild the Knowledge Base tool on HubSpot’s content platform. Adopt the shared editor, connect to content management system (CMS) themes, and design how existing customers move across.",
  },
];

const methods = [
  {
    method: "Moderated concept test",
    participants: "12 people: 6 HubSpot Knowledge Base users and 6 competitor-tool users",
    output: "Preferences, task success and the reasons behind them",
  },
  {
    method: "Empathy sessions",
    participants: "Private-beta customers of the new feature",
    output: "Feedback from real use, and what to change next",
  },
  {
    method: "Community forum analysis",
    participants: "A 760-vote thread and related requests",
    output: "How and why customers wanted multiple knowledge bases",
  },
  {
    method: "Competitive analysis",
    participants: "Zendesk, Intercom, Helpjuice, Document360",
    output: "Benchmarks for pricing, structure and customization",
  },
];

// Concept-test participant quotes — the qualitative half of the headline finding.
const testQuotes = [
  {
    quote:
      "I felt like it was very tailored to just an article, and it helped me stay more focused. I believe that one would have a higher productivity.",
    who: "HubSpot Knowledge Base user",
  },
  {
    quote:
      "I definitely lean towards the core-focused one. I was confident in there. In the other, I was searching around a lot and it was hard to find what I needed.",
    who: "Competitor-tool user",
  },
];

const reshapedScope = [
  {
    stat: "~90%",
    desc: "wanted collaboration and approvals when writing articles. It became a main roadmap item.",
  },
  {
    stat: "~50%",
    desc: "drafted articles outside the tool because they couldn’t collaborate inside it.",
  },
  {
    stat: "~50%",
    desc: "wanted version control. We mapped this onto the platform’s revision history.",
  },
  {
    stat: "~100%",
    desc: "expected to preview an article before publishing.",
  },
];

const designAreas = [
  {
    name: "Article editor",
    desc: "Built for writing articles. It includes a table of contents, accordions, rich media, preview, related-article links and approval flows.",
  },
  {
    name: "Category management",
    desc: "Replaced the slow legacy screen with drag and drop. After launch, we fixed smaller issues with permissions and special characters.",
  },
  {
    name: "Theme integration",
    desc: "Knowledge base templates now use CMS themes and brand kit values, so the knowledge base, blog and website look consistent.",
  },
  {
    name: "Migration design",
    desc: "An opt-in flow with a beta agreement, screens explaining what changes, feature-parity checks, and updates based on alpha and beta groups.",
  },
  {
    name: "System architecture mapping",
    desc: "Documented the old subsystems and mapped each template setting to its new home in themes, headers, footers or categories.",
  },
];

const stats = [
  {
    value: "Six figures",
    label:
      "in net-new ARR from customers who upgraded to a top-tier plan and turned the feature on (March to September 2023).",
  },
  {
    value: "13.6%",
    label: "activation rate, well ahead of the team’s internal target.",
  },
  {
    value: ">90%",
    label: "positive customer satisfaction after launch.",
  },
  {
    value: "760",
    label: "votes on the #1 community request, now resolved.",
  },
];

const outcomes = [
  {
    track: "Phase 1 · Multiple knowledge bases",
    points: [
      "13.6% activation rate, well ahead of the team’s internal target.",
      "Six figures in net-new ARR from Enterprise upgrades.",
      "Recently upgraded Enterprise accounts turned it on more than new or existing ones. The feature helped drive upgrades.",
      "Over 90% positive customer satisfaction after launch.",
    ],
  },
  {
    track: "Phase 2 · Content platform",
    points: [
      "A modern editor with drag and drop, revision history, undo and redo, and richer content modules.",
      "The Knowledge Base tool now uses the same themes as websites and blogs.",
      "Category drag and drop shipped, then improved through real feedback.",
      "The tool now gets future content platform improvements automatically.",
    ],
  },
];

const broaderImpact = [
  "A key project in the customer-service product’s push to serve mid-market customers.",
  "Moved the content platform closer to its goal of bringing more products onto one shared system.",
  "The article editor research shaped the roadmap of HubSpot’s content editor team.",
  "Wrote a documented process for other HubSpot teams moving onto the content platform.",
];

const lessons = [
  {
    tag: "What worked",
    name: "Phased strategy",
    desc: "Shipping multiple knowledge bases first built trust in the team, gave customers value straight away, and bought time for the harder platform work.",
  },
  {
    tag: "What worked",
    name: "Research as a neutral decision tool",
    desc: "Concept testing turned a stand-off between stakeholders into a recommendation based on users. The findings also helped the wider content platform team.",
  },
  {
    tag: "What worked",
    name: "Lowering risk through how we released",
    desc: "The interim editor let us ship early, gather real feedback and keep improving, without giving up on the final vision.",
  },
  {
    tag: "What I’d change",
    name: "Map how migration feels, earlier",
    desc: "Customers use the Knowledge Base tool every day. Being asked to switch to a new version causes real worry. I’d map how migration feels for customers earlier, alongside the steps.",
  },
  {
    tag: "What I’d change",
    name: "Align scope across teams sooner",
    desc: "With so many teams involved, I’d run structured scope sessions at the start to avoid delays later.",
  },
];

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

// Abstract avatar mark for a concept-test participant — geometric, not a
// fabricated likeness, in the same generative style as the project cover art.
// Each participant gets a distinct accent so the two quotes read as
// different people without naming anyone.
function ConceptTesterAvatar({ variant = 0 }: { variant?: number }) {
  const accent = variant % 2 === 0 ? "var(--sage-ink)" : "var(--accent-ink)";
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-16 w-16 shrink-0 md:h-20 md:w-20"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="100" fill="var(--mist)" />
      <path
        d="M40 168c6-34 30-52 60-52s54 18 60 52"
        fill="var(--ink)"
        opacity="0.14"
      />
      <circle cx="100" cy="82" r="36" fill="var(--ink)" opacity="0.16" />
      <rect x="132" y="34" width="22" height="22" rx="5" fill={accent} />
    </svg>
  );
}

export default function KnowledgeBaseCaseStudy() {
  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="font-display text-lg font-medium tracking-tight text-ink"
          >
            {site.name}
          </Link>
          <Link
            href="/#work"
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            ← All work
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 pt-16 md:px-10 md:pt-24">
            <p className="eyebrow reveal">
              Case study · Modernizing HubSpot&apos;s Knowledge Base
            </p>
            <h1 className="reveal mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Knowledge Base<span className="text-accent-ink">.</span>
            </h1>
            <p className="reveal mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              A tool in maintenance mode had become the largest source of
              complaints for HubSpot&apos;s customer-service product. As lead
              designer, I ran a two-phase project. First, ship multiple
              knowledge bases to unblock upmarket sales. Then, move the whole
              tool onto HubSpot&apos;s modern content platform.
            </p>

            <dl className="reveal mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="eyebrow">{m.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Before / after — breaks out wider than the reading column so
              the screens stay legible side by side */}
          <div className="mx-auto mt-12 max-w-6xl px-6 pb-14 md:mt-16 md:px-10 md:pb-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
              {beforeAfter.map((s) => {
                const isAfter = s.state === "after";
                return (
                  <figure key={s.tag} className="reveal">
                    <div className="relative">
                      <a
                        href={s.image.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative block aspect-[2880/1610] overflow-hidden rounded-xl border bg-white transition-shadow hover:shadow-md ${
                          isAfter
                            ? "border-accent/40 shadow-md ring-4 ring-accent/10"
                            : "border-line shadow-sm"
                        }`}
                        aria-label={`${s.title}. Open full-size screenshot`}
                      >
                        <Image
                          src={s.image}
                          alt={s.alt}
                          sizes="(min-width: 1152px) 540px, (min-width: 768px) 46vw, 100vw"
                          className={`h-full w-full object-contain object-top transition duration-300 ${
                            isAfter ? "" : "saturate-[.55] group-hover:saturate-100"
                          }`}
                          placeholder="blur"
                        />

                        {/* Hotspots — an overlay sized to the screenshot itself */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-0 top-0"
                          style={{
                            aspectRatio: `${s.image.width} / ${s.image.height}`,
                          }}
                        >
                          {s.hotspots.map((h) => (
                            <span
                              key={h.n}
                              className={`absolute rounded-md ${
                                isAfter
                                  ? "border-2 border-accent bg-accent/10"
                                  : "border-2 border-dashed border-ink/45"
                              }`}
                              style={{
                                left: `${h.x}%`,
                                top: `${h.y}%`,
                                width: `${h.w}%`,
                                height: `${h.h}%`,
                              }}
                            >
                              <span
                                className={`absolute -left-2.5 -top-2.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold ${
                                  isAfter
                                    ? "bg-accent text-white"
                                    : "bg-ink/70 text-white"
                                }`}
                              >
                                {h.n}
                              </span>
                            </span>
                          ))}
                        </div>

                        {/* On-image label */}
                        <span
                          className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide shadow-sm ${
                            isAfter
                              ? "bg-accent text-white"
                              : "bg-ink/75 text-white"
                          }`}
                        >
                          {isAfter ? "After" : "Before"}
                        </span>
                      </a>

                      {/* Arrow between the two screens */}
                      {isAfter && (
                        <span
                          aria-hidden
                          className="absolute left-1/2 -top-6 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 rotate-90 items-center justify-center rounded-full border border-line bg-bg text-ink shadow-sm md:-left-5 md:top-1/2 md:rotate-0"
                        >
                          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                            <path
                              d="M4 10h11m-4-4 4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </div>

                    <figcaption className="mt-5">
                      <p className={`eyebrow ${isAfter ? "text-accent-ink" : ""}`}>
                        {s.tag}
                      </p>
                      <p className="mt-1.5 font-display text-lg font-medium tracking-tight text-ink">
                        {s.title}
                      </p>
                      <ol className="mt-3 space-y-2">
                        {s.notes.map((note, i) => (
                          <li
                            key={note}
                            className="flex gap-3 text-sm leading-6 text-muted"
                          >
                            <span
                              aria-hidden
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${
                                isAfter ? "bg-accent" : "bg-ink/70"
                              }`}
                            >
                              {i + 1}
                            </span>
                            {note}
                          </li>
                        ))}
                      </ol>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        {/* Landscape — where it sits, for readers new to HubSpot */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="The landscape" title="Where this sits" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              New to HubSpot? Here&apos;s where the Knowledge Base tool has
              lived. It moved twice before this case study starts.
            </p>
            <div className="mt-10 space-y-3">
              {ecosystem.map((e) => (
                <div key={e.name} style={{ marginLeft: `${e.depth * 20}px` }}>
                  <div
                    className={`reveal rounded-2xl border p-5 md:p-6 ${
                      e.highlight
                        ? "border-sage-ink/30 bg-sage/60"
                        : "border-line bg-bg-raised/40"
                    }`}
                  >
                    <p className="eyebrow">{e.level}</p>
                    <h3 className="mt-1.5 font-display text-xl font-medium tracking-tight text-ink">
                      {e.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">
                      {e.desc}
                    </p>
                  </div>
                  {e.moveNote && (
                    <p className="reveal mt-3 pl-2 text-xs font-medium uppercase tracking-wide text-muted">
                      {e.moveNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Context — the problem */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Context"
              title="A P0 problem hiding in a maintenance-mode tool"
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              Knowledge bases let businesses publish help articles, so
              customers can solve problems without contacting support. HubSpot
              built its Knowledge Base tool in 2017, before its shared platform
              existed. In 2019 the tool went into maintenance mode. By 2022 it
              drew more feedback than any other part of the product, and it was
              getting worse.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {problemViews.map((v) => (
                <div
                  key={v.label}
                  className="reveal rounded-2xl border border-line bg-bg-raised/50 p-6 md:p-8"
                >
                  <p className="eyebrow">{v.label}</p>
                  <ul className="mt-4 space-y-3">
                    {v.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-6 text-ink/85"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The problem statement */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <p className="eyebrow reveal">The problem</p>
            <p className="reveal mt-5 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              Upmarket customers{" "}
              <span className="rounded bg-accent/15 px-1 text-accent-ink">
                couldn&apos;t create multiple knowledge bases
              </span>
              , the top deal-blocker for Enterprise accounts. The tool itself
              was{" "}
              <span className="rounded bg-accent/15 px-1 text-accent-ink">
                cut off from HubSpot&apos;s modern content platform
              </span>
              , so every fix was slow and expensive.
            </p>
          </div>
        </section>

        {/* Strategic approach */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Strategy"
              title="Splitting a two-year problem into two phases"
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              We had two linked problems. Customers couldn&apos;t create
              multiple knowledge bases, and the tool was cut off from the
              modern content platform. Solving both at once would have been
              slow and risky. So we split the work into phases. We shipped
              value to customers first on the old infrastructure, and started
              scoping the harder platform move once the team knew enough to
              take it on.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {phases.map((p) => (
                <div
                  key={p.phase}
                  className="reveal rounded-2xl border border-line bg-bg-raised/50 p-6 md:p-8"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="eyebrow">{p.phase}</p>
                    <span className="text-xs text-muted">{p.window}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="reveal mt-6 rounded-2xl border border-sage-ink/30 bg-sage/60 p-6 md:p-8">
              <p className="eyebrow text-sage-ink">Why phasing mattered</p>
              <p className="mt-3 text-sm leading-7 text-ink/85 md:text-base">
                Our product trio of PM, engineering and design was new.
                Starting with a small, urgent problem helped us learn to work
                together. That trust let us start scoping the platform move
                with other teams well before Phase 1 shipped, and we relied on
                it for the harder work that followed.
              </p>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Research"
              title="Using research to break a deadlock"
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              As we planned the move, one question split the room: what should
              writing an article feel like? One group wanted the editor to show
              the full page, with header, footer and navigation. The other
              wanted a focused editor with only the article. Rather than let it
              stall the roadmap, I planned and ran a moderated concept test so
              users could settle it.
            </p>

            {/* Methods table */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-line">
              {methods.map((m, i) => (
                <div
                  key={m.method}
                  className={`reveal grid grid-cols-1 gap-3 p-5 md:grid-cols-12 md:gap-6 md:p-6 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <div className="md:col-span-3">
                    <h3 className="font-display text-lg font-medium tracking-tight text-ink">
                      {m.method}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="eyebrow">Participants</p>
                    <p className="mt-1.5 text-sm leading-6 text-ink/80">
                      {m.participants}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="eyebrow">Output</p>
                    <p className="mt-1.5 text-sm leading-6 text-ink/80">
                      {m.output}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Headline finding */}
            <div className="mt-12">
              <p className="eyebrow reveal">Key finding</p>
              <p className="reveal mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
                7 of 12
              </p>
              <p className="reveal mt-3 max-w-2xl text-base leading-7 text-ink/85">
                participants preferred the article-only editor. They called it
                “simple” and “straightforward,” and said it helped them “stay
                focused.” Those who preferred the full-page editor were mostly
                admins who managed the header and footer.
              </p>
            </div>

            {/* Participant voices — one row per quote */}
            <div className="mt-10 space-y-5">
              {testQuotes.map((q, i) => (
                <div
                  key={q.who}
                  className="reveal flex flex-col gap-5 rounded-2xl border border-line bg-bg-raised/40 p-6 sm:flex-row sm:items-center md:p-8"
                >
                  <ConceptTesterAvatar variant={i} />
                  <figure className="border-l-2 border-accent pl-6">
                    <blockquote className="font-display text-lg font-medium leading-snug tracking-tight text-ink md:text-xl">
                      “{q.quote}”
                    </blockquote>
                    <figcaption className="mt-3 text-sm text-muted">
                      {q.who} · concept-test participant
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>

            {/* Findings that reshaped scope */}
            <div className="mt-16">
              <p className="eyebrow reveal">Findings that reshaped scope</p>
              <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {reshapedScope.map((f) => (
                  <div key={f.desc} className="reveal border-t border-line pt-5">
                    <div className="font-display text-3xl font-medium tracking-tight text-ink">
                      {f.stat}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal mt-12 rounded-2xl border border-sage-ink/30 bg-sage/60 p-6 md:p-8">
              <p className="eyebrow text-sage-ink">Why this mattered beyond the Knowledge Base</p>
              <p className="mt-3 text-sm leading-7 text-ink/85 md:text-base">
                The research reached beyond our team. It shaped a top 2023
                project for HubSpot&apos;s content editor team, showing gaps in
                their editor plan and pointing them to the features that
                mattered most. It also ended the disagreement that had stalled
                our own roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* Design */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Design"
              title="Designing across two products and five platform teams"
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              The design work had two tracks: multiple knowledge bases on the
              old infrastructure, and the full platform rebuild. The rebuild
              meant working with five platform teams: themes, editor,
              structured content, publishing and DDC.{" "}
              {/* TODO: confirm what DDC stands for */}
              Each had its own roadmap and design language.
            </p>

            <div className="reveal mt-10 rounded-2xl border border-line bg-bg p-6 md:p-8">
              <p className="eyebrow">Track 01 · Multiple knowledge bases on the old infrastructure</p>
              <p className="mt-3 text-sm leading-7 text-ink/85 md:text-base">
                The blog tool already supported multiple blogs, so I reused its
                patterns. Customers who knew that setup could use the same
                navigation, naming and setup flow here, with nothing new to
                learn. Each knowledge base got its own domain, branding,
                categories, content and analytics. We set limits of 5 per
                account and 2,000 articles each, based on what the old
                infrastructure could handle.
              </p>
            </div>

            <div className="reveal mt-6 rounded-2xl border border-line bg-bg p-6 md:p-8">
              <p className="eyebrow">Track 02 · Platform migration</p>
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                {designAreas.map((d) => (
                  <div key={d.name} className="border-t border-line pt-5">
                    <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink">
                      {d.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The editor decision — a narrative beat, styled apart from the
                two design-track cards above it */}
            <div className="reveal mt-12 rounded-2xl border border-sage-ink/30 bg-sage/60 p-6 md:p-8">
              <p className="eyebrow text-sage-ink">The editor decision · siding with users, keeping the room together</p>
              <p className="mt-4 text-sm leading-7 text-ink/85 md:text-base">
                The research gave a clear answer: build the editor for writing
                articles. I shared it in a tense meeting where one side was
                going to lose. The evidence was strong, and I stood by what
                users needed.
              </p>
              <p className="mt-4 text-sm leading-7 text-ink/85 md:text-base">
                I also wanted the other side to stay on board. So I proposed a
                release plan. We shipped an{" "}
                <span className="font-medium text-ink">interim editor</span> to a
                small group of low-risk alpha users straight away, to get real
                feedback. Then we{" "}
                <span className="font-medium text-ink">quickly replaced</span> it
                with the full platform editor for every release after. This
                lowered the risk of the launch, kept us moving, and gave the
                other side a way to have their concerns tested with data.
              </p>
            </div>
          </div>
        </section>

        {/* Impact at a glance */}
        <section className="border-y border-line py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <p className="eyebrow reveal">Impact at a glance</p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.value} className="reveal">
                  <div className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
                    {s.value}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Outcomes" title="What it added up to" />

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {outcomes.map((o) => (
                <div
                  key={o.track}
                  className="reveal rounded-2xl border border-line bg-bg-raised/50 p-6 md:p-8"
                >
                  <p className="eyebrow">{o.track}</p>
                  <ul className="mt-4 space-y-3">
                    {o.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-6 text-ink/85"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-ink/60"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Customer voice */}
            <div className="reveal mt-8 rounded-2xl border border-line bg-bg p-6 md:p-8">
              <p className="eyebrow">Customer feedback after launch</p>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                <blockquote className="font-display text-lg font-medium leading-snug tracking-tight text-ink md:text-xl">
                  “Super easy to do! Took less than 2 minutes to complete.”
                </blockquote>
                <blockquote className="font-display text-lg font-medium leading-snug tracking-tight text-ink md:text-xl">
                  “I&apos;ve been waiting for this feature, and it&apos;s super
                  easy to use. Thank you.”
                </blockquote>
              </div>
            </div>

            {/* Broader impact */}
            <div className="mt-12">
              <p className="eyebrow reveal">Broader impact</p>
              <ul className="mt-6 space-y-4">
                {broaderImpact.map((b) => (
                  <li
                    key={b}
                    className="reveal flex gap-3 border-t border-line pt-4 text-sm leading-7 text-ink/85 md:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Reflection"
              title="What I took away"
            />
            <div className="mt-10 space-y-8">
              {lessons.map((l) => (
                <div
                  key={l.name}
                  className="reveal grid grid-cols-1 gap-2 border-t border-line pt-6 md:grid-cols-12 md:gap-8"
                >
                  <p className="eyebrow md:col-span-3">{l.tag}</p>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                      {l.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                      {l.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="reveal mt-12 max-w-2xl text-base leading-7 text-muted">
              Together, these two projects earned my promotion from Product
              Designer to Senior Product Designer.
            </p>

            <div className="reveal mt-10">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg-raised"
              >
                ← Back to all work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Contact />
      <RevealScript />
    </>
  );
}
