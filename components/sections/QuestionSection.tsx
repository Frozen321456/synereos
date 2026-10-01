'use client';

import { homeContent } from '@/content/home';

export function QuestionSection() {
  const { question } = homeContent;

  return (
    <section
      id="question"
      className="syn-section hairline-t"
      aria-labelledby="question-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-cyan">
          {question.badge}
        </p>
        <h1
          id="question-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
          aria-label={question.headline}
        >
          {question.headline}
        </h1>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {question.intro}
        </p>
        <ul className="mt-12 max-w-2xl space-y-6 text-syn-text-secondary">
          {question.questions.map((q) => (
            <li key={q.number} className="flex gap-4 text-base leading-relaxed">
              <span className="mono text-[11px] tracking-[0.2em] text-syn-cyan shrink-0 mt-1">
                {q.number}
              </span>
              <span>{q.text}</span>
            </li>
          ))}
        </ul>
        <p className="mt-16 text-lg font-medium text-syn-cyan">
          {question.bridge}
        </p>
      </div>
    </section>
  );
}