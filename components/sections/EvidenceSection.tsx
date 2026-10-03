"use client";

import { useRef } from "react";
import { homeContent } from "@/content/home";
import { useGsap } from "@/components/ui/Scrolly";

type Evidence = {
  id: string;
  title: string;
  hypothesis: string;
  method: string;
  result: string;
  status: "complete" | "failed" | "investigating";
  next?: string;
};

const GLYPH: Record<Evidence["status"], string> = {
  complete: "✓",
  failed: "✗",
  investigating: "◌",
};

const GLYPH_COLOR: Record<Evidence["status"], string> = {
  complete: "var(--color-syn-cyan, #0284C7)",
  failed: "var(--color-syn-error, #E11D48)",
  investigating: "var(--color-syn-warning, #D97706)",
};

export function EvidenceSection() {
  const { evidence } = homeContent as { evidence: Evidence[] };
  const container = useRef<HTMLElement>(null);

  useGsap(container, (gsap) => {
    const root = container.current;
    if (!root) return;

    // Artifact rows: hairline draws L->R, then the fragment fades in — no slide
    gsap.utils.toArray<HTMLElement>("[data-artifact]").forEach((row, i) => {
      const rule = row.querySelector("[data-artifact-rule]");
      const body = row.querySelector("[data-artifact-body]");
      const glyph = row.querySelector("[data-artifact-glyph]");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
      if (glyph) {
        tl.fromTo(glyph, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power1.out" });
      }
      if (rule) {
        tl.fromTo(
          rule,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.0, ease: "power2.out" },
          i === 0 ? "-=0.3" : "-=0.7"
        );
      }
      if (body) {
        tl.fromTo(body, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power1.inOut" }, "-=0.6");
      }
    });
  });

  return (
    <section
      id="evidence"
      ref={container}
      className="syn-section relative overflow-hidden border-t border-black/[0.06] bg-syn-surface/50"
      aria-labelledby="evidence-heading"
    >
      <div className="container-syn py-24 lg:py-32">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          EVIDENCE / EXPERIMENTS / SIGNALS
        </p>
        <h2
          id="evidence-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Research Signals
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          Current hypotheses, experiments, and their status — including failed
          experiments that inform our direction.
        </p>

        {/* Artifact rows — each experiment is a preserved fragment, not a card */}
        <div className="mt-20">
          {evidence.map((exp) => (
            <article key={exp.id} data-artifact className="relative pb-12 pt-10">
              <span
                data-artifact-rule
                aria-hidden="true"
                className="absolute left-0 top-0 block h-px w-full origin-left bg-black/[0.12] will-change-transform"
              />
              <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                {/* Status glyph column — the evidence marker */}
                <div className="flex w-28 shrink-0 flex-col items-start gap-2">
                  <span
                    data-artifact-glyph
                    aria-label={exp.status}
                    className="mono text-2xl leading-none"
                    style={{ color: GLYPH_COLOR[exp.status] }}
                  >
                    {GLYPH[exp.status]}
                  </span>
                  <span className="mono text-[9px] tracking-[0.25em] text-syn-text-muted">
                    {exp.id.toUpperCase()}
                  </span>
                  <span
                    className="mono text-[9px] tracking-[0.15em]"
                    style={{ color: GLYPH_COLOR[exp.status] }}
                  >
                    {exp.status === "complete"
                      ? "COMPLETE"
                      : exp.status === "failed"
                        ? "FAILED → ANALYZED"
                        : "INVESTIGATING"}
                  </span>
                </div>

                {/* Fragment content */}
                <div data-artifact-body className="min-w-0 flex-1 will-change-[opacity]">
                  <h3 className="text-xl font-medium tracking-tight text-syn-text">
                    {exp.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-syn-text-secondary">
                    {exp.hypothesis}
                  </p>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="grid max-w-2xl gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                      <dt className="mono text-[9px] tracking-[0.25em] text-syn-text-muted">
                        METHOD
                      </dt>
                      <dd className="text-syn-text">{exp.method}</dd>
                    </div>
                    <div className="grid max-w-2xl gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                      <dt className="mono text-[9px] tracking-[0.25em] text-syn-text-muted">
                        RESULT
                      </dt>
                      <dd className="text-syn-text">{exp.result}</dd>
                    </div>
                    {exp.next && (
                      <div className="grid max-w-2xl gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                        <dt className="mono text-[9px] tracking-[0.25em] text-syn-text-muted">
                          NEXT
                        </dt>
                        <dd className="text-syn-text-secondary">{exp.next}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* The creed — failed results are preserved */}
        <p className="mono mt-8 max-w-3xl text-[11px] leading-relaxed tracking-[0.1em] text-syn-text-muted">
          FAILED EXPERIMENTS ARE ANALYZED, NOT HIDDEN. EACH ✗ IS FOLLOWED BY A
          POST-MORTEM THAT IMPROVES THE ARCHITECTURE.
        </p>
      </div>
    </section>
  );
}
