import { Reveal } from "@/components/motion/Reveal";

const CONCEPTS = [
  "Representation.",
  "Memory.",
  "Computation.",
  "Runtime.",
  "Adaptation.",
];

export function ArchitectureQuestion() {
  return (
    <section
      className="section-pad border-t border-white/[0.06]"
      aria-labelledby="question-title"
    >
      <div className="container-syn">
        <Reveal>
          <h2
            id="question-title"
            className="max-w-4xl text-[clamp(2.25rem,6vw,5rem)] leading-[1.12] font-medium tracking-tight text-syn-text"
          >
            What if the limitation isn&rsquo;t the model&mdash;but the
            architecture around it?
          </h2>
        </Reveal>
        <Reveal delay={250}>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            {CONCEPTS.map((c) => (
              <li
                key={c}
                className="mono text-[13px] tracking-[0.15em] text-syn-text-secondary"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
