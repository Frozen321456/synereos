import type { Metadata } from 'next';
import { PageShell, SectionHeading, Grid, Card, Reveal } from '@/components/ui/PageShell';

export const metadata: Metadata = {
  title: 'Applications — On-Device, Personal AI, Agents, Physical | Synereos',
  description: 'Where HEXIM research lands: on-device AI, personal AI, voice, vision, agents, and physical systems — real inference on hardware people own.',
};

const domains = [
  { number: '01', title: 'On-Device AI', desc: 'Full inference on mobile and edge hardware. No cloud dependency, no latency theater.' },
  { number: '02', title: 'Personal AI', desc: 'Private and adaptive. Local memory and skills that compound for one person.' },
  { number: '03', title: 'Voice', desc: 'Natural conversation: streaming, interruptible, context-aware.' },
  { number: '04', title: 'Vision', desc: 'Real-time perception with efficient video understanding under memory ceilings.' },
  { number: '05', title: 'Agents', desc: 'Autonomous task execution: tool use, planning, and self-verification.' },
  { number: '06', title: 'Physical AI', desc: 'Robotics and sensorimotor loops with a world model in the loop.' },
];

const constraints = [
  { number: 'RAM', title: 'Low-RAM Inference', desc: 'Ternary + VQ compression exists for exactly this: useful computation inside a phone\'s memory budget.' },
  { number: 'WATT', title: 'Power Budgets', desc: 'Efficiency is a battery metric. Hierarchical execution spends compute where it changes the outcome.' },
  { number: 'PRIVACY', title: 'Local-First', desc: 'If inference is on-device, personal data can stay personal — by architecture, not policy.' },
];

export default function ApplicationsPage() {
  return (
    <PageShell
      badge="APPLICATIONS"
      title="Research that runs on hardware people own."
      intro="HEXIM\'s constraints are the point: if it works on a phone, it works anywhere. These are the directions the architecture is built to serve."
    >
      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="DOMAINS" title="Six places this matters." />
          <Grid>
            {domains.map((d) => (
              <Reveal key={d.number}>
                <Card number={d.number} title={d.title} desc={d.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="WHY IT WORKS" title="The constraints are the design." />
          <Grid>
            {constraints.map((c) => (
              <Reveal key={c.number}>
                <Card number={c.number} title={c.title} desc={c.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>
    </PageShell>
  );
}