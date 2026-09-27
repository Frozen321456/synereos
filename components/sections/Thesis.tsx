"use client";

import dynamic from "next/dynamic";
import { THESIS, PRINCIPLES } from "@/content/thesis";
import { Reveal } from "@/components/motion/Reveal";

const MaskedHeading = dynamic(() => import("@/components/react-bits/MaskedHeading") as Promise<any>, { ssr: false }) as any;
const Aurora = dynamic(() => import("@/components/react-bits/Aurora") as Promise<any>, { ssr: false }) as any;

export function Thesis() {
  return (
    <section id="thesis" className="syn-section section-pad" aria-labelledby="thesis-title">
      <div className="fx-layer opacity-40" aria-hidden="true">
        <Aurora colorStops={["#38BDF8", "#6366F1", "#000000"]} amplitude={0.7} blend={0.6} />
      </div>

      <div className="container-syn">
        <Reveal>
          <p className="mono mb-10 text-[11px] tracking-[0.3em] text-syn-text-muted">
            {THESIS.eyebrow}
          </p>
        </Reveal>

        <h2
          id="thesis-title"
          className="max-w-5xl text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.05] font-semibold tracking-tight text-syn-text"
        >
          <MaskedHeading text={THESIS.headline} />
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            {THESIS.body.map((p, i) => (
              <Reveal key={i} delay={i * 150}>
                <p className="mb-6 max-w-xl text-base leading-relaxed text-syn-text-secondary md:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div>
            <p className="mono mb-6 text-[11px] tracking-[0.25em] text-syn-text-muted">
              PRINCIPLES
            </p>
            <ul className="space-y-4">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p} delay={i * 90}>
                  <li className="border-l-2 border-syn-cyan/40 pl-5 text-lg text-syn-text">
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
