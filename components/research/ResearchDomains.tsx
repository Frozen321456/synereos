"use client";

import dynamic from "next/dynamic";
import { RESEARCH_DOMAINS } from "@/content/research";

const MagicBento = dynamic(() => import("@/components/react-bits/MagicBento"), { ssr: false });

export function ResearchDomains() {
  return (
    <section id="research" className="syn-section section-pad border-t border-white/[0.06] bg-syn-surface" aria-labelledby="domains-title">
      <div className="container-syn">
        <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">RESEARCH DOMAINS</p>
        <h2 id="domains-title" className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] leading-tight font-semibold tracking-tight text-syn-text">
          Seven active fronts of inquiry.
        </h2>

        <div className="mt-16">
          <MagicBento
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={360}
            particleCount={10}
            glowColor="56, 189, 248"
            cards={RESEARCH_DOMAINS.map((d) => ({
              color: "#04060a",
              title: d.title,
              description: d.copy,
              label: d.index,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
