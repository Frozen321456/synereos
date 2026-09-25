import { RESEARCH_SIGNAL } from "@/content/research";
import { Reveal } from "@/components/motion/Reveal";

export function ResearchSignal() {
  return (
    <section
      className="border-y border-white/[0.06] bg-syn-surface"
      aria-label="Research signal"
    >
      <div className="container-syn py-10">
        <p className="mono mb-8 text-[11px] tracking-[0.3em] text-syn-text-muted">
          SYNEREOS RESEARCH SYSTEM
        </p>
        <dl className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
          {RESEARCH_SIGNAL.map((row, i) => (
            <Reveal key={row.label} delay={i * 100}>
              <div className="flex items-baseline justify-between gap-4 border-t border-white/[0.06] py-4 lg:flex-col lg:items-start lg:gap-2">
                <dt className="mono text-[11px] tracking-[0.15em] text-syn-text-muted">
                  {row.label}
                </dt>
                <dd className="mono text-[13px] tracking-[0.1em] text-syn-text">
                  {row.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
