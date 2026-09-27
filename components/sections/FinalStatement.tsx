"use client";

import dynamic from "next/dynamic";

const FallingText = dynamic(() => import("@/components/react-bits/FallingText"), { ssr: false });

export function FinalStatement() {
  return (
    <section className="syn-section vignette section-pad border-t border-white/[0.06] bg-syn-surface" aria-labelledby="final-title">
      <div className="container-syn">
        <h2 id="final-title" className="sr-only">The next architecture isn't written yet.</h2>
        <div aria-hidden="true" className="h-[280px] w-full md:h-[380px]">
          <FallingText
            text="THE NEXT ARCHITECTURE ISN'T WRITTEN YET."
            highlightWords={["NEXT", "ARCHITECTURE", "WRITTEN"]}
            highlightClass="text-syn-cyan"
            trigger="auto"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.4}
            fontSize="4rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
        <p className="mono mt-10 text-center text-[12px] tracking-[0.3em] text-syn-text-muted">
          SYNEREOS — INDEPENDENT RESEARCH LABORATORY
        </p>
      </div>
    </section>
  );
}
