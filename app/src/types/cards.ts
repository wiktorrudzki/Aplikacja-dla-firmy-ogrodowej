export type NumberCardDetails = {
  value: number;
  format?: (value: number) => string;
  descriptionKey: string;
};
