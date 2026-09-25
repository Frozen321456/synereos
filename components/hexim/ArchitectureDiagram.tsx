import { HEXIM } from "@/content/hexim";
import { Reveal } from "@/components/motion/Reveal";

export function ArchitectureDiagram() {
  return (
    <section
      id="systems"
      className="section-pad border-t border-white/[0.06] bg-syn-surface"
      aria-labelledby="arch-title"
    >
      <div className="container-syn">
        <Reveal>
          <p className="mono mb-4 text-[11px] tracking-[0.3em] text-syn-text-muted">
            HEXIM ARCHITECTURE
          </p>
          <h2
            id="arch-title"
            className="max-w-2xl text-[clamp(1.75rem,4vw,3rem)] leading-tight font-medium tracking-tight text-syn-text"
          >
            Signal flows through representation, computation, and runtime.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col items-center gap-0" role="list">
          {HEXIM.architecture.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 150} className="w-full max-w-md">
              <div role="listitem">
                <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-syn-surface-2 px-6 py-5">
                  <span className="mono text-[13px] tracking-[0.2em] text-syn-text">
                    {stage.label}
                  </span>
                  <span className="mono text-[11px] text-syn-text-muted">
                    0{i + 1}
                  </span>
                </div>
                {i < HEXIM.architecture.length - 1 && (
                  <div
                    className="flex justify-center py-1"
                    aria-hidden="true"
                  >
                    <span className="arch-signal mono text-sm text-syn-cyan">
                      ↓
                    </span>
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
