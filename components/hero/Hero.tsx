"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as SplitTextReact, SplitTextReveal } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const Particles = dynamic(() => import("@/components/react-bits/Particles"), { ssr: false });

const HERO_LINES = ["FROM ANSWERING", "QUESTIONS TO", "INVESTIGATING", "THEM."];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const heroEl = heroRef.current;
    const contentEl = contentRef.current;
    if (!heroEl || !contentEl) return;

    const ctx = gsap.context(() => {
      // Hero content entrance
      gsap.fromTo(
        contentEl.querySelectorAll(".hero-line"),
        { opacity: 0, y: 60, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.4,
        }
      );

      // Subtitle fade
      gsap.fromTo(
        contentEl.querySelector(".hero-subtitle"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 1.2,
        }
      );

      // CTA buttons
      gsap.fromTo(
        contentEl.querySelectorAll(".hero-cta"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          delay: 1.4,
        }
      );

      // Scroll indicator
      gsap.fromTo(
        contentEl.querySelector(".scroll-indicator"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 1.8,
        }
      );

      // Subtle background zoom on scroll
      const particlesEl = heroEl.querySelector(".particles-bg");
      if (particlesEl) {
        gsap.to(particlesEl, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroEl);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="syn-section relative flex min-h-screen flex-col overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Particles */}
      <div className="particles-bg absolute inset-0 -z-10" aria-hidden="true">
        <Particles
          particleCount={120}
          particleSpread={6}
          speed={0.06}
          particleBaseSize={1.4}
          moveParticlesOnHover={true}
          particleHoverFactor={0.3}
          alphaParticles={true}
          disableRotation={false}
          particleColors={["#38BDF8", "#6366F1", "#F5F7FA"]}
        />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-20" aria-hidden="true" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)'
      }} />

      <div ref={contentRef} className="container-syn relative flex flex-1 flex-col justify-center pt-20 pb-16">
        <SplitTextReact
          text="SYNEREOS"
          tag="h1"
          className="sr-only"
          from="chars"
          revealType="clip"
          stagger={0.04}
          duration={1.6}
          delay={0.2}
        />

        <div
          aria-hidden="true"
          className="hero-content space-y-6"
        >
          {HERO_LINES.map((line, i) => (
            <SplitTextReveal
              key={line}
              className="hero-line block"
              from="words"
              revealType="clip"
              stagger={0.06}
              duration={1.2}
              delay={0.4 + i * 0.1}
            >
              {line}
            </SplitTextReveal>
          ))}

          <p className="hero-subtitle max-w-xl text-base leading-relaxed text-syn-text-secondary md:text-lg">
            An independent research lab investigating intelligence as a closed loop —
            experience, prediction, surprise, experiment, learning, memory.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              className="hero-cta mono border border-white/[0.15] px-8 py-4 text-[11px] tracking-[0.25em] text-syn-text transition-all duration-300 hover:border-syn-cyan hover:text-syn-cyan hover:bg-white/[0.03]"
            >
              ENTER THE LAB
            </MagneticButton>
            <MagneticButton
              className="hero-cta mono px-8 py-4 text-[11px] tracking-[0.25em] text-syn-text-secondary transition-colors duration-300 hover:text-syn-text"
            >
              HEXIM →
            </MagneticButton>
          </div>

          <div className="scroll-indicator flex flex-col items-center gap-2 mt-8 text-syn-text-muted/50">
            <span className="mono text-[10px] tracking-[0.3em]">SCROLL TO EXPLORE</span>
            <div className="relative w-px h-16 bg-gradient-to-b from-syn-cyan/50 to-transparent">
              <div className="absolute inset-x-0 bottom-0 h-2 bg-syn-cyan animate-[pulse_2s_ease-in-out_infinite]" style={{ transformOrigin: "bottom" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}