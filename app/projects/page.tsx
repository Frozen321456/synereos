import type { Metadata } from 'next';
import { PageShell, SectionHeading, Grid, Card, Reveal } from '@/components/ui/PageShell';

export const metadata: Metadata = {
  title: 'Projects — HEXIM, Infinity, TFSR, Future Systems | Synereos',
  description: 'Synereos projects: HEXIM, HEXIM Infinity, TFSR, and experimental intelligence systems.',
};

const projects = [
  {
    number: '01',
    title: 'HEXIM',
    desc: 'The flagship: hierarchical efficient execution for constrained hardware. Ternary + VQ compression, Memory OS, skills, and the 13.2 fidelity research.',
    href: '/hexim',
    cta: 'Explore HEXIM →',
  },
  {
    number: '02',
    title: 'HEXIM Infinity',
    desc: 'The unified direction: existing architectures plus experience — ECA, world models, prediction, surprise, and the Four Gates.',
    href: '/infinity',
    cta: 'Explore Infinity →',
  },
  {
    number: '03',
    title: 'TFSR',
    desc: 'Technical research track exploring efficient fine-grained system representation. Details as results pass their gates.',
    href: null,
    cta: 'In research',
  },
  {
    number: '04',
    title: 'Future Intelligence Systems',
    desc: 'Long-horizon bets on adaptive machine intelligence: systems that learn after deployment and keep their own score.',
    href: null,
    cta: 'On the roadmap',
  },
  {
    number: '05',
    title: 'Experimental Architectures',
    desc: 'Smaller probes and throwaway systems that exist to test one assumption each. Failure is data.',
    href: null,
    cta: 'Ongoing',
  },
  {
    number: '06',
    title: 'Applied AI Systems',
    desc: 'Where the research lands: on-device, personal, agentic, and physical applications built on HEXIM-class constraints.',
    href: '/applications',
    cta: 'See Applications →',
  },
];

export default function ProjectsPage() {
  return (
    <PageShell
      badge="PROJECTS"
      title="HEXIM and what comes after it."
      intro="Synereos runs a small number of serious projects, not a portfolio of landing pages. Each one exists to answer a question."
    >
      <section className="syn-section hairline-t">
        <div className="container-syn">
          <Grid>
            {projects.map((p) => (
              <Reveal key={p.number}>
                <article className="group relative flex h-full flex-col rounded-xl border border-black/[0.07] bg-syn-surface/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface">
                  <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">{p.number}</span>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-syn-text transition-colors group-hover:text-syn-cyan">
                    {p.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-syn-text-secondary">{p.desc}</p>
                  {p.href ? (
                    <a href={p.href} className="mono mt-8 text-[11px] tracking-[0.25em] text-syn-cyan">
                      {p.cta}
                    </a>
                  ) : (
                    <span className="mono mt-8 text-[11px] tracking-[0.25em] text-syn-text-muted">{p.cta}</span>
                  )}
                </article>
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>
    </PageShell>
  );
}