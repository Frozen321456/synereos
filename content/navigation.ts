import { SITE } from "./site";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Research", href: "#research" },
  { label: "HEXIM", href: "#hexim" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experiments", href: "#experiments" },
  { label: "Applications", href: "#applications" },
  { label: "Lab", href: "#lab" },
  { label: "Journal", href: "#journal" },
  { label: "About", href: "#about" },
  { label: "GitHub", href: SITE.github, external: true },
];

export const HEXIM_CTA: NavLink = { label: "Explore HEXIM →", href: "#hexim", external: false };