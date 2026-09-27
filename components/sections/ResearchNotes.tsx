"use client";

import dynamic from "next/dynamic";
import { RESEARCH_NOTES } from "@/content/timeline";
import { Reveal } from "@/components/motion/Reveal";

const Shuffle = dynamic(() => import("@/components/react-bits/Shuffle"), { ssr: false });

export function ResearchNotes() {
  return (
    <section className="syn-section section-pad border-t border-white/[0.06] bg-syn-surface" aria-labelledby="notes-title">
      <div className="container-syn">
        <Reveal>
          <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">RESEARCH NOTES</p>
          <h2 id="notes-title" className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] leading-tight font-semibold tracking-tight text-syn-text">
            Short-form thinking.
          </h2>
        </Reveal>

        <ul className="mt-16 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {RESEARCH_NOTES.map((n, i) => (
            <Reveal key={n.title} delay={i * 60}>
              <li>
                <a
                  href={n.href}
                  className="group flex items-baseline justify-between py-6 transition-colors duration-200 hover:bg-white/[0.02] px-2 -mx-2"
                >
                  <span className="text-xl font-medium tracking-tight text-syn-text group-hover:text-syn-cyan">
                    <Shuffle text={n.title} shuffleDirection="right" duration={0.3} shuffleTimes={2} />
                  </span>
                  <span className="mono text-[11px] tracking-[0.2em] text-syn-text-muted">READ →</span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
