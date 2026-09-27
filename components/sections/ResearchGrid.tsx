"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";
import { RESEARCH_DOMAINS } from "@/content/research";

gsap.registerPlugin(ScrollTrigger);

const STATUS_STYLE: Record<string, string> = {
  COMPLETE: "text-emerald-300",
  FAILED: "text-red-300",
  INVESTIGATING: "text-amber-200",
  ACTIVE: "text-syn-cyan",
  INCONCLUSIVE: "text-amber-200",
};

const GLYPH: Record<string, string> = {
  COMPLETE: "✓",
  FAILED: "✗",
  INVESTIGATING: "◌",
  ACTIVE: "◉",
  INCONCLUSIVE: "~",
};

export function ResearchGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        grid.querySelectorAll(".grid-cell"),
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: grid, start: "top 82%", once: true },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      id="research"
      className="syn-section relative border-t border-white/[0.06]"
      aria-labelledby="grid-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          RESEARCH FRONTIERS
        </p>
        <SplitHeading
          as="h2"
          text="Seven directions. One method: measure, fail, learn."
          mode="lines"
          stagger={0.11}
          className="max-w-4xl text-[clamp(2rem,4.5vw,4rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-syn-text"
        />

        {/* Asymmetrical grid */}
        <div
          ref={gridRef}
          className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {RESEARCH_DOMAINS.map((d, i) => (
            <article
              key={d.index}
              className={`grid-cell group relative overflow-hidden rounded-xl border border-white/[0.07] bg-syn-surface/60 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-syn-cyan/40 hover:bg-syn-surface ${
                i === 0 || i === 5 ? "lg:row-span-1 min-h-[240px] lg:min-h-[280px]" : "min-h-[240px] lg:min-h-[280px]"
              }`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 90% 80% at 50% 0%, rgba(56,189,248,0.08), transparent 70%)",
                }}
              />
              <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
                {d.index}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-syn-text transition-transform duration-500 group-hover:-translate-y-1 md:text-2xl">
                {d.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-syn-text-secondary">
                {d.copy}
              </p>
              <span className="mono absolute bottom-6 right-8 text-[10px] tracking-[0.25em] text-syn-text-muted opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                INVESTIGATING →
              </span>
            </article>
          ))}
        </div>

        {/* Status strip — color-independent glyphs */}
        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/[0.07] pt-8">
          <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
            CURRENT SIGNALS
          </span>
          <span className="mono text-[11px] tracking-[0.15em] text-syn-text-secondary">
            <span aria-hidden="true" className="mr-2 text-emerald-300">✓</span>13.2C-1A / 13.2C-2 COMPLETE
          </span>
          <span className="mono text-[11px] tracking-[0.15em] text-syn-text-secondary">
            <span aria-hidden="true" className="mr-2 text-red-300">✗</span>13.2C-3 FAILED → ANALYZED
          </span>
          <span className="mono text-[11px] tracking-[0.15em] text-syn-text-secondary">
            <span aria-hidden="true" className="mr-2 text-amber-200">◌</span>ECA-01 / MEM-01 INVESTIGATING
          </span>
        </div>
      </div>
    </section>
  );
}
