"use client";

import dynamic from "next/dynamic";
import { HEXIM } from "@/content/hexim";
import { Reveal } from "@/components/motion/Reveal";

const Lightning = dynamic(() => import("@/components/react-bits/Lightning"), { ssr: false });
const FuzzyText = dynamic(() => import("@/components/react-bits/FuzzyText"), { ssr: false });

export function ArchitectureDiagram() {
  return (
    <section
      id="architecture"
      className="syn-section vignette section-pad border-t border-white/[0.06] bg-syn-surface"
      aria-labelledby="arch-title"
    >
      <div className="fx-layer opacity-50" aria-hidden="true">
        <Lightning hue={220} xOffset={0.5} speed={0.4} intensity={0.6} size={1.2} />
      </div>

      <div className="container-syn">
        <Reveal>
          <p className="mono mb-4 text-[11px] tracking-[0.3em] text-syn-text-muted">
            HEXIM EXPERIENCE LOOP
          </p>
          <h2
            id="arch-title"
            className="max-w-3xl text-[clamp(1.75rem,4vw,3.25rem)] leading-tight font-medium tracking-tight text-syn-text"
          >
            Intelligence as a living cycle.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col items-center gap-0" role="list">
          {HEXIM.experienceLoop.map((stage, i) => (
            <Reveal key={stage} delay={i * 130} className="w-full max-w-xl">
              <div role="listitem">
                <div className="group relative flex items-center justify-between rounded-lg border border-white/[0.1] bg-syn-surface-2/70 px-6 py-5 backdrop-blur-sm transition-colors duration-300 hover:border-syn-cyan/60">
                  <span className="mono text-[14px] tracking-[0.2em] text-syn-text">
                    <FuzzyText fontSize={16} color="#F5F7FA" baseIntensity={0.05} hoverIntensity={0.4} enableHover={true}>
                      {stage}
                    </FuzzyText>
                  </span>
                  <span className="mono text-[11px] text-syn-text-muted">
                    0{i + 1}
                  </span>
                </div>
                {i < HEXIM.experienceLoop.length - 1 && (
                  <div className="flex justify-center py-1" aria-hidden="true">
                    <span className="arch-signal mono text-sm text-syn-cyan">↓</span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
