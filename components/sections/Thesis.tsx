import { Reveal } from "@/components/motion/Reveal";

export function Thesis() {
  return (
    <section id="about" className="section-pad" aria-labelledby="thesis-title">
      <div className="container-syn">
        <Reveal>
          <h2
            id="thesis-title"
            className="max-w-4xl text-[clamp(2rem,5vw,4.5rem)] leading-[1.15] font-medium tracking-tight text-syn-text"
          >
            The next generation of AI may not come from simply scaling the same
            architecture.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-syn-text-secondary md:text-lg">
            Synereos investigates representation, compression, reasoning systems
            and new computational architectures.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
