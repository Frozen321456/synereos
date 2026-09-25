import { Reveal } from "@/components/motion/Reveal";

const LINES = ["THE NEXT", "ARCHITECTURE", "ISN'T WRITTEN", "YET."];

export function FinalStatement() {
  return (
    <section
      className="section-pad border-t border-white/[0.06]"
      aria-labelledby="final-title"
    >
      <div className="container-syn">
        <h2
          id="final-title"
          className="text-[clamp(2.5rem,8vw,7rem)] leading-[1.02] font-semibold tracking-tight text-syn-text"
        >
          {LINES.map((line, i) => (
            <Reveal key={line} delay={i * 120} className="block">
              <span className="block">{line}</span>
            </Reveal>
          ))}
        </h2>
      </div>
    </section>
  );
}
