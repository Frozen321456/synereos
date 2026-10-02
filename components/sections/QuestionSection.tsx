'use client';

import { homeContent } from '@/content/home';
import { Reveal } from '@/components/ui/PageShell';

export function QuestionSection() {
  const { question } = homeContent;

  return (
    <section
      id="question"
      className="syn-section hairline-t"
      aria-labelledby="question-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <Reveal>
          <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-cyan">
            {question.badge}
          </p>
        </Reveal>

        {/* The assumption */}
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-syn-text-secondary text-center mb-12">
            <em>{question.assumption}</em>
          </p>
        </Reveal>

        {/* The turn */}
        <Reveal delay={200}>
          <h1
            id="question-heading"
            className="max-w-4xl text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text text-center"
            aria-label={question.turn}
          >
            {question.turn}
          </h1>
        </Reveal>

        {/* The escalating chain */}
        <Reveal delay={400}>
          <ol className="mt-16 max-w-2xl mx-auto space-y-8 text-syn-text-secondary">
            {question.chain.map((link, i) => (
              <li key={link.step} className="relative pl-24 pb-8 border-l border-black/[0.06] last:border-0">
                <span className="mono absolute left-0 top-0 text-[10px] tracking-[0.2em] text-syn-cyan">
                  {link.step.toUpperCase()}
                </span>
                <p className="text-base leading-relaxed text-syn-text-secondary">
                  {link.text}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* The close */}
        <Reveal delay={800}>
          <p className="mt-16 text-lg font-medium text-syn-cyan text-center">
            {question.close}
          </p>
        </Reveal>

        <Reveal delay={1000}>
          <p className="mt-8 text-lg font-medium text-syn-cyan text-center">
            {question.bridge}
          </p>
        </Reveal>
      </div>
    </section>
  );
}