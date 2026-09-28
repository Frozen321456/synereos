"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";

gsap.registerPlugin(ScrollTrigger);

const STORY = [
  {
    id: "01",
    title: "Question the architecture",
    body: "We don't optimize the obvious. We investigate what intelligence could look like when its assumptions are questioned at the foundation.",
    metric: "01 / THESIS",
  },
  {
    id: "02",
    title: "Close the loop",
    body: "HEXIM treats intelligence as a cycle: experience → prediction → surprise → question → experiment → learning → memory → future prediction.",
    metric: "02 / HEXIM",
  },
  {
    id: "03",
    title: "Efficiency by design",
    body: "Not post-hoc compression. Representation, memory, and runtime designed together from day one for constrained hardware.",
    metric: "03 / EVIDENCE",
  },
  {
    id: "04",
    title: "Failure is data",
    body: "Failed experiments, degraded layers, and rejected hypotheses are part of the record — visible, analyzed, and fed into the next question.",
    metric: "04 / METHOD",
  },
];

export function PinnedStorySection() {
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    if (!root || !media) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      // Parallax offsets for the right-side card stream
      const cards = media.querySelectorAll(".story-media");
      cards.forEach((card, i) => {
        const a = [14, 8, 14, 8][i % 4];
        const b = [-8, -14, -8, -14][i % 4];
        gsap.fromTo(
          card,
          { yPercent: a },
          {
            yPercent: b,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });

      // Story items brighten as they pass the middle band
      root.querySelectorAll(".story-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.35 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 75%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="story"
      ref={rootRef}
      className="syn-section relative border-t border-white/[0.06]"
      aria-labelledby="story-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          RESEARCH PHILOSOPHY
        </p>

        <SplitHeading
          as="h2"
          id="story-heading"
          text="How intelligence works when the loop is closed."
          mode="lines"
          stagger={0.12}
          duration={1.3}
          className="max-w-4xl text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-syn-text"
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: sticky narrative highlights */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <ol className="space-y-16">
              {STORY.map((item) => (
                <li key={item.id} className="story-item group">
                  <span className="mono text-[10px] tracking-[0.3em] text-syn-cyan">
                    {item.metric}
                  </span>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-syn-text md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-syn-text-secondary">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: card stream with parallax */}
          <div ref={mediaRef} className="space-y-10 lg:pt-24">
            {STORY.map((item, i) => (
              <figure key={item.id} className="story-media will-change-transform">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/[0.06] bg-syn-surface">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        i % 2 === 0
                          ? "radial-gradient(ellipse 70% 60% at 30% 30%, rgba(56,189,248,0.10), transparent 65%)"
                          : "radial-gradient(ellipse 70% 60% at 70% 70%, rgba(99,102,241,0.10), transparent 65%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />
                  <span className="mono absolute bottom-4 left-4 text-[9px] tracking-[0.3em] text-syn-text-muted">
                    {item.metric}
                  </span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
