import Image from "next/image";
import { about, capabilities } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Intro: photo beside the greeting and story */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-10">
          <div className="reveal md:col-span-5">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="aspect-[4/3] h-auto w-full rounded-lg object-cover"
            />
          </div>

          <div className="reveal md:col-span-7">
            <p className="eyebrow">About</p>
            <h2 className="mt-3 font-display text-[2.5rem] font-semibold leading-[3rem] tracking-[-0.02em] text-ink">
              {about.greeting}
            </h2>
            <p className="mt-5 text-lg leading-7 text-ink">{about.origin}</p>

            <div className="mt-6 space-y-4 text-base leading-[1.625rem] text-ink-soft">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-3">
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
        </div>

        {/* Life outside work */}
        <div className="reveal mt-16">
          <p className="eyebrow">Off the clock</p>
          <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {about.interests.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-line p-4"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  placeholder="blur"
                  sizes="(min-width: 640px) 30vw, 100vw"
                  className="aspect-[5/4] h-auto w-full rounded-sm object-cover"
                />
                <h3 className="mt-4 font-display text-xl font-semibold leading-7 text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-[1.625rem] text-ink-soft">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="reveal mt-16 border-t border-line pt-8">
          <p className="eyebrow">What I do</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-full bg-sand px-3.5 py-1.5 text-sm text-ink-soft"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
