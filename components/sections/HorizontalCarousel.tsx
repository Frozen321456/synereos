"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl?: string;
  linkUrl?: string;
  tags: string[];
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: "hexim",
    title: "HEXIM",
    subtitle: "Flagship experiential intelligence architecture",
    category: "ACTIVE RESEARCH",
    tags: ["Representation", "Memory", "On-Device"],
    linkUrl: "#hexim",
  },
  {
    id: "tfsr",
    title: "TFSR",
    subtitle: "Experimental learning and representation research",
    category: "EXPERIMENTAL",
    tags: ["Learning", "Representation"],
    linkUrl: "#programs",
  },
  {
    id: "jev-mobile",
    title: "JEV-MOBILE",
    subtitle: "Compact structured decision intelligence",
    category: "EXPERIMENTAL",
    tags: ["Decision", "Mobile"],
    linkUrl: "#programs",
  },
  {
    id: "efficient-ai",
    title: "EFFICIENT INTELLIGENCE",
    subtitle: "Same reasoning under hard compute ceilings",
    category: "DOMAIN",
    tags: ["Compute", "Memory"],
    linkUrl: "#research",
  },
  {
    id: "world-models",
    title: "WORLD MODELS",
    subtitle: "Internal simulators for prediction and planning",
    category: "DOMAIN",
    tags: ["Planning", "Simulation"],
    linkUrl: "#research",
  },
  {
    id: "autonomous",
    title: "AUTONOMOUS DISCOVERY",
    subtitle: "Systems that generate and test hypotheses",
    category: "DOMAIN",
    tags: ["Agents", "Discovery"],
    linkUrl: "#research",
  },
];

export function HorizontalCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      const cards = track.querySelectorAll(".carousel-card");
      
      // Horizontal scroll scrub
      gsap.to(cards, {
        xPercent: -100 * (CAROUSEL_ITEMS.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: track,
          start: "top center",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setIsScrolling(self.progress > 0 && self.progress < 1);
          },
        },
      });

      // Card entrance animations
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: track,
          start: "top 80%",
        },
      });
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <section className="syn-section relative" aria-labelledby="carousel-title">
      <div className="container-syn">
        <div className="mb-16">
          <span className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">PROGRAMS & DOMAINS</span>
          <h2 id="carousel-title" className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-semibold tracking-tight text-syn-text">
            Scroll to explore
          </h2>
        </div>

        <div 
          ref={trackRef} 
          className="relative flex gap-8 pb-20 overflow-hidden"
          style={{ width: "max-content" }}
        >
          {CAROUSEL_ITEMS.map((item, index) => (
            <article
              key={item.id}
              className="carousel-card relative flex-shrink-0 w-[380px] lg:w-[420px]"
              style={{ flexShrink: 0 }}
            >
              {/* Card Background */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-syn-surface-2/50 border border-white/[0.06] transition-all duration-500 group-hover:border-syn-cyan/50 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-syn-cyan/5 via-transparent to-syn-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted/50">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-6 space-y-4">
                <span className="mono text-[10px] tracking-[0.25em] text-syn-cyan">{item.category}</span>
                <h3 className="text-[clamp(1.5rem,2.5vw,2rem)] leading-tight font-semibold tracking-tight text-syn-text">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-syn-text-secondary">{item.subtitle}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="mono text-[10px] tracking-[0.15em] px-3 py-1 border border-white/[0.08] rounded-full text-syn-text-muted/80 hover:text-syn-cyan hover:border-syn-cyan/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {item.linkUrl && (
                  <MagneticButton
                    onClick={() => {}}
                    className="mt-4 inline-flex items-center gap-2 mono text-[11px] tracking-[0.2em] text-syn-text-secondary hover:text-syn-text transition-colors"
                  >
                    EXPLORE
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </MagneticButton>
                )}
              </div>
            </article>
          ))}

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-syn-text-muted/50">
            <span className="mono text-[10px] tracking-[0.2em]">SCROLL HORIZONTALLY</span>
            <div className="w-px h-12 bg-gradient-to-b from-syn-cyan/50 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}