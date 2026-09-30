"use client";

import { SplitHeading } from "@/components/ui/SplitText";
import { HEXIM } from "@/content/hexim";

export function UnifiedModel() {
  return (
    <section
      id="unified-model"
      className="syn-section relative border-t border-white/[0.06] bg-syn-surface/30"
      aria-labelledby="unified-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          THE UNIFIED MODEL
        </p>

        <SplitHeading
          as="h2"
          id="unified-heading"
          text={HEXIM.infinity.subtitle}
          mode="lines"
          stagger={0.1}
          duration={1.2}
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        />

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {HEXIM.infinity.copy}
        </p>

        {/* Visual: Unified Architecture Flow */}
        <div className="mt-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.06]" aria-hidden="true" />

          {/* Flow: Experience → Perception → HEXIM Core → Action → Experience */}
          <div className="space-y-8">
            {/* Experience Input */}
            <div className="flex items-center justify-center relative z-10">
              <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/[0.07] bg-syn-surface/60 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-syn-cyan/20 flex items-center justify-center">
                  <span className="text-2xl">⬇</span>
                </div>
                <div>
                  <p className="mono text-[10px] tracking-[0.2em] text-syn-cyan">INPUT</p>
                  <p className="text-xl font-medium text-syn-text">Experience</p>
                  <p className="text-sm text-syn-text-secondary">World interaction</p>
                </div>
              </div>
            </div>

            {/* Perception */}
            <div className="flex items-center justify-center relative z-10 -mt-6">
              <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/[0.07] bg-syn-surface/60 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-syn-indigo/20 flex items-center justify-center">
                  <span className="text-2xl">⬇</span>
                </div>
                <div>
                  <p className="mono text-[10px] tracking-[0.2em] text-syn-indigo">PROCESS</p>
                  <p className="text-xl font-medium text-syn-text">Perception</p>
                  <p className="text-sm text-syn-text-secondary">Sensory encoding</p>
                </div>
              </div>
            </div>

            {/* HEXIM Core - Expanded */}
            <div className="relative z-10 -mt-6">
              <div className="p-8 rounded-2xl border border-syn-cyan/30 bg-syn-cyan/[0.03] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="mono text-[10px] tracking-[0.2em] text-syn-cyan">HEXIM CORE</p>
                    <p className="text-2xl font-semibold text-syn-text">Unified Neural Architecture</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-syn-cyan/20 flex items-center justify-center">
                    <span className="text-2xl">⬇</span>
                  </div>
                </div>

                {/* Core components grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
                  {HEXIM.architecture.layers.find(l => l.name === "HEXIM Core")?.children?.map((child, i) => (
                    <div
                      key={child}
                      className="group relative p-4 rounded-xl border border-white/[0.07] bg-syn-surface/60 transition-all duration-300 hover:border-syn-cyan/40 hover:bg-syn-surface"
                    >
                      <span className="mono text-[9px] tracking-[0.15em] text-syn-text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-2 text-sm font-medium text-syn-text">{child}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center justify-center relative z-10 -mt-6">
              <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/[0.07] bg-syn-surface/60 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-2xl">⬇</span>
                </div>
                <div>
                  <p className="mono text-[10px] tracking-[0.2em] text-emerald-500">OUTPUT</p>
                  <p className="text-xl font-medium text-syn-text">Action</p>
                  <p className="text-sm text-syn-text-secondary">World interaction</p>
                </div>
              </div>
            </div>

            {/* Experience Loop Back */}
            <div className="flex items-center justify-center relative z-10 -mt-6">
              <div className="flex items-center gap-4 p-6 rounded-2xl border border-syn-cyan/30 bg-syn-cyan/[0.03] backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-syn-cyan/20 flex items-center justify-center">
                  <span className="text-2xl">↻</span>
                </div>
                <div>
                  <p className="mono text-[10px] tracking-[0.2em] text-syn-cyan">LOOP</p>
                  <p className="text-xl font-medium text-syn-cyan">Experience</p>
                  <p className="text-sm text-syn-text-secondary">Closed loop — continuous adaptation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Goal statement */}
        <div className="mt-24 text-center border-t border-white/[0.06] pt-16">
          <p className="mono mb-4 text-[11px] tracking-[0.35em] text-syn-text-muted">
            GOAL
          </p>
          <p className="text-xl font-semibold text-syn-text max-w-2xl mx-auto">
            {HEXIM.infinity.goal}
          </p>
        </div>
      </div>
    </section>
  );
}