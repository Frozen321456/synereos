"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/Magnetic";
import { HEXIM } from "@/content/hexim";

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────
   THREE: Infinity Symbol / Neural Flow
   ────────────────────────────────────────────── */
function InfinityFlow() {
  const flowRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !flowRef.current) return;
    const group = flowRef.current;

    // Create two torus rings forming infinity symbol
    const torusGeom = new THREE.TorusGeometry(1.5, 0.15, 16, 64);
    const particleGeom = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const t = (i / particleCount) * Math.PI * 4;
      const r = 1.5;
      const tube = 0.15;
      // Figure-8 parametric
      const u = t % (Math.PI * 2);
      const v = Math.floor(t / (Math.PI * 2)) * Math.PI;
      
      const x = r * Math.cos(u);
      const y = r * Math.sin(u) * Math.cos(v);
      const z = r * Math.sin(u) * Math.sin(v) * 0.5;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Color gradient
      colors[i * 3] = 0.22;
      colors[i * 3 + 1] = 0.74;
      colors[i * 3 + 2] = 0.97;
      
      sizes[i] = Math.random() * 2 + 1;
      phases[i] = Math.random() * Math.PI * 2;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    particleGeom.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    particleGeom.setAttribute("phase", new THREE.BufferAttribute(phases, 1));

    const particleMat = new THREE.PointsMaterial({
      size: 0.03,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    group.add(particles);
    particlesRef.current.push(particles);

    // Second flow (reverse direction)
    const particles2 = particles.clone();
    particles2.rotation.y = Math.PI;
    group.add(particles2);
    particlesRef.current.push(particles2);

    initialized.current = true;
  }, []);

  useFrame((state) => {
    if (!flowRef.current) return;
    const t = state.clock.getElapsedTime();
    
    flowRef.current.rotation.y = t * 0.05;
    flowRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    
    particlesRef.current.forEach((particles, i) => {
      const positions = particles.geometry.attributes.position.array;
      const phases = particles.geometry.attributes.phase.array;
      
      for (let j = 0; j < positions.length; j += 3) {
        const phase = phases[j / 3];
        const speed = 0.5 + (i * 0.3);
        const wave = Math.sin(t * speed + phase) * 0.05;
        positions[j + 1] += wave; // Y wave
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      particles.rotation.y += (i === 0 ? 0.001 : -0.001);
    });
  });

  return <group ref={flowRef} />;
}

/* ──────────────────────────────────────────────
   HEXIM INFINITY SECTION
   ────────────────────────────────────────────── */
export function HeximInfinity() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (bg) {
        gsap.to(bg, {
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Scroll progress indicator
        gsap.to(".infinity-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        // Flow text reveal
        gsap.fromTo(
          ".infinity-flow-text",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".infinity-flow-text",
              start: "top 85%",
              once: true,
            },
          }
        );
      });
      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hexim-infinity"
      ref={sectionRef}
      className="syn-section relative border-t border-white/[0.06] bg-syn-surface/50 overflow-hidden"
      aria-labelledby="infinity-heading"
    >
      <div ref={bgRef} className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(99,102,241,0.06), transparent 60%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-6 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {HEXIM.infinity.eyebrow}
        </p>

        <SplitHeading
          as="h1"
          id="infinity-heading"
          text={HEXIM.infinity.title}
          mode="lines"
          stagger={0.1}
          duration={1.2}
          className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-syn-text"
        />

        <p className="mono text-[11px] tracking-[0.2em] text-syn-cyan mb-8">
          {HEXIM.infinity.subtitle}
        </p>

        {/* 3D Infinity Flow */}
        <div className="mt-16 relative h-[500px] w-full max-w-4xl mx-auto">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 35 }}
            gl={{ antialias: true, alpha: true }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 3]} intensity={0.8} />
            <InfinityFlow />
          </Canvas>
        </div>

        {/* Flow description */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[
            { icon: "→", title: "Transformer +", desc: "Attention & MoE for efficient representation" },
            { icon: "→", title: "Memory +", desc: "Episodic, semantic, working, compressed" },
            { icon: "→", title: "World Model +", desc: "Internal simulators for prediction" },
            { icon: "→", title: "Learning +", desc: "Experience-driven adaptation" },
            { icon: "→", title: "Planning +", desc: "Goal-directed reasoning" },
            { icon: "→", title: "Self-Model +", desc: "Meta-cognition & introspection" },
            { icon: "→", title: "Experience +", desc: "Closed loop: perception → action → learning" },
          ].map((item, i) => (
            <div key={i} className="infinity-flow-text group relative pl-12">
              <span className="absolute left-0 top-0 text-3xl text-syn-cyan/50 group-hover:text-syn-cyan transition-colors">
                {item.icon}
              </span>
              <p className="mono text-[10px] tracking-[0.2em] text-syn-cyan mb-1">
                {item.title}
              </p>
              <p className="text-sm text-syn-text-secondary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Goal */}
        <div className="mt-24 border-t border-white/[0.06] pt-16">
          <p className="mono mb-4 text-[11px] tracking-[0.35em] text-syn-text-muted">
            GOAL
          </p>
          <p className="max-w-3xl text-xl font-semibold text-syn-text leading-relaxed">
            {HEXIM.infinity.goal}
          </p>
        </div>

        {/* Progress bar at bottom */}
        <div className="mt-20 relative h-px w-full bg-white/[0.06] overflow-hidden">
          <div className="infinity-progress absolute top-0 left-0 h-full bg-syn-cyan transform origin-left" style={{ transform: "scaleX(0)" }} />
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