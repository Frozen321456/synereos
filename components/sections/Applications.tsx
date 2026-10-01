'use client';

import { homeContent } from '@/content/home';

export function Applications() {
  const { applications } = homeContent;

  return (
    <section
      id="applications"
      className="syn-section hairline-t"
      aria-labelledby="applications-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {applications.badge}
        </p>
        <h2
          id="applications-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Applications
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-syn-text-secondary">
          {applications.intro}
        </p>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.domains.map((domain, i) => (
            <article
              key={i}
              className="group relative p-8 rounded-xl border border-black/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl">{domain.icon}</span>
                <h3 className="text-xl font-medium tracking-tight text-syn-text group-hover:text-syn-cyan transition-colors">
                  {domain.title}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-syn-text-secondary">
                {domain.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}