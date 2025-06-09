import pl from "@src/locales/pl.json";

const langData: { [key: string]: string } = pl;

export const t = (key: string): string => langData[key] || key;

export const lang = "pl-PL";
