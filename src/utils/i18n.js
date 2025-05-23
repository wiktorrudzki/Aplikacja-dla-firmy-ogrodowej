import pl from "@src/locales/pl.json";
const langData = pl;
export const t = (key) => langData[key] || key;
