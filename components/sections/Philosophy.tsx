"use client";

import { useRef, useEffect } from "react";
import { homeContent } from "@/content/home";
import { useGsap } from "@/components/ui/Scrolly";

export function Philosophy() {
  const { philosophy } = homeContent;
  const container = useRef<HTMLElement>(null);

  // Slow particle field behind the dark chamber — Arrival's closing hold
  useEffect(() => {
    const root = container.current;
    if (!root) return;
    const canvas = root.querySelector<HTMLCanvasElement>("[data-philo-canvas]");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let disposed = false;

    const COUNT = 140;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    resize();
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        r: Math.random() * 1.4 + 0.4,
      });
    }

    const tick = () => {
      if (disposed) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.14)";
        ctx.fill();
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useGsap(container, (gsap) => {
    const root = container.current;
    if (!root) return;

    // Principles: sequential opacity holds — silence beats. No translation at all.
    gsap.fromTo(
      "[data-principle]",
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.35,
        duration: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-principles]",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Headline: slow scale-breathe into the dark
    gsap.fromTo(
      "[data-philo-headline]",
      { scale: 0.97, opacity: 0.2 },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  });

  return (
    <section
      id="philosophy"
      ref={container}
      className="syn-section relative overflow-hidden border-t border-black/[0.06] bg-black"
      aria-labelledby="philosophy-heading"
    >
      {/* Particle field — fog in the dark hold */}
      <canvas
        data-philo-canvas
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      />

      <div className="container-syn relative py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-cyan">
          {philosophy.badge}
        </p>
        <h2
          data-philo-headline
          id="philosophy-heading"
          className="max-w-3xl text-[clamp(3rem,8vw,6rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-white will-change-transform"
          aria-label={philosophy.headline}
        >
          {philosophy.headline}
        </h2>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-syn-cyan">
          {philosophy.subHeadline}
        </p>

        {/* The creed — each principle holds before the next appears */}
        <div data-principles className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {philosophy.principles.map((principle, i) => (
            <div key={i} data-principle className="will-change-[opacity]">
              <span aria-hidden="true" className="mb-5 block h-px w-8 bg-syn-cyan/50" />
              <p className="text-lg leading-relaxed text-white/80">{principle}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-wrap items-center gap-6">
          <a
            href={philosophy.cta.primary.href}
            className="mono rounded-full bg-white px-8 py-4 text-[11px] tracking-[0.25em] text-black transition-all duration-300 hover:bg-syn-cyan"
          >
            {philosophy.cta.primary.label}
          </a>
          <a
            href={philosophy.cta.secondary.href}
            className="mono link-line text-[11px] tracking-[0.25em] text-white/60 transition-colors hover:text-white"
          >
            {philosophy.cta.secondary.label}
          </a>
          <a
            href={philosophy.cta.tertiary.href}
            className="mono link-line text-[11px] tracking-[0.25em] text-white/60 transition-colors hover:text-white"
          >
            {philosophy.cta.tertiary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
