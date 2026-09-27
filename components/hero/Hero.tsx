"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Background subtle zoom on scroll
      if (bg) {
        gsap.to(bg, {
          scale: 1.18,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // CTA + meta entrance
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.9,
        }
      );

      // Scroll cue
      gsap.fromTo(".hero-cue", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.6 });
      gsap.to(".hero-cue-bar", {
        scaleY: 0.2,
        transformOrigin: "top",
        duration: 1.2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-svh min-h-[560px] flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background media container — subtle zoom on scroll */}
      <div ref={bgRef} className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(99,102,241,0.08), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
            maskImage:
              "radial-gradient(ellipse 80% 65% at 50% 45%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 65% at 50% 45%, black 25%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-syn relative flex flex-1 flex-col justify-end pb-14">
        <p className="mono hero-fade text-[11px] tracking-[0.35em] text-syn-text-muted">
          SYNEREOS — INDEPENDENT RESEARCH LAB
        </p>

        <SplitHeading
          as="h1"
          text={"From answering\nquestions to\ninvestigating them."}
          mode="lines"
          delay={0.25}
          stagger={0.14}
          duration={1.4}
          className="mt-6 max-w-5xl text-[clamp(3rem,9vw,8.5rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-syn-text"
        />

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-6">
          <MagneticButton className="mono cursor-pointer border border-white/20 text-[11px] tracking-[0.25em] text-syn-text transition-colors duration-300 hover:border-syn-cyan hover:text-syn-cyan">
            <a href="#story" className="block px-8 py-4">
              ENTER THE LAB
            </a>
          </MagneticButton>
          <a
            href="#programs"
            className="mono link-line text-[11px] tracking-[0.25em] text-syn-text-secondary transition-colors hover:text-syn-text"
          >
            HEXIM →
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="hero-cue pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="mono text-[9px] tracking-[0.35em] text-syn-text-muted">SCROLL</span>
        <div className="h-14 w-px overflow-hidden bg-white/[0.08]">
          <div className="hero-cue-bar h-full w-px bg-syn-cyan" />
        </div>
      </div>
    </section>
  );
}
