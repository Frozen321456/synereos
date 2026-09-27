"use client";

import dynamic from "next/dynamic";
import { RESEARCH_SIGNAL } from "@/content/research";

const BlurText = dynamic(() => import("@/components/react-bits/BlurText"), { ssr: false });
const Waves = dynamic(() => import("@/components/react-bits/Waves"), { ssr: false });

export function ResearchSignal() {
  return (
    <section className="syn-section vignette relative border-y border-white/[0.06] bg-syn-surface" aria-label="Research signal">
      <div className="fx-layer opacity-40" aria-hidden="true">
        <Waves lineColor="rgba(56,189,248,0.28)" backgroundColor="transparent" waveSpeedX={0.0125} waveSpeedY={0.005} waveAmpX={32} waveAmpY={14} friction={0.92} tension={0.008} />
      </div>
      <div className="container-syn py-14">
        <p className="mono mb-10 text-[11px] tracking-[0.3em] text-syn-text-muted">
          SYNEREOS RESEARCH SYSTEM
        </p>
        <dl className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
          {RESEARCH_SIGNAL.map((row, i) => (
            <div key={row.label} className="border-t border-white/[0.08] py-5 lg:flex lg:flex-col lg:gap-2">
              <dt className="mono text-[11px] tracking-[0.15em] text-syn-text-muted">{row.label}</dt>
              <dd className="mono mt-1 text-[15px] tracking-[0.12em] text-syn-text">
                <BlurText text={row.value} delay={i * 90} animateBy="letters" direction="top" />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
