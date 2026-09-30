"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/Magnetic";
import { HEXIM } from "@/content/hexim";

gsap.registerPlugin(ScrollTrigger);

export function HeximFlagship() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (bg) {
        gsap.to(bg, {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Evolution timeline animation
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".evolution-item",
          { opacity: 0.3, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: ".evolution-list",
              start: "top 85%",
              once: true,
            },
          }
        );

        // Active item highlight on scroll
        const items = document.querySelectorAll(".evolution-item");
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { opacity: 0.4 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 70%",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        });
      });
      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hexim"
      ref={sectionRef}
      className="syn-section relative border-t border-white/[0.06] bg-syn-surface/50 overflow-hidden"
      aria-labelledby="hexim-heading"
    >
      <div ref={bgRef} className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.06), transparent 50%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(99,102,241,0.05), transparent 50%)",
          }}
        />
      </div>

      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-6 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {HEXIM.eyebrow}
        </p>

        <div className="mb-4 flex items-baseline gap-4">
          <SplitHeading
            as="h1"
            id="hexim-heading"
            text={HEXIM.title}
            mode="lines"
            stagger={0.1}
            duration={1.2}
            className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-syn-text"
          />
        </div>

        <p className="mono text-[11px] tracking-[0.2em] text-syn-cyan mb-8">
          {HEXIM.fullTitle}
        </p>

        <p className="max-w-3xl text-lg leading-relaxed text-syn-text-secondary mb-16">
          {HEXIM.copy}
        </p>

        {/* Pillars */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {HEXIM.pillars.map((pillar, i) => (
            <div
              key={pillar}
              className="group relative p-6 rounded-xl border border-white/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface"
            >
              <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-syn-text">
                {pillar}
              </h3>
            </div>
          ))}
        </div>

        {/* Evolution Timeline */}
        <div className="border-t border-white/[0.06] pt-16">
          <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
            HEXIM EVOLUTION
          </p>

          <SplitHeading
            as="h2"
            text="From concept to unified intelligence."
            mode="lines"
            stagger={0.1}
            className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-syn-text"
          />

          <ol className="evolution-list mt-16 space-y-6">
            {HEXIM.evolution.map((stage, i) => (
              <li key={stage.id} className="evolution-item group flex gap-6">
                <span className="mono text-[11px] tracking-[0.2em] text-syn-cyan shrink-0 mt-1 w-16">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium tracking-tight text-syn-text group-hover:text-syn-cyan transition-colors">
                    {stage.label}
                  </h3>
                  <p className="mt-2 text-syn-text-secondary">
                    {stage.description}
                  </p>
                </div>
                <span className="mono shrink-0 text-[11px] tracking-[0.15em] text-syn-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6">
          <MagneticButton className="mono cursor-pointer border border-white/20 text-[11px] tracking-[0.25em] text-syn-text transition-colors duration-300 hover:border-syn-cyan hover:text-syn-cyan">
            <a href={HEXIM.cta.href} className="block px-8 py-4">
              {HEXIM.cta.label}
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}