import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-32">
        <p className="eyebrow reveal">
          {site.role}
          {site.location ? ` · ${site.location}` : ""}
        </p>

        <h1 className="reveal mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          I make complex tools
          <br className="hidden sm:block" />{" "}
          feel <span className="marker italic">obvious</span>.
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
          <span className="text-sage-ink">●</span>
          <span>Senior Product Designer at HubSpot</span>
          <span className="text-line-strong">/</span>
          <span>Content platform · Systems</span>
          <span className="text-line-strong">/</span>
          <span>7+ years</span>
        </div>
      </div>
    </section>
  );
}
