import { SITE } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

const LINES = ["BUILDING SYSTEMS", "THAT QUESTION", "THE ARCHITECTURE."];

export function Hero() {
  return (
    <section
      className="relative flex min-h-dvh flex-col overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      <div className="container-syn relative flex flex-1 flex-col justify-center pt-24 pb-16">
        <Reveal delay={0}>
          <p className="mono mb-8 text-xs tracking-[0.35em] text-syn-cyan">
            SYNEREOS
          </p>
        </Reveal>

        <h1
          id="hero-title"
          className="text-[clamp(2.75rem,8vw,8rem)] leading-[1.02] font-semibold tracking-tight text-syn-text"
        >
          {LINES.map((line, i) => (
            <Reveal key={line} delay={150 + i * 150} className="block">
              <span className="block">{line}</span>
            </Reveal>
          ))}
        </h1>

        <Reveal delay={650}>
          <p className="mt-10 max-w-md text-base leading-relaxed text-syn-text-secondary md:text-lg">
            Computational research beyond conventional AI assumptions.
          </p>
        </Reveal>

        <Reveal delay={800}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#research"
              className="mono border border-white/[0.12] px-6 py-3 text-[11px] tracking-[0.2em] text-syn-text transition-colors duration-200 hover:border-white/[0.3] hover:bg-white/[0.04]"
            >
              EXPLORE RESEARCH
            </a>
            <a
              href={SITE.heximRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="mono border border-white/[0.12] px-6 py-3 text-[11px] tracking-[0.2em] text-syn-text transition-colors duration-200 hover:border-white/[0.3] hover:bg-white/[0.04]"
            >
              HEXIM ↗
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container-syn relative pb-8">
        <p className="mono text-[11px] tracking-[0.3em] text-syn-text-muted">
          SCROLL TO EXPLORE
        </p>
      </div>
    </section>
  );
}
