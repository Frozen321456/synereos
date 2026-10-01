'use client';

import { homeContent } from '@/content/home';

export function HeximCore() {
  const { heximCore } = homeContent;

  return (
    <section
      id="hexim-core"
      className="syn-section relative border-t border-black/[0.06]"
      aria-labelledby="hexim-core-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {heximCore.badge}
        </p>
        <h2
          id="hexim-core-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
          aria-label="HEXIM Core"
        >
          HEXIM Core
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {heximCore.intro}
        </p>
        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {heximCore.principles.map((principle) => (
            <article
              key={principle.number}
              className="group relative p-8 rounded-xl border border-black/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-syn-cyan/40 hover:bg-syn-surface"
            >
              <span className="mono text-[10px] tracking-[0.3em] text-syn-cyan">
                {principle.number}
              </span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-syn-text">
                {principle.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-syn-text-secondary">
                {principle.desc}
              </p>
              <div className="mt-8 h-px bg-black/[0.06] group-hover:bg-syn-cyan/40 group-hover:w-full transition-all duration-500 w-1/4" />
            </article>
          ))}
        </div>
        <div className="mt-24">
          <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
            EXPERIENCE LOOP
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {heximCore.loop.stages.map((stage, i) => (
              <div
                key={stage.label}
                className={`relative p-6 rounded-xl border transition-all duration-500 ${
                  stage.color === 'primary'
                    ? 'border-syn-cyan/30 bg-syn-cyan/[0.03]'
                    : 'border-black/[0.07] bg-syn-surface/60'
                } ${stage.color === 'primary' ? 'hover:border-syn-cyan/50' : 'hover:border-syn-cyan/40 hover:bg-syn-surface'}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      stage.color === 'cyan'
                        ? 'bg-syn-cyan/20'
                        : stage.color === 'indigo'
                        ? 'bg-syn-indigo/20'
                        : 'bg-syn-cyan/20'
                    }`}
                  >
                    {stage.icon}
                  </div>
                  <div>
                    <p className={`mono text-[10px] tracking-[0.2em] ${
                      stage.color === 'primary' ? 'text-syn-cyan' : `text-syn-${stage.color}`
                    }`}>
                      {stage.label}
                    </p>
                    <p className={`text-xl font-medium ${stage.color === 'primary' ? 'text-syn-cyan' : 'text-syn-text'}`}>
                      {stage.title}
                    </p>
                    <p className="text-sm text-syn-text-secondary">
                      {stage.desc}
                    </p>
                  </div>
                </div>
                {i < heximCore.loop.stages.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-8 h-px bg-black/[0.06] group-hover:bg-syn-cyan/40 transition-colors hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}