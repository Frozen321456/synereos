import type { Metadata } from 'next';
import { PageShell, SectionHeading, Reveal } from '@/components/ui/PageShell';

export const metadata: Metadata = {
  title: 'Publications | Synereos',
  description: 'Synereos publications: research papers, technical reports, experiment reports, architecture notes, and benchmarks. Future-ready — published when results pass their gates.',
};

const categories = [
  { number: '01', title: 'Research Paper', desc: 'Full-length papers with formal claims, methods, and reproducible results.' },
  { number: '02', title: 'Technical Report', desc: 'System-level findings: architecture decisions, measurements, and negative results.' },
  { number: '03', title: 'Experiment Report', desc: 'Single-experiment records — including the failures. Each carries method, seeds, and analysis.' },
  { number: '04', title: 'Architecture Note', desc: 'Design reasoning for HEXIM components: why a layer exists and what it costs.' },
  { number: '05', title: 'Dataset / Benchmark', desc: 'Evaluation harnesses and fidelity benchmarks we hold ourselves to.' },
];

const entries: {
  title: string;
  kind: string;
  date: string;
  version: string;
  abstract: string;
  status: 'published' | 'in-progress';
}[] = [
  {
    title: 'Deep-Layer Fidelity Under Ternary Quantization (13.2C series)',
    kind: 'Experiment Report',
    date: '2026',
    version: 'v0.3',
    abstract:
      'Layer-wise cosine fidelity mapping for a transformer family under ternary weight constraints, with L26/L27 sensitivity localization and a failed mixed-precision rescue attempt. Failures preserved with full analysis.',
    status: 'in-progress',
  },
];

export default function PublicationsPage() {
  return (
    <PageShell
      badge="PUBLICATIONS"
      title="Published when results pass their gates."
      intro="No paper-shaped announcements. Each entry carries an abstract, a date, a version, a repository, and a citation — once it has cleared the same evidence bar as everything else."
    >
      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="CATEGORIES" title="What we publish." />
          <div className="space-y-8">
            {categories.map((c, i) => (
              <Reveal key={c.number} delay={i * 60}>
                <div className="flex gap-6">
                  <span className="mono shrink-0 pt-1 text-[11px] tracking-[0.2em] text-syn-cyan">{c.number}</span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-syn-text">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-syn-text-secondary">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="CURRENT ENTRIES" title="In progress." />
          <div className="space-y-8">
            {entries.map((e, i) => (
              <Reveal key={e.title} delay={i * 60}>
                <article className="rounded-xl border border-black/[0.07] bg-white/55 p-8 backdrop-blur-md">
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                    <h3 className="text-xl font-medium tracking-tight text-syn-text">{e.title}</h3>
                    <span className="mono text-[10px] tracking-[0.2em] text-syn-cyan">{e.kind}</span>
                    <span className="mono text-[10px] tracking-[0.2em] text-syn-text-muted">{e.date} · {e.version}</span>
                    <span className="mono text-[10px] tracking-[0.2em] text-syn-warning">◌ {e.status.toUpperCase()}</span>
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-syn-text-secondary">{e.abstract}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}