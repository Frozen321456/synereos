"use client";

import { BEYOND_AREAS } from "@/content/domains";
import { Reveal } from "@/components/motion/Reveal";

export function BeyondHexim() {
  return (
    <section id="about" className="syn-section section-pad border-t border-white/[0.06] bg-syn-surface" aria-labelledby="about-title">
      <div className="container-syn">
        <Reveal>
          <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">ABOUT SYNEREOS</p>
          <h2 id="about-title" className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] leading-tight font-semibold tracking-tight text-syn-text">
            We don't want to be another participant in the scale race.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-syn-text-secondary">
            We ask: what other architectures could intelligence take?
          </p>
        </Reveal>

        <ul className="mt-14">
          {BEYOND_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 80}>
              <li className="group border-t border-white/[0.06] last:border-b">
                <button type="button" className="flex w-full items-baseline justify-between gap-6 py-6 text-left">
                  <span className="mono text-[13px] tracking-[0.2em] text-syn-text transition-colors duration-200 group-hover:text-syn-cyan group-focus-visible:text-syn-cyan">
                    {area.title}
                  </span>
                  <span className="max-w-sm text-right text-sm leading-relaxed text-syn-text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 max-md:hidden">
                    {area.description}
                  </span>
                </button>
                <p className="pb-6 text-sm leading-relaxed text-syn-text-secondary md:hidden">
                  {area.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <div className="mt-16 border-t border-white/[0.08] pt-10">
            <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">THE LAB</p>
            <p className="mt-4 text-lg text-syn-text">Founder / Architect — Farhan</p>
            <p className="mt-2 text-sm text-syn-text-secondary">Independent research laboratory.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
