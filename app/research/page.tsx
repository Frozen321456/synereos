import type { Metadata } from 'next';
import { PageShell, SectionHeading, TextBlock, Grid, Card, StatusLine, Reveal } from '@/components/ui/PageShell';

export const metadata: Metadata = {
  title: 'Research — Experiments, Hypotheses, Evidence | Synereos',
  description: 'Synereos research: experiments, hypotheses, evidence, timeline, and journal. Measured honestly — failures preserved.',
};

const frontiers = [
  { number: '01', title: 'Efficient Intelligence', desc: 'Same or better reasoning under hard memory and compute ceilings.' },
  { number: '02', title: 'Representation', desc: 'How state is encoded, compressed, and reconstructed.' },
  { number: '03', title: 'Memory', desc: 'Episodic and semantic retention across long horizons.' },
  { number: '04', title: 'Experiential Learning', desc: 'Learning from outcomes, not just labels.' },
  { number: '05', title: 'World Models', desc: 'Internal simulators for prediction and planning.' },
  { number: '06', title: 'Autonomous Discovery', desc: 'Systems that generate and test their own hypotheses.' },
  { number: '07', title: 'On-Device Intelligence', desc: 'Real inference on real hardware people own.' },
];

const hypotheses = [
  { number: 'H-01', title: 'Deep-layer sensitivity', desc: 'If late transformer layers carry disproportionate fidelity under compression, then selective precision retention should recover most of the loss. (13.2C series)' },
  { number: 'H-02', title: 'Surprise as write signal', desc: 'If prediction error is the right memory-write trigger, then experience retention should concentrate on outcomes the model did not expect. (MEM-01)' },
  { number: 'H-03', title: 'Experience closes the loop', desc: 'If a model can act, observe outcomes, and update, then it should measurably improve on its own failure cases without retraining. (ECA-01)' },
];

const experiments = [
  { number: '13.2C-1A', title: 'Layer-wise fidelity map', desc: 'Cosine fidelity per layer under ternary weights.' },
  { number: '13.2C-2', title: 'L26/L27 localization', desc: 'Confirmed deep-layer sensitivity for the tested family.' },
  { number: '13.2C-3', title: 'Mixed-precision rescue', desc: 'Selective FP16 retention. Did not pass the PPL gate. Archived with full analysis.' },
  { number: 'MEM-01', title: 'Surprise-gated memory', desc: 'Episodic writes triggered by prediction error. In progress.' },
  { number: 'ECA-01', title: 'Experiential loop', desc: 'Full perception → action → learning closure prototype. In progress.' },
];

const timeline = [
  { number: '2023', title: 'Concept', desc: 'HEXIM concept formed; efficiency-first principles defined.' },
  { number: '2024', title: 'Foundation', desc: 'HEXIM Core architecture; 3B parameter exploration; ternary quantization.' },
  { number: '2025', title: 'Integration', desc: 'Memory OS; skill evolution; 13.2 layer fidelity research.' },
  { number: '2026', title: 'Infinity', desc: 'ECA architecture; experience loop; world model integration.' },
  { number: '2027+', title: 'Horizon', desc: 'On-device deployment; physical AI; adaptive intelligence.' },
];

export default function ResearchPage() {
  return (
    <PageShell
      badge="RESEARCH"
      title="Measure, fail, learn."
      intro="Synereos research in one line: evidence over hype, experiments over claims, and failures preserved as data. This page is the living record."
    >
      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="FRONTIERS" title="Seven directions. One method." />
          <Grid>
            {frontiers.map((f) => (
              <Reveal key={f.number}>
                <Card number={f.number} title={f.title} desc={f.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="HYPOTHESES" title="What we believe, stated falsifiably." />
          <TextBlock items={hypotheses} />
        </div>
      </section>

      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="EXPERIMENTS" title="The log — results and failures." />
          <TextBlock items={experiments} />
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
          <SectionHeading badge="TIMELINE" title="Progress, not promises." />
          <TextBlock items={timeline} />
        </div>
      </section>
    </PageShell>
  );
}