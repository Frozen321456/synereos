"use client";

import { SplitHeading } from "@/components/ui/SplitText";
import { QUESTION } from "@/content/question";

export function QuestionSection() {
  return (
    <section
      id="question"
      className="syn-section relative border-t border-white/[0.06]"
      aria-labelledby="question-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {QUESTION.eyebrow}
        </p>

        <SplitHeading
          as="h1"
          id="question-heading"
          text={QUESTION.headline}
          mode="lines"
          stagger={0.1}
          duration={1.3}
          className="max-w-4xl text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        />

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {QUESTION.subhead}
        </p>

        <ul className="mt-12 max-w-2xl space-y-6 text-syn-text-secondary">
          {QUESTION.questions.map((q, i) => (
            <li key={i} className="flex gap-4 text-base leading-relaxed">
              <span className="mono text-[11px] tracking-[0.2em] text-syn-cyan shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-lg font-medium text-syn-cyan">
          {QUESTION.bridge}
        </p>
      </div>
    </section>
  );
}