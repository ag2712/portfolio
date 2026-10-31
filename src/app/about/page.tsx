import type { Metadata } from "next";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Contact from "@/components/Contact";
import RevealScript from "@/components/RevealScript";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `About · ${site.name}`,
  description: site.tagline,
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <About />
      </main>
      <Contact />
      <RevealScript />
    </>
  );
}
