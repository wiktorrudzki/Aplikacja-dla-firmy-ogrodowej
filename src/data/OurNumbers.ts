import { NumberCardDetails } from "@src/types/cards";

export const OurNumbers: NumberCardDetails[] = [
  {
    value: 8,
    format: (v) => `${v}+`,
    descriptionKey: "years-of-experience",
  },
  {
    value: 100,
    format: (v) => `~${v}%`,
    descriptionKey: "happy-clients",
  },
  {
    value: 300,
    format: (v) => `${v}+`,
    descriptionKey: "done-projects",
  },
];
