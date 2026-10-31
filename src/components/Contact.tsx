import { site } from "@/lib/content";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-mist-deep text-ink"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow !text-ink-soft">
          Contact
        </p>
        <h2 className="reveal mt-4 max-w-3xl font-display text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.015em] text-ink md:text-[3.5rem] md:leading-[3.75rem]">
          Let&apos;s build something worth using.
        </h2>

        <p className="reveal mt-6 max-w-md text-lg leading-7 text-ink-soft">
          Always happy to talk design, content tooling, or the general messy
          middle. Say hi.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-slate px-6 py-3 text-sm font-medium text-on-slate transition-transform hover:-translate-y-0.5"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            {site.email}
          </a>
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink/30 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              {s.label}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>

        <div className="caption mt-20 flex flex-col gap-2 border-t border-ink/15 pt-8 !text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}. Designed &amp; built from scratch.
          </span>
          {site.location ? <span>{site.location}</span> : null}
        </div>
      </div>
    </footer>
  );
}
