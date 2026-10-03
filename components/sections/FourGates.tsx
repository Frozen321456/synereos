"use client";

import { useRef } from "react";
import { homeContent } from "@/content/home";
import { useGsap } from "@/components/ui/Scrolly";

export function FourGates() {
  const { fourGates } = homeContent;
  const container = useRef<HTMLDivElement>(null);

  useGsap(container, () => {
    const cards = container.current?.querySelectorAll<HTMLElement>("[data-gate]");
    if (!cards || cards.length < 2) return;
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: `+=${cards.length * 60}%`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });
        // Each card slides up and stacks over the previous
        cards.forEach((card, i) => {
          if (i === 0) return; // first card stays
          tl.fromTo(
            card,
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, ease: "power2.out" },
            i * 1
          );
        });
      });
    });
  });

  return (
    <section id="four-gates" className="syn-section hairline-t" aria-labelledby="four-gates-heading">
      <div className="container-syn pb-10 pt-28 lg:pt-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {fourGates.badge}
        </p>
        <h2
          id="four-gates-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Four Gates
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {fourGates.intro}
        </p>
      </div>

      {/* Pinned stack: cards slide up over each other as you scroll */}
      <div ref={container} className="relative">
        <div className="container-syn relative h-[420px] lg:h-[480px]">
          {fourGates.gates.map((gate, i) => (
            <article
              key={gate.number}
              data-gate
              className={`absolute inset-0 m-auto max-w-3xl rounded-2xl border p-10 shadow-[0_8px_32px_rgba(2,132,199,0.08)] will-change-transform lg:p-14 ${
                i === 0
                  ? "border-syn-cyan/30 bg-syn-surface"
                  : "border-black/[0.07] bg-syn-surface/95"
              }`}
              style={{ zIndex: i }}
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span className="mono text-[10px] tracking-[0.3em] text-syn-cyan">
                  {gate.number}
                </span>
                <span className="text-2xl font-medium tracking-tight text-syn-text">
                  {gate.title}
                </span>
              </div>
              <p className="mb-6 text-base leading-relaxed text-syn-text-secondary">
                {gate.desc}
              </p>
              <ul className="space-y-3">
                {gate.criteria.map((criterion, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-syn-text-secondary">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full border border-syn-cyan/40" />
                    {criterion}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
