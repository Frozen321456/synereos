import type { Metadata } from 'next';
import { PageShell, SectionHeading, TextBlock, Grid, Card, Reveal } from '@/components/ui/PageShell';

export const metadata: Metadata = {
  title: 'HEXIM Infinity — One Model, Multiple Forms of Intelligence | Synereos',
  description: 'HEXIM Infinity: the unified direction — ECA, experience, world models, prediction, surprise, hypothesis, continual learning, adaptation, and the Four Gates.',
};

const formula = [
  { number: '01', title: 'Existing', desc: 'Transformer + attention + MoE: the proven substrate for efficient representation.' },
  { number: '02', title: '+ ECA', desc: 'Experiential Cognitive Architecture: perception → action → learning as a closed loop.' },
  { number: '03', title: '= Infinity', desc: 'One model that predicts, tests, adapts — and keeps its own score.' },
];

const components = [
  { number: '01', title: 'ECA', desc: 'The experiential loop that closes perception, action, and learning into one cycle.' },
  { number: '02', title: 'Experience', desc: 'The loop\'s data: outcomes, surprises, and recovery trajectories — not just labels.' },
  { number: '03', title: 'World Model', desc: 'Internal simulators for prediction: the model\'s editable copy of its environment.' },
  { number: '04', title: 'Prediction / Surprise', desc: 'Prediction error is the learning signal. Surprise drives memory writes and skill updates.' },
  { number: '05', title: 'Hypothesis Engine', desc: 'The system generates candidate explanations for its own failures and tests them.' },
  { number: '06', title: 'Continual Learning', desc: 'Adaptation without catastrophic forgetting, bounded by on-device compute.' },
  { number: '07', title: 'Adaptation', desc: 'Measured behavior change from experience — the empirical claim, not the aspiration.' },
  { number: '08', title: 'Long-Horizon Coherence', desc: 'Goals, plans, and memory that stay consistent across hours, not tokens.' },
];

const gates = [
  { number: 'GATE 1', title: 'Theoretical Coherence', desc: 'Formal consistency, complexity bounds, no internal contradictions.' },
  { number: 'GATE 2', title: 'Empirical Demonstration', desc: 'Measured on real hardware. Reproducible across seeds. Ablations complete.' },
  { number: 'GATE 3', title: 'Generalization Evidence', desc: 'Transfer beyond the training distribution, measured — not asserted.' },
  { number: 'GATE 4', title: 'Experiential Closure', desc: 'The system learns from its own outcomes. Online adaptation demonstrated.' },
];

export default function InfinityPage() {
  return (
    <PageShell
      badge="FLAGSHIP RESEARCH"
      title="HEXIM Infinity"
      intro="One model. Multiple forms of intelligence. The unified direction: existing architectures + experience = something that doesn't just answer — it adapts."
    >
      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="THE FORMULA" title="Existing + ECA = Infinity" />
          <TextBlock items={formula} />
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="COMPONENTS" title="What gets added, and why." />
          <Grid>
            {components.map((c) => (
              <Reveal key={c.number}>
                <Card number={c.number} title={c.title} desc={c.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>

      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="VALIDATION" title="Four Gates" intro="Every Infinity claim must pass all four before it becomes architecture." />
          <Grid>
            {gates.map((g) => (
              <Reveal key={g.number}>
                <Card number={g.number} title={g.title} desc={g.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>
    </PageShell>
  );
}