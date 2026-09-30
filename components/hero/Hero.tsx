"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/Magnetic";
import { HERO } from "@/content/hero";

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────
   THREE: Particle System — Intelligence organizing
   ────────────────────────────────────────────── */
function IntelligenceParticleSystem() {
  const ref = useRef<THREE.Points>(null);
  const particlesRef = useRef<Float32Array | null>(null);
  const originalPosRef = useRef<Float32Array | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !ref.current) return;
    const geometry = ref.current.geometry;
    const position = geometry.getAttribute("position");
    const count = position.count;
    const original = new Float32Array(count * 3);
    position.array.forEach((v, i) => { original[i] = v; });
    originalPosRef.current = original;
    particlesRef.current = position.array as Float32Array;
    initialized.current = true;
  }, []);

  useFrame(() => {
    if (!ref.current || !particlesRef.current || !originalPosRef.current) return;
    const t = performance.now() * 0.001;
    const positions = particlesRef.current;
    const original = originalPosRef.current;
    // Subtle organization - particles drift toward structure
    for (let i = 0; i < positions.length; i += 3) {
      const noiseX = Math.sin(t * 0.3 + i * 0.01) * 0.02;
      const noiseY = Math.cos(t * 0.2 + i * 0.01) * 0.02;
      const noiseZ = Math.sin(t * 0.1 + i * 0.01) * 0.015;
      // Gentle pull toward center over time
      const organize = Math.min(t * 0.05, 0.3);
      positions[i] = original[i] * (1 - organize) + noiseX;
      positions[i + 1] = original[i + 1] * (1 - organize) + noiseY;
      positions[i + 2] = original[i + 2] * (1 - organize) + noiseZ;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points
      ref={ref}
      onPointerOver={() => {
        if (ref.current && particlesRef.current) {
          const pos = particlesRef.current;
          for (let i = 0; i < pos.length; i += 3) {
            pos[i + 2] += 0.03;
          }
          ref.current.geometry.attributes.position.needsUpdate = true;
        }
      }}
      onPointerOut={() => {
        if (ref.current && originalPosRef.current && particlesRef.current) {
          particlesRef.current.set(originalPosRef.current);
          ref.current.geometry.attributes.position.needsUpdate = true;
        }
      }}
    >
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={0}
          itemSize={3}
          array={new Float32Array(0)}
          args={[new Float32Array(0), 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          count={0}
          itemSize={1}
          array={new Float32Array(0)}
          args={[new Float32Array(0), 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.018}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        color="#38BDF8"
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ──────────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (bg) {
        gsap.to(bg, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.6,
        }
      );

      gsap.fromTo(".hero-cue", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.8 });
      gsap.to(".hero-cue-bar", {
        scaleY: 0.2,
        transformOrigin: "top",
        duration: 1.4,
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
      className="relative flex h-svh min-h-[600px] flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div ref={bgRef} className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(99,102,241,0.06), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            maskImage:
              "radial-gradient(ellipse 80% 65% at 50% 45%, black 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 65% at 50% 45%, black 25%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-syn relative flex flex-1 flex-col justify-end pb-16 lg:pb-24">
        <p className="mono hero-fade text-[11px] tracking-[0.35em] text-syn-text-muted">
          {HERO.eyebrow} — INDEPENDENT AI RESEARCH LAB
        </p>

        {/* THREE Particle System — Intelligence organizing */}
        <div className="mt-8 relative h-[140px] w-full max-w-6xl">
          <Canvas
            camera={{ position: [0, 0, 2.5], fov: 35 }}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 2]} intensity={0.7} />
            <IntelligenceParticleSystem />
          </Canvas>
        </div>

        <SplitHeading
          as="h1"
          id="hero-heading"
          text={HERO.headline}
          mode="lines"
          delay={0.2}
          stagger={0.12}
          duration={1.4}
          className="mt-6 max-w-5xl text-[clamp(3rem,8vw,8.5rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-syn-text"
        />

        <p className="hero-fade mt-6 max-w-2xl text-base leading-relaxed text-syn-text-secondary">
          {HERO.subtext}
        </p>

        <div className="hero-fade mt-10 flex flex-wrap items-center gap-6">
          <MagneticButton className="mono cursor-pointer border border-white/20 text-[11px] tracking-[0.25em] text-syn-text transition-colors duration-300 hover:border-syn-cyan hover:text-syn-cyan">
            <a href={HERO.ctaPrimary.href} className="block px-8 py-4">
              {HERO.ctaPrimary.label}
            </a>
          </MagneticButton>
          <a
            href={HERO.ctaSecondary.href}
            className="mono link-line text-[11px] tracking-[0.25em] text-syn-text-secondary transition-colors hover:text-syn-text"
          >
            {HERO.ctaSecondary.label}
          </a>
        </div>

        {/* Status bar */}
        <div className="hero-fade mt-16 flex flex-wrap items-center gap-8 text-[12px] text-syn-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-syn-cyan" aria-hidden="true" />
            <span>{HERO.status.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <span>{HERO.status.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <span className="mono tracking-[0.15em]">{HERO.status.tags.join(" • ")}</span>
          </div>
        </div>
      </div>

      <div
        className="hero-cue pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="mono text-[9px] tracking-[0.35em] text-syn-text-muted">SCROLL</span>
        <div className="h-16 w-px overflow-hidden bg-white/[0.06]">
          <div className="hero-cue-bar h-full w-px bg-syn-cyan" />
        </div>
      </div>
    </section>
  );
}