"use client";

import { homeContent } from "@/content/home";
import { HorizontalPanels } from "@/components/ui/Scrolly";

export function Timeline() {
  const { timeline } = homeContent;

  return (
    <section
      id="timeline"
      className="syn-section hairline-t"
      aria-labelledby="timeline-heading"
    >
      <div className="container-syn pt-28 lg:pt-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {timeline.badge}
        </p>
        <h2
          id="timeline-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Timeline
        </h2>
        <p className="mb-16 mt-6 max-w-2xl text-lg leading-relaxed text-syn-text-secondary">
          {timeline.intro} — scroll down to travel through the research years.
        </p>
      </div>

      {/* Vertical scroll drives horizontal era panels */}
      <HorizontalPanels className="h-[70vh] w-full">
        {timeline.milestones.map((milestone) => (
          <article
            key={milestone.year}
            className="flex h-full w-[85vw] max-w-[720px] flex-col justify-center border-l border-black/[0.06] px-8 lg:w-[60vw] lg:px-16"
          >
            <span className="mono text-[clamp(3rem,8vw,6rem)] leading-none font-semibold tracking-tight text-black/[0.08]">
              {milestone.year}
            </span>
            <span className="mono mt-2 text-[10px] tracking-[0.3em] text-syn-cyan">
              {milestone.phase.toUpperCase()}
            </span>
            <ul className="mt-6 space-y-3">
              {milestone.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-base text-syn-text-secondary"
                >
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-syn-cyan/40" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </HorizontalPanels>
    </section>
  );
}
