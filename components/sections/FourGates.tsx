'use client';

import { homeContent } from '@/content/home';

export function FourGates() {
  const { fourGates } = homeContent;

  return (
    <section
      id="four-gates"
      className="syn-section hairline-t"
      aria-labelledby="four-gates-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {fourGates.badge}
        </p>
        <h2
          id="four-gates-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Four Gates
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {fourGates.intro}
        </p>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {fourGates.gates.map((gate) => (
            <article
              key={gate.number}
              className="group relative p-8 rounded-xl border border-black/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="mono text-[10px] tracking-[0.3em] text-syn-cyan">
                  {gate.number}
                </span>
                <span className="text-2xl font-medium tracking-tight text-syn-text group-hover:text-syn-cyan transition-colors">
                  {gate.title}
                </span>
              </div>
              <p className="text-base leading-relaxed text-syn-text-secondary mb-6">
                {gate.desc}
              </p>
              <ul className="space-y-3">
                {gate.criteria.map((criterion, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-syn-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full border border-syn-cyan/40 flex-shrink-0" />
                    {criterion}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}