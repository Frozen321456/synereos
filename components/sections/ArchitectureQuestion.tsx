"use client";

import dynamic from "next/dynamic";
import { Reveal } from "@/components/motion/Reveal";

const TrueFocus = dynamic(() => import("@/components/react-bits/TrueFocus"), { ssr: false });
const ParticleText = dynamic(() => import("@/components/react-bits/ParticleText"), { ssr: false });

const CONCEPTS = ["Representation.", "Memory.", "Computation.", "Runtime.", "Adaptation."];

export function ArchitectureQuestion() {
  return (
    <section className="syn-section section-pad border-t border-white/[0.06]" aria-labelledby="question-title">
      <div className="container-syn">
        <Reveal>
          <div className="max-w-5xl">
            <h2 id="question-title" className="sr-only">
              What if the limitation isn't the model — but the architecture around it?
            </h2>
            <div aria-hidden="true" className="text-[clamp(2rem,5.5vw,5rem)] leading-[1.1] font-semibold tracking-tight text-syn-text">
              <ParticleText
                text="What if the limitation isn't the model — but the architecture around it?"
                fontSize={64}
                particleCount={4000}
                particleSize={1.5}
                particleColor="#F5F7FA"
                backgroundColor="transparent"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={250}>
          <div className="mt-14">
            <TrueFocus
              sentence={CONCEPTS.join(" ")}
              manualMode={false}
              blurAmount={5}
              borderColor="#38BDF8"
              glowColor="rgba(56, 189, 248, 0.6)"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
