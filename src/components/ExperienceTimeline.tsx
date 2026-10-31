"use client";

import { useState, type CSSProperties } from "react";
import type { Role } from "@/lib/content";

// "2023 to present" → "2023–now", "2021 to 2023" → "2021–23", "2018" → "2018"
function shortPeriod(period: string) {
  const [start, end] = period.split(" to ");
  if (!end) return start;
  if (end === "present") return `${start}–now`;
  return `${start}–${end.slice(-2)}`;
}

function RoleDetails({ role }: { role: Role }) {
  return (
    <>
      <p className="eyebrow">
        {role.period}
        {role.location ? ` · ${role.location}` : ""}
      </p>
      <h3 className="mt-3 font-display text-xl font-semibold leading-7 text-ink">
        {role.title}
        <span className="font-normal text-ink-muted"> · {role.company}</span>
      </h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[1.625rem] text-ink-soft marker:text-rule">
        {role.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </>
  );
}

/**
 * A staircase of roles, oldest at the top, newest at the bottom, stepping
 * right as the career climbs. One role is always open, so the details are
 * readable without hovering. Hover, focus or click a step to switch.
 *
 * Large screens: staircase on the left, details in a panel on the right.
 * Smaller screens: a stacked list with the open role's details underneath it.
 */
export default function ExperienceTimeline({ roles }: { roles: Role[] }) {
  // Content is newest first; the staircase climbs from oldest to newest.
  const steps = [...roles].reverse();
  const last = steps.length - 1;
  const [active, setActive] = useState(last);
  const current = steps[active];

  return (
    <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
      <ol
        className="flex flex-col gap-3 lg:col-span-7"
        style={{ "--n": Math.max(last, 1) } as CSSProperties}
      >
        {steps.map((role, i) => {
          const isActive = i === active;
          return (
            <li
              key={`${role.company}-${role.period}`}
              className="reveal lg:w-[21rem] lg:ml-[calc(var(--i)*((100%-21rem)/var(--n)))]"
              style={{ "--i": i } as CSSProperties}
            >
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`flex w-full items-center gap-4 rounded-lg border px-5 py-4 text-left transition-colors ${
                  isActive
                    ? "border-slate bg-slate text-on-slate"
                    : "border-sand bg-paper text-ink hover:border-rule"
                }`}
              >
                <span
                  className={`w-[4.5rem] shrink-0 font-mono text-[0.8125rem] leading-5 ${
                    isActive ? "text-on-slate/80" : "text-ink-muted"
                  }`}
                >
                  {shortPeriod(role.period)}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-8 w-px shrink-0 ${
                    isActive ? "bg-on-slate/30" : "bg-sand"
                  }`}
                />
                <span className="min-w-0">
                  <span className="block font-display text-base font-semibold leading-6">
                    {role.company}
                  </span>
                  <span
                    className={`block text-sm leading-5 ${
                      isActive ? "text-on-slate/80" : "text-ink-muted"
                    }`}
                  >
                    {role.title}
                  </span>
                </span>
              </button>

              {/* Smaller screens: details sit right under the open step. */}
              {isActive && (
                <div className="mt-3 rounded-lg border border-sand p-6 lg:hidden">
                  <RoleDetails role={role} />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Large screens: one details panel beside the staircase. */}
      <div className="hidden lg:col-span-5 lg:block">
        <div
          aria-live="polite"
          className="sticky top-24 rounded-lg border border-sand p-6 shadow-card"
        >
          <RoleDetails key={active} role={current} />
        </div>
      </div>
    </div>
  );
}
