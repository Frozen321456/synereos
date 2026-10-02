'use client';

import { homeContent } from '@/content/home';
import { Pin } from '../ui/PageShell';
import { useRef, useEffect } from 'react';

export function HeximCore() {
  const { heximCore } = homeContent;

  return (
    <section
      id="hexim-core"
      className="syn-section relative border-t border-black/[0.06]"
      aria-labelledby="hexim-core-heading"
    >
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {heximCore.badge}
        </p>
        <h2
          id="hexim-core-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
          aria-label="HEXIM Core"
        >
          HEXIM Core
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {heximCore.intro}
        </p>
        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {heximCore.principles.map((principle) => (
            <article
              key={principle.number}
              className="group relative p-8 rounded-xl border border-black/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1.5 hover:border-syn-cyan/40 hover:bg-syn-surface"
            >
              <span className="mono text-[10px] tracking-[0.3em] text-syn-cyan">
                {principle.number}
              </span>
              <h3 className="mt-4 text-2xl font-medium tracking-tight text-syn-text">
                {principle.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-syn-text-secondary">
                {principle.desc}
              </p>
              <div className="mt-8 h-px bg-black/[0.06] group-hover:bg-syn-cyan/40 group-hover:w-full transition-all duration-500 w-1/4" />
            </article>
          ))}
        </div>
        <div className="mt-24">
          <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
            EXPERIENCE LOOP
          </p>
          <Pin start="top top" end="+200%" pin pinSpacing scrub={1}>
            <div className="h-[80vh] flex items-center justify-center">
              <ExperienceLoopVisual stages={heximCore.loop.stages} />
            </div>
          </Pin>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {heximCore.loop.stages.map((stage, i) => (
              <div
                key={stage.label}
                className={`relative p-6 rounded-xl border transition-all duration-500 ${
                  stage.color === 'primary'
                    ? 'border-syn-cyan/30 bg-syn-cyan/[0.03]'
                    : 'border-black/[0.07] bg-syn-surface/60'
                } ${stage.color === 'primary' ? 'hover:border-syn-cyan/50' : 'hover:border-syn-cyan/40 hover:bg-syn-surface'}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                      stage.color === 'cyan'
                        ? 'bg-syn-cyan/20'
                        : stage.color === 'indigo'
                        ? 'bg-syn-indigo/20'
                        : 'bg-syn-cyan/20'
                    }`}
                  >
                    {stage.icon}
                  </div>
                  <div>
                    <p className={`mono text-[10px] tracking-[0.2em] ${
                      stage.color === 'primary' ? 'text-syn-cyan' : `text-syn-${stage.color}`
                    }`}>
                      {stage.label}
                    </p>
                    <p className={`text-xl font-medium ${stage.color === 'primary' ? 'text-syn-cyan' : 'text-syn-text'}`}>
                      {stage.title}
                    </p>
                    <p className="text-sm text-syn-text-secondary">
                      {stage.desc}
                    </p>
                  </div>
                </div>
                {i < heximCore.loop.stages.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-8 h-px bg-black/[0.06] group-hover:bg-syn-cyan/40 transition-colors hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience Loop Visual (GSAP ScrollTrigger) ---------- */

function ExperienceLoopVisual({ stages }: { stages: typeof homeContent.heximCore.loop.stages }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Set up canvas and context once
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;
  }, []);

  // Set up and tear down the GSAP animation
  useEffect(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    let cleanup: (() => void) | null = null;

    import('gsap').then(({ default: gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        // Double-check that ctx is still not null (though it should be)
        if (!ctxRef.current) return;
        const ctx = ctxRef.current;
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.35;

        function drawLoop(progress: number) {
          ctx.clearRect(0, 0, width, height);

          // Draw circular path
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(2,132,199,0.15)';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Draw progress arc
          const startAngle = -Math.PI / 2;
          const endAngle = startAngle + progress * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, startAngle, endAngle);
          ctx.strokeStyle = '#0284C7';
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          ctx.stroke();

          // Draw stage nodes
          stages.forEach((stage, i) => {
            const angle = startAngle + (i / stages.length) * Math.PI * 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            const isActive = (i / stages.length) < progress || (progress === 1 && i === stages.length - 1);

            ctx.beginPath();
            ctx.arc(x, y, isActive ? 12 : 8, 0, Math.PI * 2);
            ctx.fillStyle = isActive ? '#0284C7' : 'rgba(2,132,199,0.3)';
            ctx.fill();

            if (isActive) {
              ctx.font = '11px "JetBrains Mono"';
              ctx.fillStyle = '#0A0F1E';
              ctx.textAlign = 'center';
              ctx.fillText(stage.label, x, y - 20);
            }
          });
        }

        drawLoop(0);

        const anim = gsap.to({ progress: 0 }, {
          progress: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ctx.canvas.parentElement,
            start: 'top top',
            end: '+200%',
            scrub: 1,
            onUpdate: self => drawLoop(self.progress),
          },
        });

        cleanup = () => {
          anim.kill();
          ScrollTrigger.getAll().forEach(st => st.kill());
        };
      });
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, [stages]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={500}
      className="w-full max-w-[800px] h-auto"
      aria-hidden="true"
    />
  );
}
