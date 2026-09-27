"use client";

import dynamic from "next/dynamic";
import { Reveal } from "@/components/motion/Reveal";

const TechText = dynamic(() => import("@/components/react-bits/TechText"), { ssr: false });
const Particles = dynamic(() => import("@/components/react-bits/Particles"), { ssr: false });

const LINES = ["FROM ANSWERING", "QUESTIONS TO", "INVESTIGATING", "THEM."];

export function Hero() {
  return (
    <section
      className="syn-section relative flex min-h-dvh flex-col overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="fx-layer" aria-hidden="true">
        <Particles
          particleCount={140}
          particleSpread={8}
          speed={0.08}
          particleBaseSize={1.6}
          moveParticlesOnHover={true}
          particleHoverFactor={0.4}
          alphaParticles={true}
          disableRotation={false}
          particleColors={["#38BDF8", "#6366F1", "#F5F7FA"]}
        />
      </div>

      <div className="container-syn relative flex flex-1 flex-col justify-center pt-28 pb-16">
        <Reveal delay={0}>
          <div className="mb-4 h-[100px] w-full max-w-3xl md:h-[160px] lg:h-[200px]">
            <TechText
              text="SYNEREOS"
              fontSize={180}
              fontWeight={600}
              letterSpacing={-0.02}
              color="#F5F7FA"
              accentColor="#38BDF8"
              reveal="letter"
              reach={220}
              softness={0.7}
              dashLength={4}
              dashGap={2}
              strokeWidth={1.2}
              lineStyle="dashed"
              specks={12}
              selection={true}
              labels={false}
              draggable={true}
              sweep={true}
              speed={0.7}
              className="h-full w-full"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h1 id="hero-title" className="sr-only">
            SYNEREOS — From answering questions to investigating them.
          </h1>
        </Reveal>

        <div
          aria-hidden="true"
          className="text-[clamp(2rem,7vw,5.5rem)] leading-[1.05] font-medium tracking-tight text-syn-text"
        >
          {LINES.map((line, i) => (
            <Reveal key={line} delay={200 + i * 140} className="block">
              <span className="block">{line}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={900}>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-syn-text-secondary md:text-lg">
            An independent research lab investigating intelligence as a closed loop —
            experience, prediction, surprise, experiment, learning, memory.
          </p>
        </Reveal>

        <Reveal delay={1050}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#thesis"
              className="mono border border-white/[0.15] px-7 py-3.5 text-[11px] tracking-[0.25em] text-syn-text transition-colors duration-200 hover:border-syn-cyan hover:text-syn-cyan"
            >
              ENTER THE LAB
            </a>
            <a
              href="#hexim"
              className="mono px-7 py-3.5 text-[11px] tracking-[0.25em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text"
            >
              HEXIM →
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container-syn relative pb-10">
        <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">
          SCROLL TO EXPLORE ↓
        </p>
      </div>
    </section>
  );
}
