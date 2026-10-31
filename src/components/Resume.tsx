import {
  education,
  experience,
  resumeSummary,
  site,
  tools,
} from "@/lib/content";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Resume() {
  const linkedin = site.socials.find((s) => s.label === "LinkedIn");

  return (
    <section id="resume" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="reveal">
          <p className="eyebrow">Resume</p>
          <h2 className="mt-2 font-display text-[1.75rem] font-semibold leading-9 tracking-[-0.01em] text-ink">
            Experience
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={site.resumeUrl}
              download="Alisha-Gonsalves-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink"
            >
              Download PDF
              <span aria-hidden="true">↓</span>
            </a>
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                title="LinkedIn"
                className="inline-flex items-center justify-center rounded-lg border border-line-strong p-2.5 text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="reveal mt-8 max-w-[65ch] text-lg leading-7 text-ink-soft">
          {resumeSummary}
        </p>

        <ExperienceTimeline roles={experience} />

        <div className="reveal mt-20">
          <h3 className="font-display text-[1.75rem] font-semibold leading-9 tracking-[-0.01em] text-ink">
            Education
          </h3>
        </div>

        <ol className="mt-8 border-t border-line">
          {education.map((entry) => (
            <li
              key={`${entry.school}-${entry.period}`}
              className="reveal grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="caption">{entry.period}</p>
              </div>
              <div className="md:col-span-9">
                <h4 className="font-display text-xl font-semibold leading-7 text-ink">
                  {entry.school}
                </h4>
                <p className="mt-2 max-w-2xl text-base leading-[1.625rem] text-ink-soft">
                  {entry.degree}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-20">
          <h3 className="font-display text-[1.75rem] font-semibold leading-9 tracking-[-0.01em] text-ink">
            Tools
          </h3>
        </div>

        <dl className="mt-8 border-t border-line">
          {tools.map((group) => (
            <div
              key={group.label}
              className="reveal grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <dt className="eyebrow md:col-span-3">
                {group.label}
              </dt>
              <dd className="text-base leading-[1.625rem] text-ink-soft md:col-span-9">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
