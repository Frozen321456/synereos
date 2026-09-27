"use client";

import dynamic from "next/dynamic";
import { OPEN_RESEARCH } from "@/content/social";
import { SITE } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

const ScrollFloat = dynamic(() => import("@/components/react-bits/ScrollFloat"), { ssr: false });

export function OpenResearch() {
  return (
    <section className="syn-section section-pad border-t border-white/[0.06]" aria-labelledby="open-title">
      <div className="container-syn">
        <Reveal>
          <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">{OPEN_RESEARCH.eyebrow}</p>
        </Reveal>

        <h2 id="open-title" className="mt-8 max-w-3xl text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.05] font-semibold tracking-tight text-syn-text">
          <ScrollFloat text={OPEN_RESEARCH.headline} />
        </h2>

        <Reveal delay={150}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-syn-text-secondary">{OPEN_RESEARCH.copy}</p>
        </Reveal>

        <Reveal delay={250}>
          <ul className="mt-10 space-y-3">
            {OPEN_RESEARCH.items.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mono link-line text-[13px] tracking-[0.18em] text-syn-text-secondary hover:text-syn-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={350}>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="mono mt-12 inline-block border border-white/[0.15] px-7 py-3.5 text-[11px] tracking-[0.25em] text-syn-text transition-colors duration-200 hover:border-syn-cyan hover:text-syn-cyan">
            {OPEN_RESEARCH.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
