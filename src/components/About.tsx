import { about, capabilities } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-line bg-bg-raised/50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="reveal md:col-span-4">
            <p className="eyebrow">About</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
              I read the room — and the roadmap.
            </h2>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal md:col-span-7 md:col-start-6">
            <div className="space-y-6 text-lg leading-8 text-ink/85">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <p className="eyebrow">What I do</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="rounded-full border border-line bg-bg px-3.5 py-1.5 text-sm text-ink"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
