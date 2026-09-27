import { SITE } from "./site";

export const HEXIM = {
  eyebrow: "FLAGSHIP RESEARCH",
  title: "HEXIM",
  subtitle: "Investigating intelligence as a closed loop, not an open pipeline.",
  copy:
    "HEXIM is Synereos' experimental architecture — a testbed for representation, memory, and experiential learning on constrained hardware.",
  cta: { label: "EXPLORE HEXIM →", href: SITE.heximRepo },
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
} as const;
