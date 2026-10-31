import {
  education,
  experience,
  resumeSummary,
  site,
  tools,
} from "@/lib/content";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Resume</p>
            <h2 className="mt-2 font-display text-[1.75rem] font-semibold leading-9 tracking-[-0.01em] text-ink">
              Experience
            </h2>
          </div>
          <a
            href={site.resumeUrl}
            download="Alisha-Gonsalves-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink"
          >
            Download PDF
            <span aria-hidden="true">↓</span>
          </a>
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
