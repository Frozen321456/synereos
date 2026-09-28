"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";

gsap.registerPlugin(ScrollTrigger);

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  linkUrl: string;
}

const ITEMS: ShowcaseItem[] = [
  {
    id: "hexim",
    title: "HEXIM",
    subtitle: "Flagship experiential intelligence architecture.",
    category: "ACTIVE RESEARCH",
    tags: ["Representation", "Memory", "On-Device"],
    linkUrl: "#research",
  },
  {
    id: "tfsr",
    title: "TFSR",
    subtitle: "Experimental learning and representation research.",
    category: "EXPERIMENTAL",
    tags: ["Learning", "Representation"],
    linkUrl: "#research",
  },
  {
    id: "jev-mobile",
    title: "JEV-MOBILE",
    subtitle: "Compact structured decision intelligence for mobile environments.",
    category: "EXPERIMENTAL",
    tags: ["Decision", "Mobile"],
    linkUrl: "#research",
  },
  {
    id: "efficient",
    title: "EFFICIENT INTELLIGENCE",
    subtitle: "Same reasoning under hard compute ceilings.",
    category: "DOMAIN",
    tags: ["Compute", "Memory"],
    linkUrl: "#research",
  },
  {
    id: "world-models",
    title: "WORLD MODELS",
    subtitle: "Internal simulators for prediction and planning.",
    category: "DOMAIN",
    tags: ["Planning", "Simulation"],
    linkUrl: "#research",
  },
  {
    id: "discovery",
    title: "AUTONOMOUS DISCOVERY",
    subtitle: "Systems that generate and test their own hypotheses.",
    category: "DOMAIN",
    tags: ["Agents", "Discovery"],
    linkUrl: "#research",
  },
];

export function ShowcaseCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    // Desktop: pin + horizontal scrub. Mobile: native swipe (overflow-x-auto).
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { x: 0 });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="syn-section relative border-t border-white/[0.06] bg-syn-surface overflow-hidden"
      aria-labelledby="showcase-heading"
    >
      <div className="container-syn pt-28 pb-14 lg:pt-36">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          PROGRAMS & DOMAINS
        </p>
        <SplitHeading
          as="h2"
          id="showcase-heading"
          text="One lab. Many directions."
          mode="lines"
          stagger={0.1}
          className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-syn-text"
        />
      </div>

      {/* Horizontal track: pinned scrub on desktop, native swipe on mobile */}
      <div className="lg:h-[62vh] lg:flex lg:items-center">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto px-[max(20px,4vw)] pb-10 lg:overflow-visible lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ITEMS.map((item) => (
            <article
              key={item.id}
              className="group relative w-[78vw] max-w-[420px] shrink-0 lg:w-[420px]"
            >
              <a href={item.linkUrl} className="block rounded-xl border border-white/[0.07] bg-syn-surface-2/60 transition-all duration-500 hover:-translate-y-2 hover:border-syn-cyan/40 hover:bg-syn-surface-2">
                {/* Media */}
                <div className="relative aspect-[16/11] overflow-hidden rounded-t-xl">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(ellipse 80% 70% at 30% 30%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(ellipse 70% 60% at 80% 80%, rgba(99,102,241,0.09), transparent 60%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <span className="mono absolute left-4 top-4 rounded-full border border-white/[0.12] bg-black/40 px-3 py-1 text-[9px] tracking-[0.2em] text-syn-text-secondary backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                {/* Content */}
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-syn-text transition-transform duration-500 group-hover:-translate-y-0.5">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-syn-text-secondary">
                    {item.subtitle}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono rounded-full border border-white/[0.09] px-3 py-1 text-[9px] tracking-[0.15em] text-syn-text-muted transition-colors group-hover:border-syn-cyan/40 group-hover:text-syn-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}

          {/* End spacer card */}
          <div className="hidden w-24 shrink-0 lg:block" aria-hidden="true" />
        </div>
      </div>

      <div className="container-syn pb-16 lg:pb-24">
        <p className="mono hidden text-[10px] tracking-[0.3em] text-syn-text-muted lg:block">
          KEEP SCROLLING — THE SECTION MOVES SIDEWAYS →
        </p>
        <p className="mono text-[10px] tracking-[0.3em] text-syn-text-muted lg:hidden">
          SWIPE TO EXPLORE →
        </p>
      </div>
    </section>
  );
}
