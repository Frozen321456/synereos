import { TIMELINE } from "@/content/timeline";
import { Reveal } from "@/components/motion/Reveal";

export function ResearchLog() {
  return (
    <section
      className="section-pad border-t border-white/[0.06]"
      aria-labelledby="log-title"
    >
      <div className="container-syn">
        <Reveal>
          <h2
            id="log-title"
            className="mono text-[11px] tracking-[0.3em] text-syn-text-muted"
          >
            RESEARCH LOG
          </h2>
        </Reveal>

        <ol className="mt-16 border-l border-white/[0.08]">
          {TIMELINE.map((entry, i) => (
            <Reveal key={entry.marker + entry.title} delay={i * 100}>
              <li className="relative py-8 pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-10 h-px w-6 bg-white/[0.15]"
                />
                <p className="mono text-[11px] tracking-[0.25em] text-syn-cyan">
                  {entry.marker}
                </p>
                <h3 className="mono mt-2 text-[13px] tracking-[0.2em] text-syn-text">
                  {entry.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-syn-text-secondary">
                  {entry.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
