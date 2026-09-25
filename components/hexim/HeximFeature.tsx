"use client";

import { useCallback } from "react";
import { HEXIM } from "@/content/hexim";
import { Reveal } from "@/components/motion/Reveal";

export function HeximFeature() {
  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section id="research" className="section-pad" aria-labelledby="hexim-title">
      <div className="container-syn">
        <Reveal>
          <p className="mono mb-6 text-[11px] tracking-[0.3em] text-syn-text-muted">
            {HEXIM.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <article
            onMouseMove={onMove}
            className="spotlight-card rounded-2xl border border-white/[0.06] bg-syn-surface p-8 md:p-16"
          >
            <h2
              id="hexim-title"
              className="text-[clamp(3rem,10vw,8rem)] leading-none font-semibold tracking-tight text-syn-text"
            >
              {HEXIM.title}
            </h2>
            <p className="mt-4 text-lg text-syn-cyan md:text-xl">
              {HEXIM.subtitle}
            </p>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {HEXIM.pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="border-t border-white/[0.08] pt-4"
                >
                  <p className="mono text-[13px] leading-snug tracking-[0.15em] text-syn-text">
                    {pillar}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-14 max-w-md text-base leading-relaxed text-syn-text-secondary">
              {HEXIM.copy}
            </p>

            <a
              href={HEXIM.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mono mt-10 inline-block border border-white/[0.12] px-6 py-3 text-[11px] tracking-[0.2em] text-syn-text transition-colors duration-200 hover:border-white/[0.3] hover:bg-white/[0.04]"
            >
              {HEXIM.cta.label}
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
