"use client";

import dynamic from "next/dynamic";
import { TIMELINE } from "@/content/timeline";
import { Reveal } from "@/components/motion/Reveal";

const CurvedLoop = dynamic(() => import("@/components/react-bits/CurvedLoop"), { ssr: false });

export function ResearchLog() {
  return (
    <section className="syn-section section-pad border-t border-white/[0.06]" aria-labelledby="log-title">
      <div className="container-syn">
        <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">RESEARCH TIMELINE</p>
        <h2 id="log-title" className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] leading-tight font-semibold tracking-tight text-syn-text">
          How HEXIM evolved.
        </h2>

        <div className="mt-16 space-y-16">
          {TIMELINE.map((m, i) => (
            <Reveal key={m.marker} delay={i * 60}>
              <article className="grid grid-cols-1 gap-6 border-l-2 border-white/[0.1] pl-8 md:grid-cols-[200px_1fr] md:gap-12">
                <div>
                  <p className="mono text-[11px] tracking-[0.2em] text-syn-cyan">{m.marker}</p>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight text-syn-text">{m.title}</h3>
                </div>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div><dt className="mono text-[10px] tracking-[0.25em] text-syn-text-muted">WE THOUGHT</dt><dd className="mt-1 text-sm leading-relaxed text-syn-text-secondary">{m.thought}</dd></div>
                  <div><dt className="mono text-[10px] tracking-[0.25em] text-syn-text-muted">WE TESTED</dt><dd className="mt-1 text-sm leading-relaxed text-syn-text-secondary">{m.tested}</dd></div>
                  <div><dt className="mono text-[10px] tracking-[0.25em] text-syn-text-muted">WHAT HAPPENED</dt><dd className="mt-1 text-sm leading-relaxed text-syn-text-secondary">{m.happened}</dd></div>
                  <div><dt className="mono text-[10px] tracking-[0.25em] text-syn-text-muted">WHAT CHANGED</dt><dd className="mt-1 text-sm leading-relaxed text-syn-text">{m.changed}</dd></div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 overflow-hidden border-y border-white/[0.08] py-6">
          <CurvedLoop
            marqueeText="QUESTION ✦ REPRESENTATION ✦ COMPRESSION ✦ MEMORY ✦ SKILLS ✦ AUTONOMY ✦ EXPERIENTIAL ARCHITECTURE ✦ "
            speed={1.5}
            curveAmount={0}
            direction="left"
            interactive={false}
            className="mono"
          />
        </div>
      </div>
    </section>
  );
}
