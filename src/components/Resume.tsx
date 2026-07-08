import { education, experience, site } from "@/lib/content";

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Resume</p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Experience
            </h2>
          </div>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg-raised"
          >
            Download resume (PDF)
            <span className="transition-transform group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </div>

        <ol className="mt-14 border-t border-line">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.period}`}
              className="reveal group grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="text-sm text-muted">{role.period}</p>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                    {role.title}
                  </h3>
                  <span className="text-muted">·</span>
                  <span className="text-ink/70">{role.company}</span>
                </div>
                <p className="mt-2 max-w-2xl text-base leading-7 text-muted">
                  {role.blurb}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-20">
          <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
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
                <p className="text-sm text-muted">{entry.period}</p>
              </div>
              <div className="md:col-span-9">
                <h4 className="font-display text-xl font-medium tracking-tight text-ink">
                  {entry.school}
                </h4>
                <p className="mt-2 max-w-2xl text-base leading-7 text-muted">
                  {entry.degree}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
