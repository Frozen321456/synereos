import { RESEARCH_STATUS } from "@/content/research";
import { Reveal } from "@/components/motion/Reveal";

export function ResearchStatusSection() {
  return (
    <section
      className="section-pad border-t border-white/[0.06]"
      aria-labelledby="status-title"
    >
      <div className="container-syn">
        <Reveal>
          <h2
            id="status-title"
            className="mono text-[11px] tracking-[0.3em] text-syn-text-muted"
          >
            RESEARCH STATUS
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {RESEARCH_STATUS.map((item, i) => (
            <Reveal key={item.id} delay={i * 120}>
              <li className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[120px_1fr_160px] md:items-baseline md:gap-8">
                <span className="mono text-[13px] tracking-[0.1em] text-syn-cyan">
                  {item.id}
                </span>
                <div>
                  <h3 className="mono text-[13px] tracking-[0.15em] text-syn-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-syn-text-secondary">
                    {item.description}
                  </p>
                </div>
                <span
                  className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary"
                  aria-label={`Status: ${item.status}`}
                >
                  <span aria-hidden="true">{item.statusSymbol}</span>{" "}
                  {item.status}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
