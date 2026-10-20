import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-32">
        <p className="eyebrow reveal">
          {site.role}
          {site.location ? ` · ${site.location}` : ""}
        </p>

        <h1 className="reveal mt-6 max-w-4xl font-display text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-5xl md:text-[3.5rem] md:leading-[3.75rem]">
          I make complex tools
          <br className="hidden sm:block" />{" "}
          feel obvious.
        </h1>

        <p className="reveal mt-8 max-w-xl text-lg leading-7 text-ink-soft">
          {site.tagline}
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-lg bg-slate px-6 py-3 text-sm font-medium text-on-slate transition-transform hover:-translate-y-0.5"
          >
            View selected work
            <span className="transition-transform group-hover:translate-x-0.5">
              ↓
            </span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
