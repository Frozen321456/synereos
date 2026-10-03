"use client";

import { useRef } from "react";
import { homeContent } from "@/content/home";
import { useGsap } from "@/components/ui/Scrolly";

export function Applications() {
  const { applications } = homeContent;
  const container = useRef<HTMLElement>(null);

  useGsap(container, (gsap) => {
    const root = container.current;
    if (!root) return;

    // Asymmetric stagger pop: alternating scales + opacity, uneven rhythm —
    // deliberately breaks uniform card-grid feel
    gsap.fromTo(
      "[data-app-cell]",
      { opacity: 0, scale: 0.94 },
      {
        opacity: 1,
        scale: 1,
        stagger: { each: 0.12, from: "start", grid: "auto" },
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-app-grid]",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Every third cell drifts slower than its neighbors — parallax depth
    gsap.to("[data-app-cell='odd']", {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  });

  return (
    <section
      id="applications"
      ref={container}
      className="syn-section hairline-t"
      aria-labelledby="applications-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {applications.badge}
        </p>
        <h2
          id="applications-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Applications
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-syn-text-secondary">
          {applications.intro}
        </p>

        {/* Deliberately uneven wall — alternating optical scales, no uniform hover */}
        <div data-app-grid className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {applications.domains.map((domain, i) => (
            <article
              key={domain.title}
              data-app-cell={i % 2 === 0 ? "even" : "odd"}
              className="relative will-change-transform"
            >
              <div
                aria-hidden="true"
                className={`absolute -inset-x-4 -inset-y-6 -z-10 rounded-2xl ${
                  i % 3 === 2
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                style={
                  i % 3 === 2
                    ? {
                        background:
                          "radial-gradient(ellipse 80% 70% at 70% 0%, rgba(67,56,202,0.05), transparent 70%)",
                      }
                    : undefined
                }
              />
              <div className="flex items-baseline gap-4">
                <span
                  className={
                    i % 2 === 0 ? "text-5xl leading-none" : "text-3xl leading-none"
                  }
                  aria-hidden="true"
                >
                  {domain.icon}
                </span>
                <h3 className="text-xl font-medium tracking-tight text-syn-text">
                  {domain.title}
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="mt-6 block h-px w-1/3 bg-black/[0.1]"
              />
              <p className="mt-4 text-base leading-relaxed text-syn-text-secondary">
                {domain.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
