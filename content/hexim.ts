import { SITE } from "./site";

export const HEXIM = {
  eyebrow: "FLAGSHIP RESEARCH",
  title: "HEXIM",
  fullTitle: "Hierarchical efficient eXecution for Intelligence Machine",
  subtitle: "Investigating intelligence as a closed loop, not an open pipeline.",
  copy:
    "HEXIM is Synereos' experimental architecture — a testbed for representation, memory, and experiential learning on constrained hardware.",
  cta: { label: "Explore HEXIM →", href: SITE.heximRepo },
  pillars: [
    "REPRESENTATION",
    "COMPRESSION",
    "MEMORY",
    "SKILL EVOLUTION",
    "ON-DEVICE",
  ],
  experienceLoop: [
    "Experience",
    "Prediction",
    "Surprise",
    "Question",
    "Experiment",
    "Learning",
    "Memory",
    "Future prediction",
  ],
  evolution: [
    { id: "hexim", label: "HEXIM", description: "Initial concept" },
    { id: "hexim-core", label: "HEXIM Core", description: "Foundational architecture" },
    { id: "hexim-3b", label: "HEXIM-3B", description: "3B parameter exploration" },
    { id: "ternary-vq", label: "Ternary + VQ", description: "Quantization research" },
    { id: "13.2-research", label: "HEXIM 13.2 Research", description: "Deep layer fidelity" },
    { id: "memory-skills", label: "Memory / Skills / Initiative", description: "Cognitive architecture" },
    { id: "hexim-infinity", label: "HEXIM Infinity", description: "Unified intelligence" },
    { id: "eca", label: "Experiential Cognitive Architecture", description: "Experience loop closure" },
  ],
  core: {
    efficientIntelligence: {
      title: "Efficient Intelligence",
      copy: "More useful computation per unit of resource. Not raw throughput — useful inference under hard constraints."
    },
    hierarchicalExecution: {
      title: "Hierarchical Execution",
      copy: "Not running the same computation uniformly. Adaptive execution structures that match the problem's natural hierarchy."
    },
    modelBeyondParameters: {
      title: "Model Beyond Parameters",
      copy: "Intelligence is not parameter count. It's representation, computation, memory, skill, and experience unified."
    }
  },
  architecture: {
    title: "HEXIM Architecture",
    subtitle: "One model. Multiple forms of intelligence.",
    layers: [
      { name: "Experience", role: "Input from world" },
      { name: "Perception", role: "Sensory encoding" },
      { name: "HEXIM Core", role: "Unified neural architecture", children: [
        "Attention", "MoE", "Ternary + VQ", "Memory representation",
        "World representation", "Goal representation", "Prediction",
        "Reasoning", "Planning"
      ] },
      { name: "Action", role: "Output to world" },
      { name: "Experience", role: "Loop closure" }
    ]
  },
  infinity: {
    eyebrow: "FLAGSHIP RESEARCH",
    title: "HEXIM Infinity",
    subtitle: "One model. Multiple forms of intelligence.",
    copy: "The unified architecture integrating Transformer + Memory + World Modeling + Learning + Planning + Self-Model + Experience into a single neural system — not disconnected agents.",
    goal: "Unified neural architecture for efficient, adaptive, experiential machine intelligence."
  }
} as const;