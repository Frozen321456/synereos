"use client";

import { useRef } from "react";
import { homeContent } from "@/content/home";
import { useGsap } from "@/components/ui/Scrolly";

export function ResearchSignals() {
  const { researchSignals } = homeContent;
  const container = useRef<HTMLElement>(null);

  useGsap(container, (gsap) => {
    const root = container.current;
    if (!root) return;

    // Signals strip: slow parallax drift upward (whiteboard annotation)
    gsap.to("[data-signals-strip]", {
      yPercent: -18,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    // Domain cells: hairline top border wipes L->R, then content opacity-holds.
    // No translateY — Villeneuve holds, not slides.
    const cells = root.querySelectorAll<HTMLElement>("[data-cell]");
    cells.forEach((cell) => {
      const rule = cell.querySelector("[data-rule]");
      const body = cell.querySelector("[data-body]");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cell,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
      if (rule) {
        tl.fromTo(
          rule,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.9, ease: "power2.out" }
        );
      }
      if (body) {
        tl.fromTo(
          body,
          { opacity: 0 },
          { opacity: 1, duration: 0.7, ease: "power1.inOut" },
          "-=0.55"
        );
      }
    });
  });

  const domains = researchSignals.domains;
  const thesisIdx = domains.findIndex(
    (d) => d.title === "EXPERIENTIAL LEARNING"
  );

  return (
    <section
      id="research-signals"
      ref={container}
      className="syn-section hairline-t"
      aria-labelledby="research-signals-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {researchSignals.badge}
        </p>

        {/* Whiteboard annotation strip — drifts slowly out of frame */}
        <div
          data-signals-strip
          className="mb-20 flex flex-wrap gap-8 lg:gap-14 will-change-transform"
        >
          {researchSignals.signals.map((signal) => (
            <div key={signal.label} className="flex min-w-[160px] flex-col gap-2">
              <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
                {signal.label}
              </span>
              <span className="text-2xl font-medium tracking-tight text-syn-text">
                {signal.value}
              </span>
            </div>
          ))}
        </div>

        {/* Seven domains — evidence wall; the thesis domain spans two columns */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, i) => (
            <article
              key={domain.number}
              data-cell
              className={`relative pb-10 pt-6 ${
                i === thesisIdx ? "min-h-[300px] lg:col-span-2" : "min-h-[220px]"
              }`}
            >
              {/* Hairline that draws itself */}
              <span
                data-rule
                aria-hidden="true"
                className={`absolute left-0 top-0 block h-px w-full origin-left will-change-transform ${
                  i === thesisIdx ? "bg-syn-cyan" : "bg-black/[0.14]"
                }`}
              />
              <div data-body className="will-change-[opacity]">
                <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
                  {domain.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-syn-text md:text-2xl">
                  {domain.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-syn-text-secondary">
                  {domain.desc}
                </p>
                {i === thesisIdx && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(ellipse 90% 80% at 30% 0%, rgba(56,189,248,0.07), transparent 70%)",
                    }}
                  />
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Current signals — preserved fragment strip */}
        <div className="mt-24 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-black/[0.07] pt-8">
          <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">
            CURRENT SIGNALS
          </span>
          {researchSignals.currentSignals.map((signal, i) => (
            <span
              key={i}
              className="mono text-[11px] tracking-[0.15em] text-syn-text-secondary"
            >
              <span
                aria-hidden="true"
                className="mr-2"
                style={{ color: `var(--color-syn-${signal.color})` }}
              >
                {signal.icon}
              </span>
              {signal.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
