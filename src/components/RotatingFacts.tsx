"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** The steady first line of the heading, e.g. "Fun fact:". */
  lead: string;
  facts: readonly string[];
  /** Classes for the heading. */
  className?: string;
  /** Seconds each fact stays on screen. */
  seconds?: number;
};

const FADE_MS = 450;

/**
 * Cycles through short facts with a soft blur between each one.
 * - Includes a pause button, so moving text can be stopped (WCAG 2.2.2).
 * - Respects reduced motion: facts swap instantly, with no blur.
 * - Screen readers get the full list once, not a stream of changes.
 */
export default function RotatingFacts({
  lead,
  facts,
  className,
  seconds = 3,
}: Props) {
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const swapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || facts.length < 2) return;

    const tick = setInterval(() => {
      if (reduceMotion) {
        setIndex((i) => (i + 1) % facts.length);
        return;
      }
      setHidden(true);
      swapTimer.current = setTimeout(() => {
        setIndex((i) => (i + 1) % facts.length);
        setHidden(false);
      }, FADE_MS);
    }, seconds * 1000);

    return () => {
      clearInterval(tick);
      if (swapTimer.current) clearTimeout(swapTimer.current);
      setHidden(false);
    };
  }, [paused, reduceMotion, facts.length, seconds]);

  return (
    <>
      <h2 className={className}>
        <span className="block">{lead}</span>
        <span
          aria-hidden="true"
          className={`block min-h-[2.3em] text-ink-muted ${
            reduceMotion
              ? ""
              : "transition-[filter,opacity] duration-[450ms] ease-out"
          } ${hidden ? "opacity-0 blur-md" : "opacity-100 blur-0"}`}
        >
          {facts[index]}
        </span>
        <span className="sr-only">
          {facts.map((fact) => (
            <span key={fact}> {fact}</span>
          ))}
        </span>
      </h2>

      {facts.length > 1 && (
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play the fun facts" : "Pause the fun facts"}
          className="eyebrow mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 transition-colors hover:border-line-strong hover:text-ink"
        >
          {paused ? (
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4l13 8-13 8z" />
            </svg>
          ) : (
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 5v14M15 5v14" />
            </svg>
          )}
          <span>{paused ? "Play" : "Pause"}</span>
        </button>
      )}
    </>
  );
}
