'use client';

import { homeContent } from '@/content/home';

export function ResearchSignals() {
  const { researchSignals } = homeContent;

  return (
    <section
      id="research-signals"
      className="syn-section hairline-t"
      aria-labelledby="research-signals-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {researchSignals.badge}
        </p>
        <div className="mb-16 research-signals flex flex-wrap gap-6 lg:gap-10">
          {researchSignals.signals.map((signal) => (
            <div key={signal.label} className="signal-row group flex flex-col gap-2 flex-1 min-w-[180px]">
              <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
                {signal.label}
              </span>
              <span className="text-2xl font-medium tracking-tight text-syn-text group-hover:text-syn-cyan transition-colors">
                {signal.value}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-28 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchSignals.domains.map((domain) => (
            <article
              key={domain.number}
              className="research-cell group relative overflow-hidden rounded-xl border border-black/[0.07] bg-syn-surface/60 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-syn-cyan/40 hover:bg-syn-surface min-h-[240px]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 90% 80% at 50% 0%, rgba(56,189,248,0.08), transparent 70%)',
                }}
              />
              <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
                {domain.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-syn-text transition-transform duration-500 group-hover:-translate-y-1 md:text-2xl">
                {domain.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-syn-text-secondary">
                {domain.desc}
              </p>
              <span className="mono absolute bottom-6 right-8 text-[10px] tracking-[0.25em] text-syn-text-muted opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                INVESTIGATING →
              </span>
            </article>
          ))}
        </div>
        <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-black/[0.07] pt-8">
          <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
            CURRENT SIGNALS
          </span>
          {researchSignals.currentSignals.map((signal, i) => (
            <span
              key={i}
              className="mono text-[11px] tracking-[0.15em] text-syn-text-secondary"
            >
              <span aria-hidden="true" className="mr-2" style={{ color: `var(--color-syn-${signal.color})` }}>
                {signal.icon}
              </span>
              {signal.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}