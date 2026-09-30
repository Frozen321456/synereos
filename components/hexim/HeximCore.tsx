"use client";

import { SplitHeading } from "@/components/ui/SplitText";
import { HEXIM } from "@/content/hexim";

export function HeximCore() {
  return (
    <section
      id="hexim-core"
      className="syn-section relative border-t border-white/[0.06]"
      aria-labelledby="hexim-core-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {HEXIM.core.efficientIntelligence.title.toUpperCase()} / {HEXIM.core.hierarchicalExecution.title.toUpperCase()} / {HEXIM.core.modelBeyondParameters.title.toUpperCase()}
        </p>

        <SplitHeading
          as="h2"
          id="hexim-core-heading"
          text="HEXIM Core"
          mode="lines"
          stagger={0.1}
          duration={1.2}
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        />

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {HEXIM.subtitle}
        </p>

        {/* Three core principles */}
        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {[
            HEXIM.core.efficientIntelligence,
            HEXIM.core.hierarchicalExecution,
            HEXIM.core.modelBeyondParameters,
          ].map((principle, i) => (
            <article key={principle.title} className="group relative p-8 rounded-xl border border-white/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-syn-cyan/40 hover:bg-syn-surface">
              <span className="mono text-[10px] tracking-[0.3em] text-syn-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-syn-text">
                {principle.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-syn-text-secondary">
                {principle.copy}
              </p>
              <div className="mt-8 h-px bg-white/[0.06] group-hover:bg-syn-cyan/40 group-hover:w-full transition-all duration-500 w-1/4" />
            </article>
          ))}
        </div>

        {/* Experience Loop visual */}
        <div className="mt-28 border-t border-white/[0.06] pt-20">
          <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
            EXPERIENCE LOOP
          </p>

          <SplitHeading
            as="h3"
            text="Intelligence as a closed loop"
            mode="lines"
            stagger={0.1}
            className="max-w-2xl text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-syn-text"
          />

          <div className="mt-12 flex flex-wrap gap-3">
            {HEXIM.experienceLoop.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.1] bg-syn-surface text-syn-cyan mono text-[10px] tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-syn-text">{step}</span>
                {i < HEXIM.experienceLoop.length - 1 && (
                  <span className="text-syn-text-muted">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}