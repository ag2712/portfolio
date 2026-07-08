import Link from "next/link";
import { projects, type Project } from "@/lib/content";

// Flagship cover — an abstract "insight card" (named theme + sentiment split)
// floating on the brand gradient, echoing what the product actually surfaces.
function SocialInsightsCover({ project }: { project: Project }) {
  const { from, to, ink } = project.cover;
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div
        aria-hidden
        className="absolute -left-16 -top-16 h-52 w-52 rounded-full opacity-25"
        style={{ background: ink }}
      />

      {/* back card for depth */}
      <div
        aria-hidden
        className="absolute right-[7%] top-[13%] h-[56%] w-[47%] rotate-6 rounded-xl bg-white/20"
      />

      {/* front insight card */}
      <div className="absolute right-[11%] top-[19%] w-[50%] -rotate-2 rounded-xl bg-bg-raised p-4 shadow-xl ring-1 ring-black/5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-accent/15 px-2 py-[3px] text-[9px] font-semibold uppercase tracking-wide text-accent-ink">
            Theme
          </span>
          <div aria-hidden className="flex gap-1">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#6f9e6b" }}
            />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
          </div>
        </div>
        <div aria-hidden className="mt-3 space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-ink/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-ink/10" />
          <div className="h-1.5 w-3/5 rounded-full bg-ink/10" />
        </div>
        <div aria-hidden className="mt-3 flex h-2 overflow-hidden rounded-full">
          <div className="w-[62%]" style={{ background: "#6f9e6b" }} />
          <div className="w-[23%] bg-ink/15" />
          <div className="w-[15%]" style={{ background: "#c98a7d" }} />
        </div>
      </div>

      <div className="absolute inset-0 flex items-end p-6">
        <span
          className="font-display text-2xl font-medium tracking-tight"
          style={{ color: ink }}
        >
          {project.metric.value}
          <span className="ml-2 align-middle text-sm font-normal opacity-70">
            {project.metric.label}
          </span>
        </span>
      </div>
    </div>
  );
}

function ProjectCover({ project }: { project: Project }) {
  if (project.slug === "social-insights") {
    return <SocialInsightsCover project={project} />;
  }
  const { from, to, ink } = project.cover;
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* generative geometric motif so every card feels distinct */}
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-30"
        style={{ background: ink }}
      />
      <div
        aria-hidden
        className="absolute bottom-6 left-6 h-24 w-24 rounded-full border-2 opacity-40"
        style={{ borderColor: ink }}
      />
      <div className="absolute inset-0 flex items-end p-6">
        <span
          className="font-display text-2xl font-medium tracking-tight"
          style={{ color: ink }}
        >
          {project.metric.value}
          <span className="ml-2 align-middle text-sm font-normal opacity-70">
            {project.metric.label}
          </span>
        </span>
      </div>
    </div>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={project.href ?? "#"}
      className="reveal group block"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <ProjectCover project={project} />

      <div className="mt-6 flex items-start justify-between gap-6">
        <h3 className="max-w-md font-display text-2xl font-medium leading-snug tracking-tight text-ink transition-colors group-hover:text-accent-ink md:text-3xl">
          {project.title}
        </h3>
        <span className="mt-1 shrink-0 text-sm text-muted">{project.year}</span>
      </div>

      <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink">
          {project.role}
        </span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="reveal flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              A few things I&apos;ve shipped
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-6 text-muted sm:block">
            Deeper case studies on request — the messy middle included, not
            just the tidy final screens.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
