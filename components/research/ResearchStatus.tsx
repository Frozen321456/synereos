"use client";

import dynamic from "next/dynamic";
import { EXPERIMENTS, type Experiment } from "@/content/research";

const AnimatedList = dynamic(() => import("@/components/react-bits/AnimatedList"), { ssr: false });

const STATUS_GLYPH: Record<Experiment["status"], string> = {
  ACTIVE: "◉",
  COMPLETE: "✓",
  FAILED: "✗",
  INCONCLUSIVE: "~",
  INVESTIGATING: "◌",
};

function ExperimentCard({ exp }: { exp: Experiment }) {
  return (
    <article className="rounded-xl border border-white/[0.08] bg-syn-surface-2/70 p-6 backdrop-blur-sm">
      <div className="flex items-baseline justify-between gap-4">
        <span className="mono text-[12px] tracking-[0.15em] text-syn-cyan">{exp.id}</span>
        <span className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary">
          {STATUS_GLYPH[exp.status]} {exp.status}
        </span>
      </div>
      <h3 className="mono mt-3 text-[15px] tracking-[0.12em] text-syn-text">{exp.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-syn-text-secondary">{exp.question}</p>
      <ul className="mt-4 space-y-2">
        {exp.results.map((r, i) => (
          <li key={i} className="mono text-[12px] text-syn-text-secondary">
            {r.kind === "measured" && (
              <>
                <span className="text-syn-cyan">MEASURED</span> · {r.label}: <span className="text-syn-text">{r.value}</span>
              </>
            )}
            {r.kind === "failed" && (
              <>
                <span className="text-red-400">FAILED</span> · {r.label} — {r.reason}
              </>
            )}
            {r.kind === "not-measured" && (
              <>
                <span className="text-syn-text-muted">NOT MEASURED</span> · {r.label}
              </>
            )}
            {r.kind === "inconclusive" && (
              <>
                <span className="text-amber-300">INCONCLUSIVE</span> · {r.label} — {r.note}
              </>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ResearchStatusSection() {
  return (
    <section id="evidence" className="syn-section section-pad border-t border-white/[0.06]" aria-labelledby="status-title">
      <div className="container-syn">
        <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">EVIDENCE</p>
        <h2
          id="status-title"
          className="mt-6 max-w-3xl text-[clamp(2rem,5vw,4.5rem)] leading-tight font-semibold tracking-tight text-syn-text"
        >
          Claims are cheap. Measurements are not.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-syn-text-secondary">
          Each experiment carries its measured value, explicit failure, or honest absence of data.
        </p>

        <div className="mt-16">
          <AnimatedList
            items={EXPERIMENTS.map((e) => e.id)}
            renderItem={(id: string) => {
              const exp = EXPERIMENTS.find((x) => x.id === id);
              return exp ? <ExperimentCard exp={exp} /> : null;
            }}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={false}
          />
        </div>
      </div>
    </section>
  );
}
