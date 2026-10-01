import { designTokens } from './design';

export const hero = {
  badge: 'SYNEREOS — INDEPENDENT AI RESEARCH LAB',
  headline: [
    "Intelligence that doesn't only answer —",
    "it experiences, predicts,",
    "tests and adapts.",
  ],
  subtext: 'Synereos is an independent AI research lab exploring new approaches to efficient, adaptive and experiential machine intelligence. Home of HEXIM.',
  cta: {
    primary: { label: 'Explore HEXIM', href: '/hexim' },
    secondary: { label: 'Enter the Research Lab', href: '/research' },
  },
  status: {
    items: [
      { label: 'Independent AI Research Lab' },
      { label: 'Dhaka / Bangladesh' },
      { label: 'Research • Systems • Intelligence' },
    ],
  },
  canvas: {
    particleCount: 2000,
    chaosToOrder: true,
  },
};

export const question = {
  badge: 'THE QUESTION',
  headline: "What if intelligence isn't just about having more parameters?",
  intro: 'Current AI systems can scale dramatically, but Synereos investigates another question:',
  questions: [
    { number: '01', text: 'How can intelligence become more efficient?' },
    { number: '02', text: 'How can a model retain useful computation under extreme representation constraints?' },
    { number: '03', text: 'How can a model learn from experience?' },
    { number: '04', text: 'How can it build and update an internal understanding of the world?' },
    { number: '05', text: 'How can one model move beyond static inference?' },
  ],
  bridge: 'This is where HEXIM begins.',
};

export const researchSignals = {
  badge: 'RESEARCH SIGNALS',
  signals: [
    { label: 'ACTIVE RESEARCH', value: 'HEXIM' },
    { label: 'CURRENT FOCUS', value: 'EXPERIENTIAL INTELLIGENCE' },
    { label: 'MODE', value: 'EXPERIMENTAL' },
    { label: 'STATUS', value: 'ITERATING' },
  ],
  domains: [
    { number: '01', title: 'EFFICIENT INTELLIGENCE', desc: 'Same or better reasoning under hard memory and compute ceilings.', status: 'investigating' },
    { number: '02', title: 'REPRESENTATION', desc: 'How state is encoded, compressed, and reconstructed.', status: 'investigating' },
    { number: '03', title: 'MEMORY', desc: 'Episodic and semantic retention across long horizons.', status: 'investigating' },
    { number: '04', title: 'EXPERIENTIAL LEARNING', desc: 'Learning from outcomes, not just labels.', status: 'investigating' },
    { number: '05', title: 'WORLD MODELS', desc: 'Internal simulators for prediction and planning.', status: 'investigating' },
    { number: '06', title: 'AUTONOMOUS DISCOVERY', desc: 'Systems that generate and test their own hypotheses.', status: 'investigating' },
    { number: '07', title: 'ON-DEVICE INTELLIGENCE', desc: 'Real inference on real hardware people own.', status: 'investigating' },
  ],
  currentSignals: [
    { icon: '✓', color: 'success', text: '13.2C-1A / 13.2C-2 COMPLETE' },
    { icon: '✗', color: 'error', text: '13.2C-3 FAILED → ANALYZED' },
    { icon: '◌', color: 'warning', text: 'ECA-01 / MEM-01 INVESTIGATING' },
  ],
};

export const heximIntro = {
  badge: 'FLAGSHIP RESEARCH',
  title: 'HEXIM',
  subtitle: 'Hierarchical efficient eXecution for Intelligence Machine',
  tagline: 'HEXIM is Synereos\' experimental architecture — a testbed for representation, memory, and experiential learning on constrained hardware.',
  pillars: [
    { number: '01', title: 'REPRESENTATION' },
    { number: '02', title: 'COMPRESSION' },
    { number: '03', title: 'MEMORY' },
    { number: '04', title: 'SKILL EVOLUTION' },
    { number: '05', title: 'ON-DEVICE' },
  ],
  evolution: [
    { number: '01', title: 'HEXIM', desc: 'Initial concept' },
    { number: '02', title: 'HEXIM Core', desc: 'Foundational architecture' },
    { number: '03', title: 'HEXIM-3B', desc: '3B parameter exploration' },
    { number: '04', title: 'Ternary + VQ', desc: 'Quantization research' },
    { number: '05', title: 'HEXIM 13.2 Research', desc: 'Deep layer fidelity' },
    { number: '06', title: 'Memory / Skills / Initiative', desc: 'Cognitive architecture' },
    { number: '07', title: 'HEXIM Infinity', desc: 'Unified intelligence' },
    { number: '08', title: 'Experiential Cognitive Architecture', desc: 'Experience loop closure' },
  ],
  cta: { label: 'Explore HEXIM →', href: '/hexim' },
};

export const heximCore = {
  badge: 'EFFICIENT INTELLIGENCE / HIERARCHICAL EXECUTION / MODEL BEYOND PARAMETERS',
  title: 'HEXIM Core',
  intro: 'Investigating intelligence as a closed loop, not an open pipeline.',
  principles: [
    {
      number: '01',
      title: 'Efficient Intelligence',
      desc: 'More useful computation per unit of resource. Not raw throughput — useful inference under hard constraints.',
    },
    {
      number: '02',
      title: 'Hierarchical Execution',
      desc: 'Not running the same computation uniformly. Adaptive execution structures that match the problem\'s natural hierarchy.',
    },
    {
      number: '03',
      title: 'Model Beyond Parameters',
      desc: 'Intelligence is not parameter count. It\'s representation, computation, and memory working together.',
    },
  ],
  loop: {
    stages: [
      { icon: '⬇', label: 'INPUT', title: 'Perception', desc: 'World encoding', color: 'cyan' },
      { icon: '⚙', label: 'CORE', title: 'HEXIM Core', desc: 'Hierarchical execution', color: 'indigo' },
      { icon: '🧠', label: 'MEMORY', title: 'Episodic / Semantic', desc: 'Compressed retention', color: 'cyan' },
      { icon: '🎯', label: 'SKILLS', title: 'Learned Abilities', desc: 'Compositional programs', color: 'indigo' },
      { icon: '🧭', label: 'GOALS', title: 'Intent & Planning', desc: 'Goal-directed reasoning', color: 'cyan' },
      { icon: '🌍', label: 'ENV', title: 'World Model', desc: 'Internal simulation', color: 'indigo' },
      { icon: '🤖', label: 'AGENT', title: 'Autonomous Action', desc: 'World interaction', color: 'cyan' },
      { icon: '↻', label: 'LOOP', title: 'Experience', desc: 'Closed loop — continuous adaptation', color: 'primary' },
    ],
  },
};

export const heximArchitecture = {
  badge: 'HIERARCHICAL ARCHITECTURE / ADAPTIVE EXECUTION / COMPOSITIONAL DEPTH',
  title: 'HEXIM Architecture',
  intro: 'Six layers. Each layer decides what the next layer computes.',
  layers: [
    { depth: 1, name: 'Perception', components: ['Visual Encoder', 'Audio Encoder', 'Multimodal Fusion'] },
    { depth: 2, name: 'Representation', components: ['Sparse Coding', 'VQ Compression', 'Concept Bottleneck'] },
    { depth: 3, name: 'Memory', components: ['Episodic Store', 'Semantic Index', 'Working Buffer'] },
    { depth: 4, name: 'Skills', components: ['Skill Library', 'Composer', 'Executor'] },
    { depth: 5, name: 'Planning', components: ['Goal Selector', 'Trajectory Sampler', 'Validator'] },
    { depth: 6, name: 'Action', components: ['Policy Head', 'Tool Interface', 'Environment Bridge'] },
  ],
};

export const unifiedModel = {
  badge: 'UNIFIED NEURAL ARCHITECTURE / EXPERIENCE LOOP / COGNITIVE INTEGRATION',
  title: 'Unified Model',
  intro: 'Experience flows through a single architecture — no pipeline boundaries.',
  flow: [
    { icon: '🌍', label: 'EXPERIENCE', title: 'Environment', desc: 'Continuous interaction stream', color: 'cyan' },
    { icon: '👁', label: 'PERCEPTION', title: 'Multimodal Encoding', desc: 'Unified representation space', color: 'indigo' },
    { icon: '⚙', label: 'HEXIM CORE', title: 'Hierarchical Execution', desc: '9 integrated components', color: 'primary', expanded: true },
    { icon: '🎯', label: 'ACTION', title: 'World Interaction', desc: 'Policy + tool use', color: 'cyan' },
    { icon: '↻', label: 'LOOP', title: 'Experience', desc: 'Closed loop — continuous adaptation', color: 'primary' },
  ],
  coreComponents: [
    'Transformer + MoE',
    'VQ Compression',
    'Episodic Memory',
    'Semantic Memory',
    'Working Memory',
    'Skill Library',
    'World Model',
    'Planning Engine',
    'Self-Model',
  ],
};

export const heximInfinity = {
  badge: 'FLAGSHIP RESEARCH',
  title: 'HEXIM Infinity',
  subtitle: 'One model. Multiple forms of intelligence.',
  components: [
    { icon: '→', prefix: 'Transformer +', desc: 'Attention & MoE for efficient representation' },
    { icon: '→', prefix: 'Memory +', desc: 'Episodic, semantic, working, compressed' },
    { icon: '→', prefix: 'World Model +', desc: 'Internal simulators for prediction' },
    { icon: '→', prefix: 'Learning +', desc: 'Experience-driven adaptation' },
    { icon: '→', prefix: 'Planning +', desc: 'Goal-directed reasoning' },
    { icon: '→', prefix: 'Self-Model +', desc: 'Meta-cognition & introspection' },
    { icon: '→', prefix: 'Experience +', desc: 'Closed loop: perception → action → learning' },
  ],
  goal: 'Unified neural architecture for efficient, adaptive, experiential machine intelligence.',
  cta: { label: 'Explore HEXIM →', href: '/hexim' },
};

export const fourGates = {
  badge: 'VALIDATION GATES / EVIDENCE THRESHOLDS / RESEARCH DISCIPLINE',
  title: 'Four Gates',
  intro: 'Every HEXIM claim must pass four gates before it becomes architecture.',
  gates: [
    {
      number: 'GATE 1',
      title: 'Theoretical Coherence',
      desc: 'Mathematical consistency. No contradictions in the formalism.',
      criteria: ['Formal proof sketch', 'No internal contradictions', 'Computational complexity bounds'],
    },
    {
      number: 'GATE 2',
      title: 'Empirical Demonstration',
      desc: 'Measured on real hardware. Not simulated, not extrapolated.',
      criteria: ['Real device benchmarks', 'Reproducible across seeds', 'Ablation studies complete'],
    },
    {
      number: 'GATE 3',
      title: 'Generalization Evidence',
      desc: 'Works beyond the training distribution. Transfer measured.',
      criteria: ['OOD evaluation', 'Cross-task transfer', 'Scaling law validation'],
    },
    {
      number: 'GATE 4',
      title: 'Experiential Closure',
      desc: 'The system learns from its own outcomes. Loop demonstrated.',
      criteria: ['Online adaptation measured', 'Surprise-driven updates', 'Long-horizon coherence'],
    },
  ],
};

export const timeline = {
  badge: 'RESEARCH TIMELINE / MILESTONES / EVOLUTION',
  title: 'Timeline',
  intro: 'Measured progress. Failed experiments included.',
  milestones: [
    { year: '2023', phase: 'Concept', items: ['HEXIM concept formed', 'Efficiency-first principles defined'] },
    { year: '2024', phase: 'Foundation', items: ['HEXIM Core architecture', '3B parameter exploration', 'Ternary quantization'] },
    { year: '2025', phase: 'Integration', items: ['Memory OS', 'Skill evolution', '13.2 layer fidelity research'] },
    { year: '2026', phase: 'Infinity', items: ['ECA architecture', 'Experience loop', 'World model integration'] },
    { year: '2027+', phase: 'Horizon', items: ['On-device deployment', 'Physical AI', 'Adaptive intelligence'] },
  ],
};

export const applications = {
  badge: 'APPLICATIONS / ON-DEVICE / REAL-WORLD IMPACT',
  title: 'Applications',
  intro: 'Research that runs on hardware people actually own.',
  domains: [
    { icon: '📱', title: 'On-Device AI', desc: 'Full inference on mobile/edge. No cloud dependency.' },
    { icon: '👤', title: 'Personal AI', desc: 'Private, adaptive, yours. Local memory + skills.' },
    { icon: '🎙', title: 'Voice', desc: 'Natural conversation. Streaming, interruptible, contextual.' },
    { icon: '👁', title: 'Vision', desc: 'Real-time perception. Efficient video understanding.' },
    { icon: '🤖', title: 'Agents', desc: 'Autonomous task execution. Tool use + planning.' },
    { icon: '🦾', title: 'Physical AI', desc: 'Robotics. Sensorimotor loops. World model in the loop.' },
  ],
};

export const philosophy = {
  badge: 'PHILOSOPHY / PRINCIPLES / WHY WE EXIST',
  title: 'Not Another Model',
  headline: 'We are not trying to make another model.',
  subHeadline: 'We are exploring what a model could become.',
  principles: [
    'Build, don\'t imitate.',
    'Question assumptions.',
    'Measure what matters.',
    'Preserve failed results.',
    'Optimize for useful intelligence.',
    'Explore beyond conventional architectures.',
  ],
  cta: {
    primary: { label: 'Explore HEXIM', href: '/hexim' },
    secondary: { label: 'Read the Research', href: '/research' },
    tertiary: { label: 'Enter the Lab', href: '/lab' },
  },
};

export const footer = {
  name: 'SYNEREOS',
  tagline: 'AI Research Laboratory',
  nav: {
    research: ['Research', 'HEXIM', 'HEXIM Infinity', 'Experiments', 'Journal'],
    projects: ['Projects', 'Publications', 'About'],
  },
  social: {
    github: 'https://github.com/synereos',
    x: 'https://x.com/synereos',
    instagram: 'https://instagram.com/synereos',
  },
  copyright: '© 2026 SYNEREOS',
  motto: 'EXPERIMENT OVER ASSUMPTION.',
};

export const homeContent = {
  hero,
  question,
  researchSignals,
  heximIntro,
  heximCore,
  heximArchitecture,
  unifiedModel,
  heximInfinity,
  fourGates,
  timeline,
  applications,
  philosophy,
  footer,
};

export type HomeContent = typeof homeContent;