import type { Metadata } from 'next';
import { PageShell, SectionHeading, TextBlock, Grid, Card, StatusLine, Reveal } from '@/components/ui/PageShell';

export const metadata: Metadata = {
  title: 'HEXIM — Hierarchical efficient eXecution for Intelligence Machine | Synereos',
  description: 'HEXIM is Synereos\' experimental architecture — a testbed for representation, memory, and experiential learning on constrained hardware.',
};

const principles = [
  { number: '01', title: 'Efficient Intelligence', desc: 'More useful computation per unit of resource. Not raw throughput — useful inference under hard constraints.' },
  { number: '02', title: 'Hierarchical Execution', desc: 'Adaptive execution structures that match the problem\'s natural hierarchy, instead of uniform computation.' },
  { number: '03', title: 'Model Beyond Parameters', desc: 'Intelligence is not parameter count. It\'s representation, computation, and memory working together.' },
];

const layers = [
  { number: 'L01', title: 'Perception', desc: 'Visual, audio, and multimodal encoders producing a unified representation space.' },
  { number: 'L02', title: 'Representation', desc: 'Sparse coding, VQ compression, and concept bottlenecks.' },
  { number: 'L03', title: 'Memory', desc: 'Episodic store, semantic index, and working buffer.' },
  { number: 'L04', title: 'Skills', desc: 'Skill library, composer, and executor.' },
  { number: 'L05', title: 'Planning', desc: 'Goal selector, trajectory sampler, and validator.' },
  { number: 'L06', title: 'Action', desc: 'Policy head, tool interface, and environment bridge.' },
];

const ternaryVQ = [
  { number: '01', title: 'Ternary Quantization', desc: 'Weights constrained to {-1, 0, +1}. ~16x memory reduction vs FP16 with measured fidelity bounds.' },
  { number: '02', title: 'Vector Quantization', desc: 'Codebook-based activation compression. Layer-wise codebooks with cosine fidelity tracking.' },
  { number: '03', title: 'Fidelity Gates', desc: 'Every compression step passes a PPL-degradation gate before it ships. Failures are archived, not hidden.' },
];

const memoryOS = [
  { number: '01', title: 'Episodic Memory', desc: 'Experience-indexed retention with compressed replay for long horizons.' },
  { number: '02', title: 'Semantic Memory', desc: 'Concept-level knowledge, consolidated from episodic traces.' },
  { number: '03', title: 'Working Memory', desc: 'Scratch-space context for in-flight reasoning, bounded by on-device limits.' },
];

const cognitive = [
  { number: '01', title: 'Skills', desc: 'Compositional programs the model acquires from experience — reusable, inspectable, versioned.' },
  { number: '02', title: 'Initiative', desc: 'Goal-directed behavior the system generates itself, gated by explicit intent thresholds.' },
  { number: '03', title: 'Self-Model', desc: 'Meta-cognition: the system maintains an internal estimate of what it knows and can do.' },
];

const research132 = [
  { number: '13.2C-1A', title: 'Layer-wise fidelity mapping', desc: 'Cosine fidelity per transformer layer under ternary quantization. COMPLETE.' },
  { number: '13.2C-2', title: 'Deep-layer sensitivity', desc: 'L26/L27 localization: late layers degrade first under extreme compression. COMPLETE.' },
  { number: '13.2C-3', title: 'Mixed-precision rescue', desc: 'Selective FP16 retention for sensitive layers. FAILED → analyzed and archived.' },
  { number: 'ECA-01', title: 'Experiential loop prototype', desc: 'Perception → action → learning closure on constrained hardware. INVESTIGATING.' },
];

export default function HeximPage() {
  return (
    <PageShell
      badge="FLAGSHIP RESEARCH"
      title="HEXIM"
      intro="Hierarchical efficient eXecution for Intelligence Machine — Synereos' experimental architecture for representation, memory, and experiential learning on constrained hardware."
    >
      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="CORE PRINCIPLES" title="Intelligence as a closed loop, not an open pipeline." />
          <TextBlock items={principles} />
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="ARCHITECTURE" title="Six layers. Each layer decides what the next layer computes." />
          <Grid>
            {layers.map((l) => (
              <Reveal key={l.number}>
                <Card number={l.number} title={l.title} desc={l.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>

      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="COMPRESSION RESEARCH" title="Ternary + VQ" intro="Extreme representation constraints, measured honestly." />
          <TextBlock items={ternaryVQ} />
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="MEMORY OS" title="Three stores, one system." />
          <Grid>
            {memoryOS.map((m) => (
              <Reveal key={m.number}>
                <Card number={m.number} title={m.title} desc={m.desc} />
              </Reveal>
            ))}
          </Grid>
        </div>
      </section>

      <section className="syn-section hairline-t">
        <div className="container-syn">
          <SectionHeading badge="COGNITIVE ARCHITECTURE" title="Skills, Initiative, Self-Model." />
          <TextBlock items={cognitive} />
        </div>
      </section>

      <section className="syn-section hairline-t bg-syn-surface/50">
        <div className="container-syn">
          <SectionHeading badge="13.2 RESEARCH" title="Deep layer fidelity" intro="Experiment log with results and failures preserved." />
          <TextBlock items={research132} />
          <div className="mt-12">
            <StatusLine
              items={[
                { icon: '✓', tone: 'success', text: '13.2C-1A / 13.2C-2 COMPLETE' },
                { icon: '✗', tone: 'error', text: '13.2C-3 FAILED → ANALYZED' },
                { icon: '◌', tone: 'warning', text: 'ECA-01 INVESTIGATING' },
              ]}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}