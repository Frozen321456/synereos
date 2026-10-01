'use client';

import { homeContent } from '@/content/home';

export function Timeline() {
  const { timeline } = homeContent;

  return (
    <section
      id="timeline"
      className="syn-section hairline-t"
      aria-labelledby="timeline-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {timeline.badge}
        </p>
        <h2
          id="timeline-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Timeline
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-syn-text-secondary">
          {timeline.intro}
        </p>
        <div className="mt-20 space-y-12">
          {timeline.milestones.map((milestone) => (
            <div key={milestone.year} className="relative pl-16">
              <div className="absolute left-4 top-0 w-px h-full bg-black/[0.06]" />
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full border-2 border-syn-cyan bg-syn-bg flex items-center justify-center">
                <span className="mono text-[10px] tracking-[0.2em] text-syn-cyan">{milestone.year}</span>
              </div>
              <div className="mb-2">
                <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">{milestone.phase}</span>
              </div>
              <ul className="space-y-2">
                {milestone.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-base text-syn-text-secondary">
                    <span className="w-2 h-2 rounded-full bg-syn-cyan/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}