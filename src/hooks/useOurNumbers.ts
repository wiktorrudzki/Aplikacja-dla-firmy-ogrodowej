import { NumberCardDetails } from "@src/types/cards";

export default function useOurNumbers() {
  const ourNumbers: NumberCardDetails[] = [
    {
      value: 8,
      format: (v) => `${v.toFixed(0)}+`,
      descriptionKey: "years-of-experience",
    },
    {
      value: 100,
      format: (v) => `~${v.toFixed(0)}%`,
      descriptionKey: "happy-clients",
    },
    {
      value: 300,
      format: (v) => `${v.toFixed(0)}+`,
      descriptionKey: "done-projects",
    },
  ];
  return { ourNumbers };
}
