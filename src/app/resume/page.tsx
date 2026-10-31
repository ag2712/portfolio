import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import RevealScript from "@/components/RevealScript";
import { resumeSummary, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Resume · ${site.name}`,
  description: resumeSummary,
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Resume />
      </main>
      <Contact />
      <RevealScript />
    </>
  );
}
