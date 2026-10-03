"use client";

import { homeContent } from "@/content/home";
import { Root, Animation, Waypoint } from "@/components/ui/Scrolly";

export function QuestionSection() {
  const { question } = homeContent;

  return (
    <section
      id="question"
      className="syn-section hairline-t"
      aria-labelledby="question-heading"
    >
      <Root start="top 80%" end="bottom top" scrub={0.8}>
        <div className="container-syn py-28 lg:py-40">
          <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-cyan">
            {question.badge}
          </p>

          {/* The assumption — drifts in from below */}
          <Animation
            tween={{
              start: 0,
              end: 25,
              from: { y: 40, opacity: 0 },
            }}
          >
            <p
              id="question-assumption"
              className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-syn-text-secondary"
            >
              <em>{question.assumption}</em>
            </p>
          </Animation>

          {/* The turn — the big question */}
          <Animation
            tween={{
              start: 20,
              end: 45,
              from: { y: 80, opacity: 0, scale: 0.96 },
            }}
          >
            <h1
              id="question-turn"
              className="mx-auto max-w-4xl text-center text-[clamp(2.5rem,6vw,6rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-syn-text"
              aria-label={question.turn}
            >
              {question.turn}
            </h1>
          </Animation>

          {/* The escalating chain — each link slides in as you scroll */}
          <ol className="mx-auto mt-16 max-w-2xl space-y-8 text-syn-text-secondary">
            {question.chain.map((link, i) => (
              <Animation
                key={link.step}
                tween={{
                  start: 35 + i * 6,
                  end: 45 + i * 6,
                  from: { x: -32, opacity: 0 },
                }}
              >
                <li
                  id={`question-step-${i}`}
                  className="relative border-l border-black/[0.06] pb-8 pl-24 last:border-0"
                >
                  <span className="mono absolute left-0 top-0 text-[10px] tracking-[0.2em] text-syn-cyan">
                    {link.step.toUpperCase()}
                  </span>
                  <p className="text-base leading-relaxed text-syn-text-secondary">
                    {link.text}
                  </p>
                </li>
              </Animation>
            ))}
          </ol>

          {/* The close + bridge — waypoint-triggered */}
          <Waypoint at={78}>
            <p className="mt-16 text-center text-lg font-medium text-syn-cyan">
              {question.close}
            </p>
          </Waypoint>
          <Waypoint at={90}>
            <p className="mt-8 text-center text-lg font-medium text-syn-cyan">
              {question.bridge}
            </p>
          </Waypoint>
        </div>
      </Root>
    </section>
  );
}
