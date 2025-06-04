import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MdLandscape } from "react-icons/md";
import services from "./services.json";
import { Service } from "@src/types/services";

const styles: Omit<React.ComponentProps<typeof StaticImage>, "src" | "alt"> = {
  objectFit: "cover",
  style: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    borderRadius: 8,
  },
};

const servicesCard: Service[] = [
  {
    text: services.UTRZYMANIE_TERENOW_ZEWNETRZNYCH,
    icon: MdLandscape,
    image: (
      <StaticImage
        src="../assets/images/garden maintenance.jpg"
        alt={`${services.UTRZYMANIE_TERENOW_ZEWNETRZNYCH}-photo`}
        {...styles}
      />
    ),
  },
  {
    text: services.TERENY_ZIELONE_DLA_FIRM,
    icon: MdLandscape,
    image: (
      <StaticImage
        src="../assets/images/garden maintenance.jpg"
        alt={`${services.TERENY_ZIELONE_DLA_FIRM}-photo`}
        {...styles}
      />
    ),
  },
];

export default servicesCard;
