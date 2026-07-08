import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import RevealScript from "@/components/RevealScript";
import { site } from "@/lib/content";

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY — Knowledge Base
// All copy for this page lives right here so it's easy to edit in one place.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Knowledge Base · Case study · ${site.name}`,
  description:
    "Modernizing HubSpot's Knowledge Base. A two-phase initiative — ship support for multiple knowledge bases to unblock upmarket sales, then migrate the whole tool onto HubSpot's content platform.",
};

const meta = [
  { label: "Role", value: "Lead product designer · end-to-end" },
  { label: "Team", value: "Customer service & content platform" },
  { label: "Timeline", value: "2022–2024 · two-phase delivery" },
  { label: "Priority", value: "Top company priority (P0)" },
];

// Customer- and business-side framing of the same P0 problem.
const problemViews = [
  {
    label: "The customer view",
    points: [
      "40%+ of all feedback on HubSpot's customer-service product was about the Knowledge Base tool — up from 30% the prior quarter",
      "The community request for multiple knowledge bases had 760 votes — the #1 unmet ask in the customer-service product",
      "Customers bought second HubSpot portals or switched to competitors as a workaround",
      "Branding, categorization and customization were severely limited",
    ],
  },
  {
    label: "The business view",
    points: [
      "Support for multiple knowledge bases was the #1 deal-blocker for top-tier (Enterprise) accounts",
      "Q3 2022 alone: $9,444 MRR lost to the missing feature",
      "$450K+ cumulative missed revenue since 2018 — a conservative estimate",
      "Platform improvements didn't flow through, so every fix was expensive",
    ],
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
    window: "2023",
    name: "Platform migration",
    desc: "Rebuild the Knowledge Base tool on HubSpot's content data platform, adopt the scalable editor, integrate CMS themes, and design the migration path for existing customers onto the new system.",
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
    participants: "697-vote thread and related requests",
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
    who: "Tiffany · HubSpot Knowledge Base user",
  },
  {
    quote:
      "I definitely lean towards the core-focused one — I was confident in there. In the other, I was searching around a lot and it was hard to find what I needed.",
    who: "Jennifer · competitor-tool user",
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
    value: "$169,675",
    label:
      "net-new ARR from customers activating the feature after upgrading to a top-tier plan (Mar–Sep 2023).",
  },
  {
    value: "13.6%",
    label: "activation rate — beat the Q2 2023 goal of 8.6% by 58%.",
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
      "13.6% activation rate — beat the 8.6% goal by 58%",
      "$169,675 in net-new ARR after top-tier (Enterprise) upgrades",
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
  "A headline piece of the customer-service product's 2023 strategy — “maturing the product for the mid-market.”",
  "Simultaneously served the website/CMS product's 2023 goal to grow its content platform.",
  "The article-editor research fed the top-priority 2023 roadmap for HubSpot's content-editor platform team.",
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

// Abstract avatar mark for the concept-test participant — geometric, not a
// fabricated likeness, in the same generative style as the project cover art.
function ConceptTesterAvatar() {
  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 200 200"
        className="h-44 w-44 md:h-52 md:w-52"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="100" fill="var(--mist)" />
        <path
          d="M40 168c6-34 30-52 60-52s54 18 60 52"
          fill="var(--ink)"
          opacity="0.14"
        />
        <circle cx="100" cy="82" r="36" fill="var(--ink)" opacity="0.16" />
        <rect x="132" y="34" width="22" height="22" rx="5" fill="var(--sage-ink)" />
      </svg>
      <p className="eyebrow mt-4 text-sage-ink">Concept-test participant</p>
    </div>
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
          <div className="mx-auto max-w-4xl px-6 pb-14 pt-16 md:px-10 md:pb-20 md:pt-24">
            <p className="eyebrow reveal">
              Case study · Modernizing HubSpot&apos;s Knowledge Base
            </p>
            <h1 className="reveal mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Knowledge Base<span className="text-accent-ink">.</span>
            </h1>
            <p className="reveal mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              A maintenance-mode tool generating 40%+ of the complaints for
              HubSpot&apos;s customer-service product. As lead designer, I ran a
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
              modern content platform. Tackling both at once would have been slow and risky. I
              advocated for a phased strategy — ship customer value now on legacy
              rails, then migrate once the team was battle-tested.
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
                working relationships and shared context we needed before taking
                on a multi-team platform migration. Senior
                design is as much about sequencing an org&apos;s energy as it is
                about designing interfaces.
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

            {/* Headline finding + participant voices */}
            <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-7">
                <p className="eyebrow reveal">Headline finding</p>
                <p className="reveal mt-4 font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
                  7 of 12
                </p>
                <p className="reveal mt-3 max-w-md text-base leading-7 text-ink/85">
                  participants preferred the core-only editor — “simple,”
                  “straightforward,” something that helped them “stay focused.”
                  The minority who preferred the core-plus-shell editor tended to
                  hold admin roles with header and footer access.
                </p>

                <div className="mt-8 space-y-6">
                  {testQuotes.map((q) => (
                    <figure
                      key={q.who}
                      className="reveal border-l-2 border-accent pl-6"
                    >
                      <blockquote className="font-display text-lg font-medium leading-snug tracking-tight text-ink md:text-xl">
                        “{q.quote}”
                      </blockquote>
                      <figcaption className="mt-3 text-sm text-muted">
                        {q.who} · concept-test participant
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="reveal flex items-start justify-center md:col-span-5">
                <ConceptTesterAvatar />
              </div>
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
                The article-editor research shaped the requirements for
                HubSpot&apos;s content-editor platform team, directly feeding a
                top-priority 2023 initiative. It clarified technical gaps for the
                structured-editor plan, focused the team on higher-impact
                features, and — critically — broke the stakeholder deadlock.
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
              editor, structured content and publishing — each with its own
              roadmap and design language.
            </p>

            <div className="reveal mt-10 rounded-2xl border border-line bg-bg p-6 md:p-8">
              <p className="eyebrow">Track 01 · Multiple knowledge bases on legacy rails</p>
              <p className="mt-3 text-sm leading-7 text-ink/85 md:text-base">
                I leveraged proven patterns from the blog tool — which already
                supported multiple blogs — to deliver a familiar experience with
                minimal engineering lift. Each knowledge base got its own domain,
                branding, categories, content and analytics, scoped to 5 per
                account and 2,000 articles each based on legacy performance
                limits.
              </p>
            </div>

            <div className="mt-6">
              <p className="eyebrow reveal">Track 02 · KBv3 on the content platform</p>
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                {designAreas.map((d) => (
                  <div key={d.name} className="reveal border-t border-line pt-5">
                    <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink">
                      {d.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The editor decision */}
            <div className="reveal mt-12 rounded-2xl border border-line bg-bg p-6 md:p-8">
              <p className="eyebrow">The editor decision · standing up for users, brokering the room</p>
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
              This initiative is the work that earned my promotion from Product
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
