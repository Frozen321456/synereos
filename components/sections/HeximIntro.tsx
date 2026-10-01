'use client';

import { homeContent } from '@/content/home';
import { designTokens } from '@/content/design';
const { colors } = designTokens;

export function HeximIntro() {
  const { heximIntro } = homeContent;

  return (
    <section
      id="hexim"
      className="syn-section relative border-t border-black/[0.06] bg-syn-surface/50 overflow-hidden"
      aria-labelledby="hexim-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: colors.gradientSection,
          }}
        />
      </div>
      <div className="container-syn py-28 lg:py-40">
        <p className="font-mono mb-6 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {heximIntro.badge}
        </p>
        <div className="mb-4 flex items-baseline gap-4">
          <h1
            id="hexim-heading"
            className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-syn-text"
            aria-label="HEXIM"
          >
            HEXIM
          </h1>
        </div>
        <p className="font-mono text-[11px] tracking-[0.2em] text-syn-cyan mb-8">
          {heximIntro.subtitle}
        </p>
        <p className="max-w-3xl text-lg leading-relaxed text-syn-text-secondary mb-16">
          {heximIntro.tagline}
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {heximIntro.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group relative p-6 rounded-xl border border-black/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface"
            >
              <span className="font-mono text-[10px] tracking-[0.3em] text-syn-text-muted">
                {pillar.number}
              </span>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-syn-text">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="border-t border-black/[0.06] pt-16">
          <p className="font-mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
            HEXIM EVOLUTION
          </p>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-syn-text">
            From concept to unified intelligence.
          </h2>
          <ol className="evolution-list mt-16 space-y-6">
            {heximIntro.evolution.map((stage, i) => (
              <li key={stage.number} className="evolution-item group flex gap-6">
                <span className="font-mono text-[11px] tracking-[0.2em] text-syn-cyan shrink-0 mt-1 w-16">
                  {stage.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-medium tracking-tight text-syn-text group-hover:text-syn-cyan transition-colors">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-syn-text-secondary">
                    {stage.desc}
                  </p>
                </div>
                {i < heximIntro.evolution.length - 1 && (
                  <span className="evolution-arrow font-mono shrink-0 text-[11px] tracking-[0.15em] text-syn-text-muted">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-6">
          <button className="btn-ghost relative overflow-hidden" style={{ transform: 'translate(0px, 0px)', transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)', willChange: 'transform' }}>
            <a href={heximIntro.cta.href} className="block px-8 py-4">
              {heximIntro.cta.label}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}