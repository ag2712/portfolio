import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import RevealScript from "@/components/RevealScript";
import { site } from "@/lib/content";
import researchSynthesisBoard from "./research-synthesis-board.png";
import socialInsightsDashboard from "./social-insights-dashboard.png";
import marketingLeaderIllustration from "./marketing-leader-illustration.png";

// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDY — Social Insights
// All copy for this page lives right here so it's easy to edit in one place.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: `Social Insights · Case study · ${site.name}`,
  description:
    "Turning Reddit conversations into brand insights marketers can act on. A 0→1 product shipped to public beta inside HubSpot’s Marketing Hub.",
};

const meta = [
  { label: "Role", value: "Senior Product Designer · sole designer" },
  { label: "Team", value: "Marketing analytics · 0→1 product" },
  { label: "Timeline", value: "2026 · concept to public beta" },
  { label: "Priority", value: "Strategic 0→1 bet" },
];

const stats = [
  {
    value: "71%",
    label:
      "positive sentiment on the prototype across interview tasks. The three-step onboarding scored highest, tested with 14 marketing leaders across 12 businesses mid-build.",
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
    desc: "My team. We turn Reddit conversations into brand insights marketers can act on.",
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
    desc: "Prototype several directions fast with AI tools, then pressure-test them with the team early so we commit on evidence instead of opinion.",
  },
  {
    step: "03",
    name: "Validate",
    desc: "Put work in front of real users mid-build. Weekly loops of build, share and refine keep design, engineering and leadership moving together.",
  },
  {
    step: "04",
    name: "Document",
    desc: "Turn unknowns into trade-offs the team owns and names. Every decision and its rationale gets written down, so we hold steady when direction shifts.",
  },
];

const competitors = [
  {
    category: "Social listening suites",
    examples: "Brandwatch, Sprout, Meltwater",
    strength: "Broad cross-channel coverage. Mature dashboards and alerting.",
    gap: "Built for volume rather than synthesis. Marketers get feeds to scan when what they need is patterns they can act on.",
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
    gap: "Captures what people will say, not what they actually think when no one is watching.",
  },
];

// Pulled out of the comparison table — this is the answer, not another competitor.
const socialInsights = {
  strength:
    "Reddit-deep, and built inside the Marketing Hub where marketers already live.",
  why: "Patterns and themes instead of feeds, tied to the workflow marketers already use.",
};

// Design-process timeline. Steps 01–03 are the weekly loop; 04 is the pre-launch phase.
const processSteps = [
  { n: "01", name: "Build", sub: "Build the increment" },
  { n: "02", name: "Share", sub: "Loom walkthrough" },
  { n: "03", name: "Refine", sub: "Act on feedback" },
  { n: "04", name: "Friction analysis", sub: "Before launch" },
];

// Read from the brand-tasks survey chart. Order follows the brand-building
// lifecycle; values are the reported struggle count per area (max 31).
const brandTasks = [
  {
    name: "Market research & analysis",
    detail: "Competitor analysis, target audience research, market opportunity analysis",
    value: 26,
  },
  {
    name: "Core brand strategy",
    detail: "Purpose, vision & mission, values, positioning, multi-brand strategy",
    value: 16,
  },
  {
    name: "Brand identity",
    detail: "Name, tagline, logo, color palette, typography, images & iconography, brand voice & tone",
    value: 15,
  },
  {
    name: "Messaging & storytelling",
    detail: "Key messaging pillars, brand story, value proposition",
    value: 18,
  },
  {
    name: "Brand governance & enablement",
    detail: "Brand guidelines, internal training, asset management",
    value: 31,
  },
  {
    name: "Communications",
    detail: "Content, ads or campaigns, public relations, social media management",
    value: 17,
  },
  {
    name: "Performance measurement & optimization",
    detail: "Brand tracking studies, social listening, sentiment analysis, analytics, brand audits, reputation management",
    value: 29,
    highlight: true,
  },
];

// X-axis for the brand-tasks chart; headroom above the tallest bar (31).
const TASK_AXIS_MAX = 32;
const taskAxisTicks = [0, 5, 10, 15, 20, 25, 30];

const aiPartner = [
  {
    n: "01",
    name: "Rapid prototyping",
    desc: "Built prototypes to test three tool entry points in days rather than weeks, so leadership could see the product before anything was committed in Figma. That let us explore more directions without burning time.",
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
    desc: "Wrote front-end code with AI assistance and pushed small PRs directly. This tightened handoff loops and let me prototype real interactions rather than static screens.",
    tools: "GitHub · Claude · Conductor",
  },
];

const craft = [
  {
    name: "Built on HubSpot's design system",
    desc: "Chose to extend existing patterns rather than reinvent. Every component decision had to earn its place against the system.",
  },
  {
    name: "Three-step onboarding",
    desc: "Compressed a longer setup down to brand and domain only. Tested as the strongest entry flow in interviews.",
  },
  {
    name: "Insight cards, not feeds",
    desc: "Designed the report unit as a scannable summary with named themes instead of a stream of posts, so there’s less to read and a faster decision at the end.",
  },
];

const nextMoves = [
  {
    n: "01",
    name: "Ask insights a question",
    desc: "A conversational agent on the dashboard that answers questions like “What should I do today?” or “Why is sentiment dropping?” in plain language, with the source posts attached.",
  },
  {
    n: "02",
    name: "Turn insights into next steps",
    desc: "When a marketer acts on a finding, an agent drafts the reply, social post or blog. They review, edit and approve, so they’re never starting from a blank page.",
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
    desc: "Multi-channel was documented as the next investment. We focused on delivering deep, validated value through a single channel first rather than thin coverage across many.",
    tradeoff: "Narrower scope, deeper validation on one surface.",
  },
  {
    label: "Challenge 02 · Documentation",
    name: "Friction mapped, not hidden",
    desc: "Every issue created by placing the tool inside the social space came with a resolution plan and a named owner, so unknowns turned into documented trade-offs instead of launch-day surprises.",
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

// Illustrated persona for the validation quote — a representative figure,
// not a likeness of the interviewee. Sits as a bust inside the sage circle.
function MarketingLeaderAvatar() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-44 w-44 overflow-hidden rounded-full bg-sage md:h-52 md:w-52">
        <Image
          src={marketingLeaderIllustration}
          alt=""
          sizes="(min-width: 768px) 208px, 176px"
          className="absolute bottom-0 left-1/2 h-auto w-[70%] -translate-x-1/2 translate-y-[8%]"
        />
      </div>
      <p className="eyebrow mt-4 text-sage-ink">Marketing leader</p>
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

            <figure className="reveal mt-12 md:mt-16">
              <Image
                src={socialInsightsDashboard}
                alt="The Social Insights dashboard inside HubSpot’s Social tool. Headline metrics for total mentions, engagement and share of voice sit above a set of tracked Reddit conversations, each shown as a card with a sentiment tag, matched keywords and a reply recommendation."
                sizes="(max-width: 896px) 100vw, 816px"
                placeholder="blur"
                loading="eager"
                fetchPriority="high"
                className="h-auto w-full rounded-2xl border border-line shadow-[0_24px_48px_-24px_rgba(24,24,27,0.25)]"
              />
            </figure>
          </div>
        </section>

        {/* Context — where it sits */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="The landscape" title="Where this sits" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              New to HubSpot? Here’s the ecosystem this work lives inside. Each
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
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {e.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brief */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <p className="eyebrow reveal">The brief</p>
            <p className="reveal mt-4 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              Help HubSpot’s strategic marketers turn Reddit conversations into
              confident decisions. The goal was a decision tool, not another
              social listening feed.
            </p>
          </div>
        </section>

        {/* The problem */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <p className="eyebrow reveal">The problem</p>
            <p className="reveal mt-5 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
              Users{" "}
              <span className="rounded bg-accent/15 px-1 text-accent-ink">
                struggle to understand their customers’ sentiment
              </span>{" "}
              about their brand because...{" "}
              <span className="rounded bg-accent/15 px-1 text-accent-ink">
                insights are scattered across tools
              </span>{" "}
              and lack context, leaving them reactive and unsure of their
              impact.
            </p>
          </div>
        </section>

        {/* Who it's for — persona + validation quote */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-7">
                <SectionHead eyebrow="Who it’s for" title="The strategy-first marketer" />
                <p className="reveal mt-5 text-base leading-7 text-muted">
                  Marketers who lead brand strategy at mid-market B2B and DTC
                  companies. They synthesise signals from social, surveys and
                  support channels, and want reports of patterns to take to
                  leadership rather than more feeds to scan.
                </p>

                <figure className="reveal mt-8 border-l-2 border-accent pl-6 md:pl-8">
                  <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
                    “Reddit is the source of truth. Surveys give you what
                    people will say. Reddit gives you what they actually
                    think.”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted">
                    Marketing Director, B2B SaaS · validation interview, March
                    2026
                  </figcaption>
                </figure>
              </div>

              <div className="reveal flex items-center justify-center md:col-span-5">
                <MarketingLeaderAvatar />
              </div>
            </div>
          </div>
        </section>

        {/* Research — where marketers struggle */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Research"
              title="The hardest brand tasks"
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              A large-scale, brand-focused survey surfaced that{" "}
              <span className="rounded bg-accent/15 px-1 text-accent-ink">
                “Performance measurement &amp; optimization” ranked second
              </span>{" "}
              among the top brand tasks marketers struggle with.
            </p>

            <figure className="reveal mt-10">
              <figcaption className="eyebrow">
                Struggle across brand-building tasks
              </figcaption>

              <div className="relative mt-6">
                {/* Vertical gridlines — plot column only, md+ */}
                <div
                  className="pointer-events-none absolute inset-0 z-0 hidden md:block"
                  aria-hidden="true"
                >
                  <div className="absolute inset-y-0 left-[calc(15rem+1.5rem)] right-0">
                    {taskAxisTicks.map((v) => (
                      <span
                        key={v}
                        className="absolute inset-y-0 w-px bg-line"
                        style={{ left: `${(v / TASK_AXIS_MAX) * 100}%` }}
                      />
                    ))}
                  </div>
                </div>

                <ul className="relative z-10 space-y-5">
                  {brandTasks.map((t) => (
                    <li
                      key={t.name}
                      className="grid grid-cols-1 gap-y-2 md:grid-cols-[15rem_1fr] md:items-center md:gap-x-6"
                    >
                      <div className="md:text-right">
                        <p
                          className={`text-sm font-medium leading-snug ${
                            t.highlight ? "text-accent-ink" : "text-ink"
                          }`}
                        >
                          {t.name}
                        </p>
                        <p className="mt-0.5 text-xs leading-5 text-muted">
                          {t.detail}
                        </p>
                      </div>
                      <div
                        className={`h-2.5 rounded-full ${
                          t.highlight ? "bg-accent" : "bg-ink/25"
                        }`}
                        style={{ width: `${(t.value / TASK_AXIS_MAX) * 100}%` }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* X-axis */}
              <div className="mt-3 grid grid-cols-1 md:grid-cols-[15rem_1fr] md:gap-x-6">
                <div className="hidden md:block" />
                <div className="relative h-4">
                  {taskAxisTicks.map((v) => (
                    <span
                      key={v}
                      className="absolute -translate-x-1/2 text-[11px] tabular-nums text-muted"
                      style={{ left: `${(v / TASK_AXIS_MAX) * 100}%` }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

            </figure>

            <figure className="reveal mt-16">
              <figcaption className="eyebrow">
                Interview synthesis
              </figcaption>
              <Image
                src={researchSynthesisBoard}
                alt="Affinity board of six research findings from 14 interviews across 12 businesses: Reddit is trusted as a source of truth; monitoring today is manual and overwhelming; multi-platform coverage is expected; action matters more than raw data; competitive intel is the top use case; reports give insights weight. Participant notes are blurred for confidentiality."
                sizes="(max-width: 896px) 100vw, 816px"
                placeholder="blur"
                className="mt-6 h-auto w-full rounded-2xl border border-line"
              />
            </figure>
          </div>
        </section>

        {/* Competitive landscape */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="The market"
              title="The competitive landscape"
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              Before designing, I mapped the tools marketers already reach for,
              grouped by their strength and by where they leave the
              strategy-first marketer short. Each covers part of the job, but
              none turns a Reddit thread into a decision marketing leaders can
              act on.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-line">
              {competitors.map((c, i) => (
                <div
                  key={c.category}
                  className={`reveal grid grid-cols-1 gap-4 p-5 md:grid-cols-12 md:gap-6 md:p-6 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
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
                    <p className="eyebrow">Gap for the strategy-first marketer</p>
                    <p className="mt-1.5 text-sm leading-6 text-ink/80">{c.gap}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Insights — pulled out as the answer, not a table row */}
            <div className="reveal mt-6 rounded-2xl border border-sage-ink/30 bg-sage/60 p-6 md:p-8">
              <p className="eyebrow text-sage-ink">Where we fit</p>
              <h3 className="mt-2 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                Social Insights
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <div>
                  <p className="eyebrow text-sage-ink">Strength</p>
                  <p className="mt-1.5 text-sm leading-6 text-ink/85">
                    {socialInsights.strength}
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-sage-ink">Why it works</p>
                  <p className="mt-1.5 text-sm leading-6 text-ink/85">
                    {socialInsights.why}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-line bg-bg-raised/50 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Approach" title="How I work" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              Four moves I make on every project, spanning design craft and the
              human work of keeping a team aligned.
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

        {/* Design process — iterate, validate, map friction */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead
              eyebrow="Design process"
              title="Iterate, validate, map friction."
            />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              Weekly build, share and refine cycles with Loom walkthroughs, plus
              14 user interviews mid-build. Approaching launch, a friction
              analysis turned unknowns into owned trade-offs, each with a plan
              for after the public beta.
            </p>

            {/* Desktop timeline */}
            <div className="reveal mt-16 hidden md:block">
              <div className="relative">
                {/* Annotations */}
                <div className="relative h-12">
                  {/* Repeat weekly — loop bracket over 01–03 */}
                  <div className="absolute bottom-0 left-7 right-[calc((100%_+_1.75rem)/3)] top-3 rounded-t-2xl border-x border-t border-dashed border-ink/40" />
                  <div className="absolute left-[calc(1.75rem_+_(100%_-_3.5rem)/3)] top-0 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-ink/50 bg-bg px-3 py-1 text-xs font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    Repeat weekly
                  </div>
                  {/* Approaching launch — connector to 04 */}
                  <div className="absolute bottom-0 right-7 top-3 w-px border-l border-dashed border-ink/40" />
                  <div className="absolute right-0 top-0 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-ink/50 bg-bg px-3 py-1 text-xs font-semibold text-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                    Approaching launch
                  </div>
                </div>

                {/* Track: line + nodes */}
                <div className="relative flex items-center justify-between">
                  <div className="absolute left-7 right-7 top-1/2 h-0.5 -translate-y-1/2 bg-ink" />
                  {processSteps.map((s) => (
                    <div
                      key={s.n}
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full font-display text-sm text-bg-raised ${
                        s.n === "04" ? "bg-accent" : "bg-ink"
                      }`}
                    >
                      {s.n}
                    </div>
                  ))}
                </div>

                {/* Labels */}
                <div className="relative mt-4 h-11">
                  {processSteps.map((s, i) => {
                    const isFirst = i === 0;
                    const isLast = i === processSteps.length - 1;
                    return (
                      <div
                        key={s.n}
                        className={`absolute top-0 whitespace-nowrap ${
                          isFirst
                            ? "left-0 text-left"
                            : isLast
                              ? "right-0 text-right"
                              : "-translate-x-1/2 text-center"
                        }`}
                        style={
                          isFirst || isLast
                            ? undefined
                            : { left: `calc(1.75rem + ${i} * (100% - 3.5rem) / 3)` }
                        }
                      >
                        <p className="font-display text-base font-medium text-ink">
                          {s.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted">{s.sub}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile timeline */}
            <ol className="reveal mt-10 md:hidden">
              {processSteps.map((s, i) => (
                <li key={s.n} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-medium text-bg-raised ${
                        s.n === "04" ? "bg-accent" : "bg-ink"
                      }`}
                    >
                      {s.n}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="mt-1 w-px flex-1 bg-ink/20" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-display text-base font-medium text-ink">
                        {s.name}
                      </p>
                      {s.n === "01" && (
                        <span className="rounded-full border border-ink/40 px-2 py-0.5 text-[11px] font-medium text-muted">
                          Repeat weekly
                        </span>
                      )}
                      {s.n === "04" && (
                        <span className="rounded-full border border-ink/40 px-2 py-0.5 text-[11px] font-medium text-muted">
                          Approaching launch
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted">{s.sub}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* AI as a working partner */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Process" title="AI was a working partner" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              I use AI to run the legwork so I can spend the saved time on
              judgement. The thinking stays mine.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {aiPartner.map((a) => (
                <div
                  key={a.n}
                  className="reveal flex flex-col rounded-2xl border border-line bg-bg-raised/50 p-6"
                >
                  <span className="font-display text-lg text-accent-ink">
                    {a.n}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-medium tracking-tight text-ink">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{a.desc}</p>
                  <p className="mt-auto pt-4 text-xs uppercase tracking-wider text-accent-ink">
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

        {/* Where it goes next */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10">
            <SectionHead eyebrow="Where it goes next" title="An AI-native take" />
            <p className="reveal mt-5 max-w-2xl text-base leading-7 text-muted">
              The beta surfaces brand-relevant data. The next version should feel
              like a teammate. Here are three agentic moves I’m exploring,
              alongside a broader rethink of the Social home experience now in
              user testing.
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
