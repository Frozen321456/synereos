import { SITE } from "./site";

export const HEXIM = {
  eyebrow: "01 / FLAGSHIP RESEARCH",
  title: "HEXIM",
  subtitle: "Intelligence beyond parameters.",
  copy: "Researching extreme efficiency, representation and on-device intelligence.",
  cta: { label: "EXPLORE HEXIM →", href: SITE.heximRepo },
  pillars: ["TERNARY BACKBONE", "VECTOR QUANTIZATION", "RUNTIME ARCHITECTURE"],
  architecture: [
    { id: "input", label: "INPUT" },
    { id: "representation", label: "REPRESENTATION" },
    { id: "ternary", label: "TERNARY BACKBONE" },
    { id: "vq", label: "VECTOR QUANTIZATION" },
    { id: "runtime", label: "RUNTIME" },
  ],
} as const;
