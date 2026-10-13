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
    "Modernizing HubSpot's Knowledge Base. A two-phase initiative — ship support for multiple knowledge bases to unblock upmarket sales, then migrate the whole tool onto HubSpot's content platform.",
};

// Before / after of the article list. Shown side by side rather than as a
// drag slider: the two screens differ in scale and layout, so an overlay
// slider would misalign mid-drag. Colleagues' names are blurred in the images.
const beforeAfter = [
  {
    tag: "Before · 2022",
    title: "Phase 1 on legacy rails",
    caption:
      "Multiple knowledge bases shipped through the knowledge base switcher, while template and category settings sat behind a single Configure menu.",
    image: kbBefore,
    alt: "The 2022 Knowledge Base article list in HubSpot, with a knowledge base switcher in the sidebar and a single Configure menu beside Create article.",
  },
  {
    tag: "After · 2023",
    title: "Phase 2 on the content platform",
    caption:
      "Customize template and Organize categories became first-class actions, backed by CMS themes and drag-and-drop categories.",
    image: kbAfter,
    alt: "The 2023 Knowledge Base article list on the content platform, with Customize template, Organize categories and Create article buttons, and article counts by status.",
  },
];

const meta = [
  { label: "Role", value: "Lead product designer · end-to-end" },
  { label: "Team", value: "Customer service & content platform" },
  { label: "Timeline", value: "2022–2024 · overlapping phases" },
  {
    label: "Priority",
    value: "Top company priority (P0 — highest engineering priority tier)",
  },
];

// Customer- and business-side framing of the same P0 problem.
const problemViews = [
  {
    label: "The customer view",
    points: [
      "The Knowledge Base tool had become the single largest source of feedback on HubSpot's customer-service product — and complaint volume was still climbing quarter over quarter",
      "The community's request for multiple knowledge bases was its #1 unmet ask, with more votes than any other open request",
      "Customers bought second HubSpot portals or switched to competitors as a workaround",
      "Branding, categorization and customization were severely limited",
    ],
  },
  {
    label: "The business view",
    points: [
      "Support for multiple knowledge bases was the #1 deal-blocker for top-tier (Enterprise) accounts",
      "Measurable recurring revenue was being lost each quarter to the missing feature",
      "A significant, six-figure sum in missed revenue had accumulated since 2018 — by a conservative estimate",
      "Platform improvements didn't flow through, so every fix was expensive",
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
    level: "Level 02 · Hub — where it started",
    name: "Service Hub",
    desc: "The Knowledge Base tool originally lived in Service Hub, HubSpot's customer-service product line, alongside support tickets and chat.",
    moveNote: "→ moved to",
  },
  {
    depth: 1,
    level: "Level 02 · Hub — where it moved",
    name: "Content Hub",
    desc: "HubSpot later regrouped its content-authoring tools — blog, website pages, Knowledge Base — under Content Hub, aligning it with the products it actually shares an editor and publishing model with.",
  },
  {
    depth: 2,
    level: "Level 03 · This work",
    name: "Knowledge Base",
    desc: "My team. The tool moved again, this time onto HubSpot's shared content platform infrastructure — the two-phase initiative this case study covers.",
    highlight: true,
  },
];

const phases = [
  {
    phase: "Phase 1",
    window: "Q3–Q4 2022",
    name: "Multiple knowledge bases on legacy rails",
    desc: "Scope the feature to existing infrastructure, reusing proven patterns from the blog tool. Ship fast to unblock upmarket deals, build trust across the product trio (PM, engineering, design), and buy time for the bigger rebuild.",
  },
  {
    phase: "Phase 2",
    window: "Scoping began Q4 2022, alongside Phase 1 · delivered 2023",
    name: "Platform migration",
    desc: "Rebuild the Knowledge Base tool on HubSpot's content data platform, adopt the scalable editor, integrate content management system (CMS) themes, and design the migration path for existing customers onto the new system.",
  },
];

const methods = [
  {
    method: "Moderated concept test",
    participants: "12 — 6 HubSpot Knowledge Base users, 6 competitor-tool users",
    output: "Preference data, task success, qualitative reasoning",
  },
  {
    method: "Empathy sessions",
    participants: "Private-beta customers of the new feature",
    output: "Real usage feedback, iteration inputs",
  },
  {
    method: "Community forum analysis",
    participants: "760-vote thread and related requests",
    output: "Adoption patterns and use cases for multiple knowledge bases",
  },
  {
    method: "Competitive analysis",
    participants: "Zendesk, Intercom, Helpjuice, Document360",
    output: "Pricing, structure, customization benchmarks",
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
      "I definitely lean towards the core-focused one — I was confident in there. In the other, I was searching around a lot and it was hard to find what I needed.",
    who: "Competitor-tool user",
  },
];

const reshapedScope = [
  {
    stat: "~90%",
    desc: "wanted collaboration and approvals in article creation — it became a first-class roadmap item",
  },
  {
    stat: "~50%",
    desc: "drafted articles outside the Knowledge Base tool because they couldn't collaborate inside it",
  },
  {
    stat: "~50%",
    desc: "wanted version control — mapped directly onto platform revision history",
  },
  {
    stat: "~100%",
    desc: "expected a preview step before publishing",
  },
];

const designAreas = [
  {
    name: "Article editor",
    desc: "Optimized for core article creation. Ships rich formatting (TOC, accordions), rich media, a preview step, related-article linking, and approval-ready flows.",
  },
  {
    name: "Category management",
    desc: "Replaced the laggy legacy UI with drag-and-drop reorganization, then iterated on permission and special-character paper cuts post-launch.",
  },
  {
    name: "Theme integration",
    desc: "KB templates now use CMS themes and brand-kit values, creating styling consistency across KB, blog and site.",
  },
  {
    name: "Migration design",
    desc: "An opt-in flow with beta acknowledgement, change-communication screens, feature-parity checks, and iterative updates from alpha/beta cohorts.",
  },
  {
    name: "System architecture mapping",
    desc: "Documented the legacy subsystems and mapped template-editor settings onto their new homes across themes, headers, footers and categories.",
  },
];

const stats = [
  {
    value: "Six figures",
    label:
      "in net-new ARR from customers activating the feature after upgrading to a top-tier plan (Mar–Sep 2023).",
  },
  {
    value: "13.6%",
    label: "activation rate — well ahead of the team's internal target.",
  },
  {
    value: ">90%",
    label: "positive customer satisfaction on post-launch feedback.",
  },
  {
    value: "760",
    label: "votes on the #1 community request this work finally resolved.",
  },
];

const outcomes = [
  {
    track: "Phase 1 · multiple knowledge bases",
    points: [
      "13.6% activation rate — well ahead of the team's internal target",
      "Six figures in net-new ARR after top-tier (Enterprise) upgrades",
      "Recently upgraded Enterprise accounts activate at a higher rate than new or existing ones — a clear upgrade driver",
      ">90% customer satisfaction on post-launch feedback",
    ],
  },
  {
    track: "Content platform · Phase 2",
    points: [
      "Modern editing — drag-and-drop, revision history, undo/redo and richer content modules on the new platform editor",
      "The Knowledge Base tool now uses the same theme system as websites and blogs",
      "Category drag-and-drop shipped and iterated on real feedback",
      "The Knowledge Base tool now automatically inherits future content-platform improvements",
    ],
  },
];

const broaderImpact = [
  "A headline initiative in the customer-service product's push to mature for mid-market customers.",
  "Also advanced the content platform's broader goal of bringing more products onto one shared system.",
  "The article-editor research directly shaped the roadmap for HubSpot's content-editor platform team.",
  "Established a documented content-platform adoption process for other HubSpot product teams.",
];

const lessons = [
  {
    tag: "What worked",
    name: "Phased strategy",
    desc: "Shipping multiple knowledge bases first built team trust, delivered immediate customer value, and bought time for the harder platform work.",
  },
  {
    tag: "What worked",
    name: "Research as a neutral decision tool",
    desc: "Concept testing turned a political stand-off into a grounded, user-led recommendation — and produced insights that benefited the whole content-platform org.",
  },
  {
    tag: "What worked",
    name: "De-risking through release strategy",
    desc: "The interim-editor compromise let us ship early, gather real feedback, and build iteratively without sacrificing the end-state vision.",
  },
  {
    tag: "What I’d change",
    name: "Map the emotion of migration earlier",
    desc: "Customers rely on the Knowledge Base tool daily; being asked to adopt a new version triggers real anxiety. I'd invest earlier in mapping the emotional journey of migration, not just the functional one.",
  },
  {
    tag: "What I’d change",
    name: "Align scope across teams sooner",
    desc: "Given how many teams were involved, I'd run more structured scope-alignment sessions up front to prevent downstream delays.",
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
              A maintenance-mode tool that had become the single largest
              source of complaints for HubSpot&apos;s customer-service
              product. As lead designer, I ran a
              two-phase initiative — ship support for multiple knowledge bases to
              unblock upmarket sales, then migrate the whole tool onto
              HubSpot&apos;s modern content platform.
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
              {beforeAfter.map((s) => (
                <figure key={s.tag} className="reveal">
                  <a
                    href={s.image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-xl border border-line bg-bg-raised shadow-sm transition-shadow hover:shadow-md"
                    aria-label={`${s.title} — open full-size screenshot`}
                  >
                    <Image
                      src={s.image}
                      alt={s.alt}
                      sizes="(min-width: 1152px) 540px, (min-width: 768px) 46vw, 100vw"
                      className="h-auto w-full"
                      placeholder="blur"
                    />
                  </a>
                  <figcaption className="mt-4">
                    <p className="eyebrow">{s.tag}</p>
                    <p className="mt-1.5 font-display text-lg font-medium tracking-tight text-ink">
                      {s.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-muted">
                      {s.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Landscape — where it sits, for readers new to HubSpot */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="The landscape" title="Where this sits" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              New to HubSpot? Here&apos;s where the Knowledge Base tool has
              lived — it moved twice before this case study even starts.
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
              Knowledge bases help businesses publish self-service content so
              customers can resolve issues without contacting support. HubSpot
              built the Knowledge Base tool in 2017 on a pre-platform
              infrastructure which
              drifted into maintenance mode in 2019. By 2022 it was generating
              more feedback than any other surface — and the trend was getting
              worse.
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
              </span>{" "}
              — the top deal-blocker for top-tier (Enterprise) accounts — while
              the Knowledge Base tool itself sat{" "}
              <span className="rounded bg-accent/15 px-1 text-accent-ink">
                decoupled from HubSpot&apos;s modern content platform
              </span>
              , making every fix slow and expensive.
            </p>
          </div>
        </section>

        {/* Strategic approach */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Strategy"
              title="Phasing a two-year problem into a two-phase delivery"
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              Two intertwined problems: customers couldn&apos;t create multiple
              knowledge bases, and the infrastructure was decoupled from the
              modern content platform. Tackling both at once would have been slow and risky.
              We worked on a phased strategy. Ship customer value now on legacy
              rails, and start scoping the harder platform migration in
              parallel as soon as the team had enough shared context to take
              it on.
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
                The core product trio — PM, engineering and design — was newly
                formed. Starting with a scoped, high-urgency problem built the
                working relationships and shared context we needed to begin
                scoping a multi-team platform migration in parallel, well
                before Phase 1 shipped — trust we drew on for the harder work
                that followed.
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
              As we prepared to migrate the Knowledge Base tool, a contentious
              question emerged:
              what should the article-editing experience look like? Stakeholders
              split hard — one camp wanted the editor to show full page context
              (header, footer, navigation); the other wanted a focused,
              content-only experience. Rather than let it stall the roadmap, I
              independently scoped and ran a moderated concept test to ground the
              decision in user needs.
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
              <p className="eyebrow reveal">Headline finding</p>
              <p className="reveal mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
                7 of 12
              </p>
              <p className="reveal mt-3 max-w-2xl text-base leading-7 text-ink/85">
                participants preferred the core-only editor — “simple,”
                “straightforward,” something that helped them “stay focused.”
                The minority who preferred the core-plus-shell editor tended to
                hold admin roles with header and footer access.
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
              <p className="eyebrow text-sage-ink">Why this mattered beyond the Knowledge Base tool</p>
              <p className="mt-3 text-sm leading-7 text-ink/85 md:text-base">
                This research didn&apos;t stay contained to the Knowledge Base
                tool. It fed directly into a top priority 2023 initiative for
                HubSpot&apos;s content editor platform team, clarifying
                technical gaps in their structured editor plan and focusing
                the team on higher impact features. It also broke the
                stakeholder deadlock that had stalled our own roadmap.
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
              Design split into two tracks: the multiple–knowledge base
              experience on legacy rails, and the end-to-end platform rebuild.
              The second required coordinating with five platform teams — themes,
              editor, structured content, publishing and DDC {/* TODO: confirm what DDC stands for */}
              — each with its own roadmap and design language.
            </p>

            <div className="reveal mt-10 rounded-2xl border border-line bg-bg p-6 md:p-8">
              <p className="eyebrow">Track 01 · Multiple knowledge bases on legacy rails</p>
              <p className="mt-3 text-sm leading-7 text-ink/85 md:text-base">
                I leveraged proven patterns from the blog tool — which already
                supported multiple blogs — so customers who&apos;d used that
                model before could apply the same mental model here: consistent
                navigation, naming and setup flow instead of a pattern they had
                to learn from scratch. Each knowledge base got its own domain,
                branding, categories, content and analytics, scoped to 5 per
                account and 2,000 articles each based on legacy performance
                limits.
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
              <p className="eyebrow text-sage-ink">The editor decision · standing up for users, brokering the room</p>
              <p className="mt-4 text-sm leading-7 text-ink/85 md:text-base">
                The research gave me a clear recommendation: optimize the editor
                for core article creation. I delivered it in a tense read-out
                where one side of the debate was going to lose its preferred
                outcome. The evidence was strong, and I held the line for users.
              </p>
              <p className="mt-4 text-sm leading-7 text-ink/85 md:text-base">
                But holding the line isn&apos;t the same as running over the room.
                I used the research to broker a release-strategy compromise: ship
                an <span className="font-medium text-ink">interim editor</span> to
                a small group of low-risk alpha users immediately — so we could
                gather real feedback — and{" "}
                <span className="font-medium text-ink">fast-replace</span> it with
                the full platform editor for every release after. That de-risked
                the launch, preserved momentum, and gave the dissenting camp a
                path where their concerns could still be answered in the data.
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
            <SectionHead eyebrow="Outcomes" title="Outcomes that beat every target we set" />

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
              <p className="eyebrow">Post-launch customer feedback</p>
              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                <blockquote className="font-display text-lg font-medium leading-snug tracking-tight text-ink md:text-xl">
                  “Super easy to do! Took less than 2 minutes to complete.”
                </blockquote>
                <blockquote className="font-display text-lg font-medium leading-snug tracking-tight text-ink md:text-xl">
                  “I&apos;ve been waiting for this feature, and it&apos;s super
                  easy to use — thank you.”
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
              title="What I took away as a senior designer"
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
              Together, these two initiatives are the work that earned my
              promotion from Product Designer to Senior Product Designer.
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
