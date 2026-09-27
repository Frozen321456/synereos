"use client";

import dynamic from "next/dynamic";
import { SITE } from "@/content/site";
import { NAV_LINKS } from "@/content/navigation";

const CircularText = dynamic(() => import("@/components/react-bits/CircularText"), { ssr: false });
const LetterGlitch = dynamic(() => import("@/components/react-bits/LetterGlitch"), { ssr: false });

const FOOTER_LINKS = [
  { label: "Research", href: "#research" },
  { label: "HEXIM", href: "#hexim" },
  { label: "Evidence", href: "#evidence" },
  { label: "Programs", href: "#programs" },
  { label: "Open Research", href: "#open" },
  { label: "About", href: "#about" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black" aria-label="Site footer">
      <div className="container-syn py-20">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-8">
            <div className="relative h-24 w-24 shrink-0">
              <CircularText
                text="SYNEREOS · RESEARCH · LAB · "
                spinDuration={20}
                onHover="speedUp"
                className="text-syn-text-muted"
              />
            </div>
            <div>
              <p className="mono text-sm tracking-[0.25em] text-syn-text">
                <LetterGlitch>SYNEREOS</LetterGlitch>
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-syn-text-secondary">
                Independent research laboratory investigating new architectures for intelligence.
              </p>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-4 md:grid-cols-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">
                    {link.label.toUpperCase()}
                  </a>
                </li>
              ))}
              <li>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">
                  GITHUB ↗
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-white/[0.08] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="mono text-[11px] tracking-[0.2em] text-syn-text-muted">© 2026 SYNEREOS</p>
          <p className="mono text-[11px] tracking-[0.2em] text-syn-text-muted">EXPERIMENT OVER ASSUMPTION.</p>
        </div>
      </div>
    </footer>
  );
}
