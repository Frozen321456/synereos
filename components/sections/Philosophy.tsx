'use client';

import { homeContent } from '@/content/home';

export function Philosophy() {
  const { philosophy } = homeContent;

  return (
    <section
      id="philosophy"
      className="syn-section relative border-t border-black/[0.06] bg-black"
      aria-labelledby="philosophy-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-cyan">
          {philosophy.badge}
        </p>
        <h2
          id="philosophy-heading"
          className="max-w-3xl text-[clamp(3rem,8vw,6rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-white"
          aria-label={philosophy.headline}
        >
          {philosophy.headline}
        </h2>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-syn-cyan">
          {philosophy.subHeadline}
        </p>
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {philosophy.principles.map((principle, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/[0.07] bg-white/[0.02] transition-all duration-500 hover:border-syn-cyan/40 hover:bg-white/[0.05]">
              <p className="text-lg leading-relaxed text-white/80">{principle}</p>
            </div>
          ))}
        </div>
        <div className="mt-24 flex flex-wrap items-center gap-6">
          <a
            href={philosophy.cta.primary.href}
            className="mono rounded-full bg-white px-8 py-4 text-[11px] tracking-[0.25em] text-black transition-all duration-300 hover:bg-syn-cyan"
          >
            {philosophy.cta.primary.label}
          </a>
          <a
            href={philosophy.cta.secondary.href}
            className="mono link-line text-[11px] tracking-[0.25em] text-white/60 transition-colors hover:text-white"
          >
            {philosophy.cta.secondary.label}
          </a>
          <a
            href={philosophy.cta.tertiary.href}
            className="mono link-line text-[11px] tracking-[0.25em] text-white/60 transition-colors hover:text-white"
          >
            {philosophy.cta.tertiary.label}
          </a>
        </div>
      </div>
    </section>
  );
}