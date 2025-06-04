import servicesCard from "@data/ServicesCards";
import { ServiceCard } from "@src/components/service-card";
import { GatsbyPageWithLayout } from "@src/types/page";
import React from "react";

const IndexPage: GatsbyPageWithLayout = () => {
  return (
    <div
      style={{
        height: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {servicesCard.map((card) => (
        <ServiceCard card={card} key={card.text} />
      ))}
    </div>
  );
};

export default IndexPage;
