import { SITE } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export function OpenResearch() {
  return (
    <section
      className="section-pad border-t border-white/[0.06]"
      aria-labelledby="open-title"
    >
      <div className="container-syn">
        <Reveal>
          <h2
            id="open-title"
            className="mono text-[11px] tracking-[0.3em] text-syn-text-muted"
          >
            OPEN RESEARCH
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-xl text-[clamp(1.5rem,3.5vw,2.5rem)] leading-tight font-medium tracking-tight text-syn-text">
            Some experiments belong in the open.
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-syn-text-secondary">
            Explore the code, experiments and research artifacts.
          </p>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mono mt-10 inline-block border border-white/[0.12] px-6 py-3 text-[11px] tracking-[0.2em] text-syn-text transition-colors duration-200 hover:border-white/[0.3] hover:bg-white/[0.04]"
          >
            VIEW GITHUB ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
