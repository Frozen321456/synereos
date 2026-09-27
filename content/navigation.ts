import { SITE } from "./site";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "RESEARCH", href: "#research" },
  { label: "HEXIM", href: "#hexim" },
  { label: "EVIDENCE", href: "#evidence" },
  { label: "PROGRAMS", href: "#programs" },
  { label: "ABOUT", href: "#about" },
  { label: "GITHUB", href: SITE.github, external: true },
];
