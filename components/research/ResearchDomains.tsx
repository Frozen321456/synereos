import { DOMAINS } from "@/content/domains";
import { Reveal } from "@/components/motion/Reveal";

export function ResearchDomains() {
  return (
    <section
      className="section-pad border-t border-white/[0.06] bg-syn-surface"
      aria-labelledby="domains-title"
    >
      <div className="container-syn">
        <Reveal>
          <h2
            id="domains-title"
            className="mono text-[11px] tracking-[0.3em] text-syn-text-muted"
          >
            RESEARCH DOMAINS
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DOMAINS.map((domain, i) => (
            <Reveal key={domain.index} delay={i * 100}>
              <article className="bento-card rounded-2xl border border-white/[0.06] bg-syn-surface-2 p-8 md:p-10">
                <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">
                  {domain.index}
                </p>
                <h3 className="mt-6 text-2xl leading-snug font-medium tracking-tight text-syn-text md:text-[1.75rem]">
                  {domain.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-syn-text-secondary">
                  {domain.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
