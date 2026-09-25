import { BEYOND_AREAS } from "@/content/domains";
import { Reveal } from "@/components/motion/Reveal";

export function BeyondHexim() {
  return (
    <section
      className="section-pad border-t border-white/[0.06] bg-syn-surface"
      aria-labelledby="beyond-title"
    >
      <div className="container-syn">
        <Reveal>
          <h2
            id="beyond-title"
            className="mono text-[11px] tracking-[0.3em] text-syn-text-muted"
          >
            BEYOND HEXIM
          </h2>
          <p className="mt-6 text-lg text-syn-text-secondary">
            The laboratory continues.
          </p>
        </Reveal>

        <ul className="mt-14">
          {BEYOND_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 80}>
              <li className="group border-t border-white/[0.06] last:border-b">
                <button
                  type="button"
                  className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
                  aria-describedby={`beyond-desc-${i}`}
                >
                  <span className="mono text-[13px] tracking-[0.2em] text-syn-text transition-colors duration-200 group-hover:text-syn-cyan group-focus-visible:text-syn-cyan">
                    {area.title}
                  </span>
                  <span
                    id={`beyond-desc-${i}`}
                    className="max-w-sm text-right text-sm leading-relaxed text-syn-text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 max-md:hidden"
                  >
                    {area.description}
                  </span>
                </button>
                <p className="pb-6 text-sm leading-relaxed text-syn-text-secondary md:hidden">
                  {area.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
