export interface Program {
  id: string;
  title: string;
  status: "ACTIVE" | "UNDISCLOSED" | "EXPERIMENTAL";
  copy: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "HEXIM",
    title: "HEXIM",
    status: "ACTIVE",
    copy: "Flagship experiential intelligence architecture.",
  },
  {
    id: "TFSR",
    title: "TFSR",
    status: "EXPERIMENTAL",
    copy: "Experimental learning and representation research.",
  },
  {
    id: "JEV-MOBILE",
    title: "JEV-MOBILE",
    status: "EXPERIMENTAL",
    copy: "Compact structured decision intelligence for mobile environments.",
  },
  {
    id: "FUTURE",
    title: "FUTURE PROGRAMS",
    status: "UNDISCLOSED",
    copy: "Currently undisclosed research programs.",
  },
];
