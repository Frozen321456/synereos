"use client";

import dynamic from "next/dynamic";
import { HEXIM } from "@/content/hexim";
import { Reveal } from "@/components/motion/Reveal";

const TextPressure = dynamic(() => import("@/components/react-bits/TextPressure"), { ssr: false });
const SpotlightCard = dynamic(() => import("@/components/react-bits/SpotlightCard"), { ssr: false });
const Threads = dynamic(() => import("@/components/react-bits/Threads"), { ssr: false });

export function HeximFeature() {
  return (
    <section id="hexim" className="syn-section section-pad" aria-labelledby="hexim-title">
      <div className="fx-layer opacity-30" aria-hidden="true">
        <Threads color={[0.22, 0.74, 0.97]} amplitude={1.2} distance={0} enableMouseInteraction={true} />
      </div>

      <div className="container-syn">
        <Reveal>
          <p className="mono mb-8 text-[11px] tracking-[0.3em] text-syn-text-muted">
            {HEXIM.eyebrow}
          </p>
        </Reveal>

        <SpotlightCard className="rounded-2xl border border-white/[0.08] bg-syn-surface/60 p-8 backdrop-blur-sm md:p-16" spotlightColor="rgba(56, 189, 248, 0.12)">
          <h2
            id="hexim-title"
            className="block h-[120px] w-full max-w-3xl md:h-[200px]"
          >
            <TextPressure
              text={HEXIM.title}
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={false}
              textColor="#F5F7FA"
              strokeColor="#38BDF8"
              minFontSize={42}
              className="h-full w-full"
            />
          </h2>

          <p className="mt-6 text-lg text-syn-cyan md:text-xl">{HEXIM.subtitle}</p>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-5">
            {HEXIM.pillars.map((pillar) => (
              <div key={pillar} className="border-t border-white/[0.1] pt-4">
                <p className="mono text-[12px] leading-snug tracking-[0.15em] text-syn-text">
                  {pillar}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-md text-base leading-relaxed text-syn-text-secondary">
            {HEXIM.copy}
          </p>

          <a
            href={HEXIM.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mono mt-10 inline-block border border-white/[0.15] px-7 py-3.5 text-[11px] tracking-[0.25em] text-syn-text transition-colors duration-200 hover:border-syn-cyan hover:text-syn-cyan"
          >
            {HEXIM.cta.label}
          </a>
        </SpotlightCard>
      </div>
    </section>
  );
}
