"use client";

import { PROGRAMS } from "@/content/timeline";
import { Reveal } from "@/components/motion/Reveal";

const STATUS_COLOR: Record<string, string> = {
  ACTIVE: "text-syn-cyan",
  EXPERIMENTAL: "text-amber-300",
  UNDISCLOSED: "text-syn-text-muted",
};

export function Programs() {
  return (
    <section id="programs" className="syn-section section-pad border-t border-white/[0.06]" aria-labelledby="programs-title">
      <div className="container-syn">
        <Reveal>
          <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">PROGRAMS</p>
          <h2 id="programs-title" className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] leading-tight font-semibold tracking-tight text-syn-text">
            Synereos is the lab. HEXIM is one experiment.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <article className="group rounded-2xl border border-white/[0.08] bg-syn-surface-2/60 p-10 transition-colors duration-300 hover:border-syn-cyan/50">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-syn-text">{p.title}</h3>
                  <span className={`mono text-[11px] tracking-[0.2em] ${STATUS_COLOR[p.status]}`}>{p.status}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-syn-text-secondary">{p.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
