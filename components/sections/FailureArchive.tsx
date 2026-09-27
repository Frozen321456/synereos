"use client";

import { EXPERIMENTS } from "@/content/research";
import { Reveal } from "@/components/motion/Reveal";

export function FailureArchive() {
  const failures = EXPERIMENTS.filter((e) => e.status === "FAILED" || e.status === "INCONCLUSIVE");

  return (
    <section className="syn-section section-pad border-t border-white/[0.06] bg-syn-surface" aria-labelledby="fail-title">
      <div className="container-syn">
        <Reveal>
          <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">FAILURE ARCHIVE</p>
          <h2 id="fail-title" className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] leading-tight font-semibold tracking-tight text-syn-text">
            Research doesn't only produce successes.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-syn-text-secondary">
            Failed experiments, rejected hypotheses, and unresolved problems are part of the record.
          </p>
        </Reveal>

        <ul className="mt-16 space-y-8">
          {failures.map((f, i) => (
            <Reveal key={f.id} delay={i * 100}>
              <li className="rounded-xl border border-red-500/20 bg-syn-surface-2/50 p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="mono text-[12px] tracking-[0.15em] text-red-300">{f.id}</span>
                  <span className="mono text-[11px] tracking-[0.2em] text-red-300">{f.status}</span>
                </div>
                <h3 className="mono mt-3 text-[15px] tracking-[0.12em] text-syn-text">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-syn-text-secondary">{f.question}</p>
                {f.limitation && (
                  <p className="mt-4 border-l-2 border-red-500/30 pl-4 text-sm italic text-syn-text-secondary">
                    Limitation: {f.limitation}
                  </p>
                )}
                {f.nextQuestion && (
                  <p className="mono mt-4 text-[12px] tracking-[0.12em] text-syn-cyan">
                    NEXT → {f.nextQuestion}
                  </p>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
