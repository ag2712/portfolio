import { site } from "@/lib/content";

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-line bg-ink text-bg-raised"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow" style={{ color: "rgba(246,243,236,0.6)" }}>
          Contact
        </p>
        <h2 className="reveal mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Let&apos;s build something worth using.
        </h2>

        <p className="reveal mt-6 max-w-md text-lg leading-8 text-white/60">
          Always happy to talk design, content tooling, or the general messy
          middle. Say hi.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-bg-raised px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {site.email}
          </a>
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-bg-raised transition-colors hover:border-white/60"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {site.name}. Designed &amp; built from scratch.
          </span>
          {site.location ? <span>{site.location}</span> : null}
        </div>
      </div>
    </footer>
  );
}
