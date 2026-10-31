import Image from "next/image";
import { about, capabilities } from "@/lib/content";
import RotatingFacts from "@/components/RotatingFacts";
import portrait from "@/images/alisha-portrait.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="pb-24 pt-16 md:pb-32 md:pt-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="reveal md:col-span-5">
            <Image
              src={portrait}
              alt="Alisha smiling and making a peace sign against a coral wall"
              sizes="(min-width: 1152px) 420px, (min-width: 768px) 40vw, 100vw"
              placeholder="blur"
              className="aspect-[4/5] w-full max-w-md rounded-2xl border border-line object-cover object-[40%_30%]"
            />
          </div>

          <div className="reveal md:col-span-7 md:col-start-6 md:pl-6">
            <RotatingFacts
              lead="Hi, I’m Alisha."
              facts={about.funFacts}
              className="font-display text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.015em] text-ink md:text-[2.25rem]"
            />

            <div className="mt-10 space-y-6 text-lg leading-7 text-ink-soft">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 border-t border-line pt-8">
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
        </div>
      </div>
    </section>
  );
}
