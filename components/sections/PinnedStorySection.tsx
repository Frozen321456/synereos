"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitTextReveal } from "@/components/ui/SplitText";

gsap.registerPlugin(ScrollTrigger);

interface PinnedStoryItem {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const STORY_ITEMS: PinnedStoryItem[] = [
  {
    id: "01",
    number: "01",
    title: "Question Everything",
    description: "We don't optimize the obvious. We investigate what architecture could look like when assumptions are questioned at the foundation.",
  },
  {
    id: "02",
    number: "02",
    title: "Closed Loop Intelligence",
    description: "HEXIM closes the loop: experience → prediction → surprise → question → experiment → learning → memory → future prediction.",
  },
  {
    id: "03",
    number: "03",
    title: "Efficiency as Architecture",
    description: "Not post-hoc compression. Representation, memory, and runtime designed together from day one for constrained hardware.",
  },
  {
    id: "04",
    number: "04",
    title: "Failure as Data",
    description: "Failed experiments, degraded layers, and rejected hypotheses are part of the record — not hidden, but analyzed for signal.",
  },
];

export function PinnedStorySection() {
  const pinRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const pinEl = pinRef.current;
    const contentEl = contentRef.current;
    if (!pinEl || !contentEl) return;

    const ctx = gsap.context(() => {
      // Pin the left column
      ScrollTrigger.create({
        trigger: pinEl,
        start: "top top",
        end: "bottom bottom",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      // Animate story items on scroll
      STORY_ITEMS.forEach((item, index) => {
        const itemEl = document.getElementById(`story-${item.id}`);
        if (!itemEl) return;

        gsap.fromTo(
          itemEl,
          { opacity: 0.3, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: itemEl,
              start: "top 70%",
              end: "top 30%",
              scrub: 1,
              toggleActions: "play reverse play reverse",
            },
          } as gsap.TweenVars
        );
      });

      // Right side parallax images
      const images = contentEl.querySelectorAll(".story-image");
      images.forEach((img, i) => {
        gsap.to(img, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: pinEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    }, pinEl);

    return () => ctx.revert();
  }, []);

  return (
    <section className="syn-section relative min-h-[200vh]" aria-labelledby="story-title">
      <div className="container-syn">
        <div ref={pinRef} className="relative grid lg:grid-cols-2 gap-16">
          {/* Left: Pinned Content */}
          <div ref={pinRef} className="lg:sticky lg:top-0 lg:h-[100vh] flex flex-col justify-center pr-12 lg:pr-20">
            <div className="mb-16">
              <span className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">RESEARCH PHILOSOPHY</span>
              <h2 id="story-title" className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-syn-text">
                <SplitTextReveal 
                  from="lines" 
                  revealType="clip" 
                  stagger={0.12}
                  duration={1.4}
                >
                  How intelligence works<br />when the loop is closed.
                </SplitTextReveal>
              </h2>
            </div>

            <div className="space-y-16" id="story-items">
              {STORY_ITEMS.map((item) => (
                <article 
                  key={item.id} 
                  id={`story-${item.id}`}
                  className="group relative pl-8 border-l-2 border-white/[0.08] transition-all duration-500"
                >
                  <div className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-white/[0.1] group-hover:bg-syn-cyan group-hover:scale-150 transition-all duration-500" />
                  <span className="mono text-[11px] tracking-[0.2em] text-syn-cyan">{item.number}</span>
                  <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] leading-tight font-medium tracking-tight text-syn-text">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-syn-text-secondary">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Right: Scrolling Visuals */}
          <div ref={contentRef} className="relative space-y-12 lg:pr-0">
            {STORY_ITEMS.map((item, i) => (
              <div key={item.id} className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-syn-surface-2/50 border border-white/[0.06] story-image">
                  <div className="absolute inset-0 bg-gradient-to-br from-syn-cyan/10 via-transparent to-syn-indigo/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted/50">
                      {item.title.toUpperCase()}
                    </span>
                  </div>
                </div>
                <p className="mt-4 mono text-[11px] tracking-[0.2em] text-syn-text-muted">
                  {item.number} — {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}