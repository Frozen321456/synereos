"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitHeading } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────
   THREE: Particle Title — SYNEREOS
   ────────────────────────────────────────────── */
function ParticleTitle() {
  const ref = useRef<THREE.Points>(null);
  const particlesRef = useRef<Float32Array | null>(null);
  const originalPosRef = useRef<Float32Array | null>(null);
  const initialized = useRef(false);

  // Build geometry programmatically - avoids JSX typing issues
  useLayoutEffect(() => {
    if (initialized.current || !ref.current) return;
    
    // Generate points from text via canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = 1024;
    canvas.height = 256;
    ctx.fillStyle = "white";
    ctx.font = "bold 180px Inter, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SYNEREOS", canvas.width / 2, canvas.height / 2);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const positions: number[] = [];
    const step = 4;
    for (let y = 0; y < canvas.height; y += step) {
      for (let x = 0; x < canvas.width; x += step) {
        const idx = (y * canvas.width + x) * 4;
        if (imageData.data[idx + 3] > 128) {
          // Normalize to -1..1 range
          positions.push((x / canvas.width - 0.5) * 2.2);
          positions.push(-(y / canvas.height - 0.5) * 0.6);
          positions.push((Math.random() - 0.5) * 0.3);
        }
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(positions);
    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    
    // Random sizes for variation
    const sizes = new Float32Array(posArray.length / 3);
    for (let i = 0; i < sizes.length; i++) sizes[i] = Math.random() * 0.5 + 0.5;
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    
    // Store original positions for animation
    const original = new Float32Array(posArray.length);
    posArray.forEach((v, i) => { original[i] = v; });
    originalPosRef.current = original;
    particlesRef.current = posArray;
    
    const material = new THREE.PointsMaterial({
      size: 0.018,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      color: 0x38BDF8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    ref.current.geometry = geometry;
    ref.current.material = material;
    initialized.current = true;
  }, []);

  useFrame(() => {
    if (!ref.current || !particlesRef.current || !originalPosRef.current) return;
    const t = performance.now() * 0.001;
    const positions = particlesRef.current;
    const original = originalPosRef.current;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = original[i] + Math.sin(t * 0.7 + i * 0.01) * 0.008;
      positions[i + 1] = original[i + 1] + Math.cos(t * 0.5 + i * 0.01) * 0.008;
      positions[i + 2] = original[i + 2] + Math.sin(t * 0.3 + i * 0.01) * 0.006;
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
            pos[i + 2] += 0.02;
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
    />
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

        <div className="mt-6 relative h-[120px] w-full max-w-5xl">
          <Canvas
            camera={{ position: [0, 0, 2.5], fov: 35 }}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[1, 1, 2]} intensity={0.8} />
            <ParticleTitle />
          </Canvas>
        </div>

        <SplitHeading
          as="h1"
          id="hero-heading"
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