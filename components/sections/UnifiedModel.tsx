'use client';

import React from 'react';
import { homeContent } from '@/content/home';

export function UnifiedModel() {
  const { unifiedModel } = homeContent;

  return (
    <section
      id="unified-model"
      className="syn-section relative border-t border-black/[0.06] bg-syn-surface/50 overflow-hidden"
      aria-labelledby="unified-model-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.06), transparent 50%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(99,102,241,0.05), transparent 50%)',
          }}
        />
      </div>
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {unifiedModel.badge}
        </p>
        <h2
          id="unified-model-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Unified Model
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {unifiedModel.intro}
        </p>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {unifiedModel.flow.map((stage, i) => (
              <React.Fragment key={stage.label}>
                <div
                  className={`flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all duration-500 ${
                    stage.color === 'primary'
                      ? 'border-syn-cyan/30 bg-syn-cyan/[0.03]'
                      : stage.color === 'cyan'
                      ? 'border-black/[0.07] bg-syn-surface/60'
                      : 'border-black/[0.07] bg-syn-surface/60'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      stage.color === 'primary'
                        ? 'bg-syn-cyan/20'
                        : stage.color === 'cyan'
                        ? 'bg-syn-cyan/20'
                        : 'bg-syn-indigo/20'
                    }`}
                  >
                    {stage.icon}
                  </div>
                  <div className="text-center">
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
                {i < unifiedModel.flow.length - 1 && (
                  <div className="flex items-center justify-center w-full md:w-auto">
                    <div className="w-12 h-px bg-black/[0.06] relative overflow-hidden">
                      <div className="absolute inset-0 bg-syn-cyan animate-shimmer" style={{ transform: 'translateX(-100%)' }} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {unifiedModel.coreComponents && (
            <div className="mt-24 text-center border-t border-black/[0.06] pt-16">
              <p className="mono mb-4 text-[11px] tracking-[0.35em] text-syn-text-muted">
                HEXIM CORE COMPONENTS
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {unifiedModel.coreComponents.map((comp, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-black/[0.07] bg-syn-surface/60 text-syn-text-secondary hover:border-syn-cyan/40 hover:text-syn-cyan transition-colors"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}