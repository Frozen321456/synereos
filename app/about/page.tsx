import type { Metadata } from 'next';
import { PageShell, SectionHeading, TextBlock, Grid, Card, Reveal } from '@/components/ui/PageShell';

export const metadata: Metadata = {
  title: 'About — Synereos',
  description: 'Synereos is an independent AI research and technology laboratory. Philosophy: build, don\'t imitate. Question assumptions. Measure what matters.',
};

const identity = [
  { number: '01', title: 'Independent AI research and technology laboratory', desc: 'Not a product company pretending to be a lab, and not a lab that never ships. Synereos exists to investigate new architectures for intelligence — and to make the findings real.' },
  { number: '02', title: 'Home of HEXIM', desc: 'One flagship program: hierarchical efficient execution for intelligence machines, from compression research to experiential architectures.' },
  { number: '03', title: 'Dhaka, Bangladesh', desc: 'Built outside the traditional centers — by design. Constraints that others treat as noise are our research program.' },
];

const philosophy = [
  { number: '01', title: 'Build, don\'t imitate.', desc: 'Reimplementing what exists teaches you the syntax, not the physics. We start from the constraint we care about.' },
  { number: '02', title: 'Question assumptions.', desc: 'Scale as the only lever. Parameters as the only metric. Static inference as the only mode. All three are hypotheses, not laws.' },
  { number: '03', title: 'Measure what matters.', desc: 'Fidelity under compression, adaptation from experience, throughput on real hardware — numbers that survive scrutiny.' },
  { number: '04', title: 'Preserve failed results.', desc: 'A documented failure is worth more than an unmeasured success. 13.2C-3 stays in the log.' },
  { number: '05', title: 'Optimize for useful intelligence.', desc: 'Not benchmark theater — useful computation per unit of resource, on devices people own.' },
  { number: '06', title: 'Explore beyond conventional architectures.', desc: 'If the obvious path were sufficient, it would already be enough. It isn\'t.' },
];

const principles = [
  { number: '01', title: 'Evidence over hype', desc: 'Claims carry citations to experiment records. No exceptions.' },
  { number: '02', title: 'Experiments over claims', desc: 'An unrun experiment is a hypothesis, and we label it as one.' },
  { number: '03', title: 'Architecture over abstraction', desc: 'Ideas get implementations, or they get archived.' },
  { number: '04', title: 'Efficiency over brute force', desc: 'The interesting question is what a system can do with what it has.' },
  { number: '05', title: 'Failure is data', desc: 'Preserved, analyzed, cited.' },
  { number: '06', title: 'Open questions remain open', desc: 'We say what we don\'t know, in public, in writing.' },
];

const openResearch = [
  { number: 'PUBLIC', title: 'Public Research', desc: 'Experiment records, architecture notes, benchmarks, and reproducibility materials — published as results pass their gates.' },
  { number: 'CORE', title: 'Private Core Research', desc: 'Some HEXIM core materials remain private while under active development. What is public is honest about what isn\'t.' },
];

export default function AboutPage() {
  return (
    <PageShell
      badge="ABOUT SYNEREOS"
      title="Independent AI research and technology laboratory."
      intro="Synereos investigates what happens when we stop treating today\'s AI architecture as a fixed assumption — and measures what it finds."
    >
      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="IDENTITY" title="What Synereos is." />
          <TextBlock items={identity} />
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="PHILOSOPHY" title="Why we exist." />
          <TextBlock items={philosophy} />
        </div>
      </section>

      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="RESEARCH PRINCIPLES" title="Six rules, no asterisks." />
          <Grid>
            {principles.map((p) => (
              <Reveal key={p.number}>
                <Card number={p.number} title={p.title} desc={p.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="GITHUB / OPEN RESEARCH" title="What's public, what isn't." />
          <Grid>
            {openResearch.map((o) => (
              <Reveal key={o.number}>
                <Card number={o.number} title={o.title} desc={o.desc} />
              </Reveal>
            ))}
          </Grid>
          <div className="mt-12">
            <a
              href="https://github.com/synereos"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[11px] tracking-[0.25em] text-syn-cyan"
            >
              GITHUB ORGANIZATION ↗
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}