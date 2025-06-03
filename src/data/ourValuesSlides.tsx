import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Slide } from "@src/types/slide";

const imageStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
};

const OurValuesSlides: Slide[] = [
  {
    id: 1,
    title: "Profesjonalna realizacja",
    description:
      "Od pierwszej koncepcji po gotowy ogród – realizujemy każdy etap z dbałością o detale i zgodnie z oczekiwaniami klienta. Pracujemy na sprawdzonych rozwiązaniach, wykorzystujemy wysokiej jakości materiały i zapewniamy terminowe wykonanie.",
    imageElement: (
      <StaticImage
        src="../assets/images/taras 2.webp"
        alt="taras"
        style={imageStyle}
      />
    ),
  },
  {
    id: 2,
    title: "Stały kontakt z klientem",
    description:
      "Na każdym etapie realizacji projektu jesteśmy dostępni, odpowiadamy na pytania, dzielimy się postępami i wspólnie podejmujemy decyzje. Dzięki regularnej komunikacji budujemy zaufanie, lepiej rozumiemy potrzeby klienta i możemy na bieżąco dostosowywać działania do jego oczekiwań.",
    imageElement: (
      <StaticImage
        src="../assets/images/van.webp"
        alt="van"
        style={imageStyle}
      />
    ),
  },
  {
    id: 3,
    title: "Pasja do natury",
    description:
      "Tworzymy przestrzenie, które harmonijnie współgrają z przyrodą i wnoszą spokój do codziennego życia. Każdy projekt traktujemy jako szansę, by podkreślić piękno natury i wprowadzić ją do ogrodów naszych klientów w autentyczny, przemyślany sposób.",
    imageElement: (
      <StaticImage
        src="../assets/images/garden with path.webp"
        alt="taras"
        style={imageStyle}
      />
    ),
  },
  {
    id: 4,
    title: "Indywidualne podejście",
    description:
      "Proponujemy rozwiązania dopasowane do konkretnych oczekiwań, miejsca i budżetu, tworząc ogrody niepowtarzalne i w pełni funkcjonalne. Elastyczność i empatia pozwalają nam tworzyć przestrzenie, które naprawdę odpowiadają marzeniom ich właścicieli.",
    imageElement: (
      <StaticImage
        src="../assets/images/taras.webp"
        alt="taras"
        style={imageStyle}
      />
    ),
  },
];

export default OurValuesSlides;
