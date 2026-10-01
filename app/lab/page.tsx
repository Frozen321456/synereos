import type { Metadata } from 'next';
import { PageShell, SectionHeading, Grid, Card, StatusLine, Reveal } from '@/components/ui/PageShell';

export const metadata: Metadata = {
  title: 'Lab — Dashboard, Benchmarks, Roadmap | Synereos',
  description: 'The Synereos lab dashboard: current HEXIM version, active experiments, benchmark results, compression ratios, and the research roadmap.',
};

const dashboard = [
  { number: 'HEXIM', title: 'Current Version', desc: '13.2 research branch — deep layer fidelity under extreme compression.' },
  { number: 'ECA', title: 'Architecture Status', desc: 'Experiential loop prototype (ECA-01) under active investigation.' },
  { number: 'MEM', title: 'Memory Research', desc: 'Surprise-gated episodic writes (MEM-01) under active investigation.' },
];

const benchmarks = [
  { number: 'B-01', title: 'Compression Ratio', desc: 'Ternary + VQ measured against FP16 baseline. ~16x memory reduction target, gated by fidelity.' },
  { number: 'B-02', title: 'Fidelity (Cosine)', desc: 'Per-layer cosine similarity between compressed and full-precision activations.' },
  { number: 'B-03', title: 'PPL Degradation', desc: 'Perplexity delta as the hard gate: a compression step that fails the PPL bound does not ship.' },
  { number: 'B-04', title: 'Throughput', desc: 'Tokens/sec on reference mobile hardware — the honest on-device number.' },
];

const roadmap = [
  { number: 'NOW', title: 'HEXIM research', desc: '13.2 fidelity series, MEM-01 surprise-gated memory, ECA-01 loop closure.' },
  { number: 'NEXT', title: 'Unified cognitive architecture', desc: 'Memory OS + skills + initiative integrated into one runtime.' },
  { number: 'THEN', title: 'Experiential learning', desc: 'Adaptation from the system\'s own outcomes, measured against the Four Gates.' },
  { number: 'FUTURE', title: 'On-device intelligence', desc: 'Full HEXIM-class inference on consumer hardware.' },
  { number: 'LONG TERM', title: 'Adaptive machine intelligence', desc: 'Systems that keep learning after deployment — safely and honestly.' },
];

export default function LabPage() {
  return (
    <PageShell
      badge="LAB"
      title="The lab, in the open."
      intro="Current status, benchmarks we hold ourselves to, and the roadmap — without dates we can\'t defend. Numbers update when experiments do."
    >
      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="DASHBOARD" title="What's running." />
          <Grid>
            {dashboard.map((d) => (
              <Reveal key={d.number}>
                <Card number={d.number} title={d.title} desc={d.desc} />
              </Reveal>
            ))}
          </Grid>
          <div className="mt-12">
            <StatusLine
              items={[
                { icon: '✓', tone: 'success', text: '13.2C-1A / 13.2C-2 COMPLETE' },
                { icon: '✗', tone: 'error', text: '13.2C-3 FAILED → ANALYZED' },
                { icon: '◌', tone: 'warning', text: 'ECA-01 / MEM-01 INVESTIGATING' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="BENCHMARKS" title="The gates we measure against." />
          <Grid>
            {benchmarks.map((b) => (
              <Reveal key={b.number}>
                <Card number={b.number} title={b.title} desc={b.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>

      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="ROADMAP" title="Direction over dates." />
          <Grid>
            {roadmap.map((r) => (
              <Reveal key={r.number}>
                <Card number={r.number} title={r.title} desc={r.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>
    </PageShell>
  );
}