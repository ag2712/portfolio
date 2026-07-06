import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-32">
        <p className="eyebrow reveal">
          {site.role} · {site.location}
        </p>

        <h1 className="reveal mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Designing calm products
          <br className="hidden sm:block" />{" "}
          for <span className="italic text-accent-ink">complex</span> problems.
        </h1>

        <p className="reveal mt-8 max-w-xl text-lg leading-8 text-muted md:text-xl">
          {site.tagline}
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg-raised transition-transform hover:-translate-y-0.5"
          >
            View selected work
            <span className="transition-transform group-hover:translate-x-0.5">
              ↓
            </span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            {site.email}
          </a>
        </div>
      </div>

      {/* marquee-style capability strip */}
      <div className="border-y border-line bg-bg-raised/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 text-sm text-muted md:px-10">
          <span className="text-accent-ink">●</span>
          <span>Available for select senior &amp; staff roles</span>
          <span className="text-line-strong">/</span>
          <span>Product · Systems · 0→1</span>
          <span className="text-line-strong">/</span>
          <span>8+ years</span>
        </div>
      </div>
    </section>
  );
}
