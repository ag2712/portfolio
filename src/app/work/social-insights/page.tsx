import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import RevealScript from "@/components/RevealScript";
import { site } from "@/lib/content";

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY — Social Insights
// All copy for this page lives right here so it's easy to edit in one place.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Social Insights — Case study · ${site.name}`,
  description:
    "Turning Reddit conversations into brand insights marketers can act on — a 0→1 product shipped to public beta inside HubSpot’s Marketing Hub.",
};

const meta = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Team", value: "Brand Awareness · Marketing Hub" },
  { label: "Timeline", value: "2026 · mid-build → public beta" },
  { label: "Platform", value: "HubSpot" },
];

const stats = [
  {
    value: "71%",
    label:
      "positive sentiment on the prototype across interview tasks — the three-step onboarding scored highest with 14 marketing leaders across 12 businesses, mid-build.",
  },
  {
    value: "1,679",
    label: "HubSpot customers ungated to the public beta.",
  },
  {
    value: "32%",
    label: "of users complete onboarding and set the tool up.",
  },
];

const ecosystem = [
  {
    level: "Level 01 · Platform",
    name: "HubSpot",
    desc: "Marketing, sales, service, content, data and commerce teams all work from one shared customer record.",
  },
  {
    level: "Level 02 · Hub",
    name: "Marketing Hub",
    desc: "Where marketers plan campaigns, run social tasks, and measure how their brand is performing.",
  },
  {
    level: "Level 03 · Product area",
    name: "Brand Awareness",
    desc: "A new set of products focused on how a brand is seen, measured and grown.",
  },
  {
    level: "Level 04 · This work",
    name: "Social Insights",
    desc: "My team — turning Reddit conversations into brand insights marketers can act on.",
    highlight: true,
  },
];

const approach = [
  {
    step: "01",
    name: "Frame",
    desc: "Zoom out before zooming in. I map the ecosystem and align with PM and engineering on the real problem before any pixels.",
  },
  {
    step: "02",
    name: "Explore",
    desc: "Prototype several directions fast with AI tools, then pressure-test them with the team early — so we commit on evidence, not opinion.",
  },
  {
    step: "03",
    name: "Validate",
    desc: "Put work in front of real users mid-build. Weekly build–share–refine loops keep design, engineering and leadership moving as one.",
  },
  {
    step: "04",
    name: "Document",
    desc: "Turn unknowns into owned, named trade-offs. Every decision and its rationale is written down, so the team holds steady through change.",
  },
];

const competitors = [
  {
    category: "Social listening suites",
    examples: "Brandwatch, Sprout, Meltwater",
    strength: "Broad cross-channel coverage. Mature dashboards and alerting.",
    gap: "Built for volume, not synthesis. Marketers get feeds to scan, not patterns they can act on.",
  },
  {
    category: "Reddit-native scrapers",
    examples: "Brand24, smaller scrapers",
    strength: "Deep on Reddit. Cheap to run.",
    gap: "Sit outside the marketer’s daily tools. No bridge from a thread to a brand decision.",
  },
  {
    category: "Survey & NPS tools",
    examples: "Qualtrics, in-product surveys",
    strength: "Structured, comparable signal. Good for tracking change over time.",
    gap: "Captures what people will say — not what they actually think when no-one is watching.",
  },
  {
    category: "Social Insights",
    examples: "Where we fit",
    strength: "Reddit-deep, inside the Marketing Hub — where marketers already live.",
    gap: "Patterns and themes, not feeds — tied to the workflow marketers already use.",
    highlight: true,
  },
];

const aiPartner = [
  {
    n: "01",
    name: "Rapid prototyping",
    desc: "Built prototypes to test three tool entry-points in days, not weeks — so leadership could see the product before anything was committed in Figma. More options explored, less time lost.",
    tools: "Lovable · Claude · Conductor",
  },
  {
    n: "02",
    name: "Research artefacts",
    desc: "Synthesised interview notes into themes, drafted journey artefacts, and shaped the contingency-planning doc. Faster turnaround on the work that usually slows a project down.",
    tools: "Glean · Claude · NotebookLM",
  },
  {
    n: "03",
    name: "Pushing PRs",
    desc: "Wrote front-end code with AI assistance and pushed small PRs directly. This tightened handoff loops and let me prototype real interactions, not just static screens.",
    tools: "GitHub · Claude · Conductor",
  },
];

const craft = [
  {
    name: "Worked within HubSpot Canvas",
    desc: "Chose to extend existing patterns rather than reinvent. Every component decision had to earn its place against the system.",
  },
  {
    name: "Three-step onboarding",
    desc: "Compressed a longer setup down to brand and domain only. Tested as the strongest entry flow in interviews.",
  },
  {
    name: "Insight cards, not feeds",
    desc: "Designed the report unit as a scannable summary with named themes, not a stream of posts. Less to read, more to decide on.",
  },
];

const nextMoves = [
  {
    n: "01",
    name: "Ask insights a question",
    desc: "A conversational agent on the dashboard — “What should I do today?”, “Why is sentiment dropping?” — answering in plain language, with the source posts attached.",
  },
  {
    n: "02",
    name: "Turn insights into next steps",
    desc: "When a marketer acts on a finding, an agent drafts the reply, social post or blog. They review and approve, with room to edit — never starting from a blank page.",
  },
  {
    n: "03",
    name: "Proactive alerts",
    desc: "Notify users of significant sentiment shifts, competitors going viral on tracked channels, and high-impact posts that need a time-sensitive reply.",
  },
];

const challenges = [
  {
    label: "Challenge 01 · Channel",
    name: "Reddit only at launch",
    desc: "Multi-channel was documented as the next investment. We focused on delivering deep, validated value through a single channel first — rather than thin coverage across many.",
    tradeoff: "Narrower scope, deeper validation on one surface.",
  },
  {
    label: "Challenge 02 · Documentation",
    name: "Friction mapped, not hidden",
    desc: "Every issue created by placing the tool inside the social space came with a resolution plan and a named owner. Unknowns became documented, owned trade-offs — never surprises at launch.",
    tradeoff: "More upfront documentation, no surprises at launch.",
  },
];

const outcomes = [
  {
    value: "14",
    lead: "Marketing leaders interviewed across 12 businesses",
    note: "Mid-build validation coverage",
  },
  {
    value: "3",
    lead: "Strategy pivots navigated without resetting engineering",
    note: "Parallel design tracks held the line",
  },
  {
    value: "71%",
    lead: "Positive sentiment on the prototype across tasks",
    note: "Three-step onboarding scored highest",
  },
  {
    value: "5",
    lead: "Reddit reports shipped in the public beta",
    note: "Day-one value for pilot users",
  },
];

const lessons = [
  {
    tag: "What worked",
    name: "Friction documented becomes planned",
    desc: "Documenting friction before launch turned unknowns into owned, planned trade-offs. The team had a shared map of known risks and a named owner for each follow-up.",
  },
  {
    tag: "What worked",
    name: "Parallel tracks survive pivots",
    desc: "Parallel design tracks through three strategy pivots meant we never started from scratch when direction changed. Build progress survived the uncertainty.",
  },
  {
    tag: "What I’d change",
    name: "Sell the vision earlier",
    desc: "A future-state vision artefact alongside the tactical sprint work would have helped leadership see the why before the what. And I’d run user interviews earlier.",
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

export default function SocialInsightsCaseStudy() {
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
            <p className="eyebrow reveal">Case study · Reddit-powered brand visibility</p>
            <h1 className="reveal mt-5 font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Social Insights<span className="text-accent-ink">.</span>
            </h1>
            <p className="reveal mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              Turning Reddit conversations into brand insights marketers can act
              on. Currently, validated and shipped to a public beta inside
              HubSpot’s Marketing Hub.
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

        {/* Impact at a glance */}
        <section className="border-y border-line bg-bg-raised/50 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <p className="eyebrow reveal">Impact at a glance</p>
            <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.value} className="reveal">
                  <div className="font-display text-5xl font-medium tracking-tight text-ink">
                    {s.value}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Context — where it sits */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="The landscape" title="Where this sits" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              New to HubSpot? Here’s the ecosystem this work lives inside — each
              step narrows the focus.
            </p>
            <div className="mt-10 space-y-3">
              {ecosystem.map((e, i) => (
                <div
                  key={e.name}
                  className={`reveal rounded-2xl border p-5 md:p-6 ${
                    e.highlight
                      ? "border-sage-ink/30 bg-sage/60"
                      : "border-line bg-bg-raised/40"
                  }`}
                  style={{ marginLeft: `${i * 20}px` }}
                >
                  <p className="eyebrow">{e.level}</p>
                  <h3 className="mt-1.5 font-display text-xl font-medium tracking-tight text-ink">
                    {e.name}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brief + problem + persona */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="The brief" title="The brief" />
            <p className="reveal mt-6 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              Help HubSpot’s strategic marketers turn Reddit conversations into
              confident decisions. Not just another social listening tool.
            </p>

            <div className="reveal mt-10 max-w-2xl">
              <p className="eyebrow">The problem</p>
              <p className="mt-4 text-lg leading-8 text-ink/85">
                Marketers struggle to understand how customers feel about their
                brand: insights are scattered across tools and lack context —
                leaving them reactive, and unsure of their impact.
              </p>
            </div>

            <figure className="reveal mt-10 border-l-2 border-accent pl-6 md:pl-8">
              <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
                “Reddit is the source of truth. Surveys give you what people will
                say — Reddit gives you what they actually think.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                — Marketing Director, B2B SaaS · validation interview, March 2026
              </figcaption>
            </figure>

            <div className="reveal mt-14 max-w-2xl">
              <p className="eyebrow">Who it’s for — the strategy-first marketer</p>
              <p className="mt-4 text-base leading-7 text-muted">
                Marketers who lead brand strategy at mid-market B2B and DTC
                companies. They synthesise signals from social, surveys and
                support channels — and want reports of patterns to take to
                leadership, not more feeds to scan.
              </p>
            </div>
          </div>
        </section>

        {/* Research — competitive landscape */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Research"
              title="The competitive landscape"
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              “Performance measurement &amp; optimization” was the second
              most-struggled-with area of brand tasks. Here’s how existing tools
              approach it — and where Social Insights fits.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-line">
              {competitors.map((c, i) => (
                <div
                  key={c.category}
                  className={`reveal grid grid-cols-1 gap-4 p-5 md:grid-cols-12 md:gap-6 md:p-6 ${
                    i > 0 ? "border-t border-line" : ""
                  } ${c.highlight ? "bg-sage/50" : ""}`}
                >
                  <div className="md:col-span-3">
                    <h3 className="font-display text-lg font-medium tracking-tight text-ink">
                      {c.category}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{c.examples}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="eyebrow">Strength</p>
                    <p className="mt-1.5 text-sm leading-6 text-ink/80">
                      {c.strength}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="eyebrow">
                      {c.highlight ? "Why it works" : "Gap for the strategy-first marketer"}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-ink/80">{c.gap}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Approach" title="How I work" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              Four moves I make on every project — design craft and the human
              work of keeping a team aligned.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {approach.map((a) => (
                <div key={a.step} className="reveal border-t border-line pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-lg text-accent-ink">
                      {a.step}
                    </span>
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                      {a.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI as a working partner */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Process" title="AI was a working partner" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              I’d use AI to run the legwork and spend the saved time on judgement.
              The thinking stays mine; the legwork goes on.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {aiPartner.map((a) => (
                <div key={a.n} className="reveal">
                  <span className="font-display text-lg text-accent-ink">
                    {a.n}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-medium tracking-tight text-ink">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{a.desc}</p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-accent-ink">
                    {a.tools}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The system, shipped */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Craft" title="The system, shipped" />
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {craft.map((c) => (
                <div key={c.name} className="reveal border-t border-line pt-5">
                  <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where it goes next */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Where it goes next" title="An AI-native take" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              The beta surfaces brand-relevant data. The next version should feel
              like a teammate — three agentic moves I’m exploring, alongside a
              broader rethink of the Social home experience now in user testing.
            </p>
            <div className="mt-10 space-y-6">
              {nextMoves.map((m) => (
                <div
                  key={m.n}
                  className="reveal flex flex-col gap-2 border-t border-line pt-5 md:flex-row md:gap-8"
                >
                  <div className="flex items-baseline gap-3 md:w-1/3">
                    <span className="font-display text-lg text-accent-ink">
                      {m.n}
                    </span>
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                      {m.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-muted md:w-2/3">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & tradeoffs */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Challenges" title="Challenges &amp; trade-offs" />
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {challenges.map((c) => (
                <div
                  key={c.name}
                  className="reveal rounded-2xl border border-line bg-bg p-6"
                >
                  <p className="eyebrow">{c.label}</p>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{c.desc}</p>
                  <p className="mt-4 border-t border-line pt-4 text-sm font-medium text-accent-ink">
                    Trade-off · {c.tradeoff}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Outcomes" title="What it added up to" />
            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
              {outcomes.map((o) => (
                <div key={o.lead} className="reveal border-t border-line pt-6">
                  <div className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
                    {o.value}
                  </div>
                  <p className="mt-3 text-base leading-7 text-ink/85">{o.lead}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {o.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Reflection" title="Lessons &amp; reflections" />
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

            <div className="reveal mt-16">
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
