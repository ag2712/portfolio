"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

// Work lives on the home page; About and Resume are their own pages.
const links = [
  { label: "Work", href: "/#work", page: "/" },
  { label: "About", href: "/about", page: "/about" },
  { label: "Resume", href: "/resume", page: "/resume" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="whitespace-nowrap font-display text-base font-semibold tracking-tight text-ink sm:text-lg"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center sm:gap-1">
            {links.map((l) => {
              // Work is "current" anywhere under /work (the case studies).
              const current =
                l.page === "/"
                  ? pathname.startsWith("/work")
                  : pathname === l.page;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={current ? "page" : undefined}
                    className={`rounded-md px-1.5 py-2 text-sm transition-colors sm:px-3 hover:text-ink ${
                      current ? "font-medium text-ink" : "text-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={`mailto:${site.email}`}
            className="hidden rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bg-raised sm:inline-block"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
