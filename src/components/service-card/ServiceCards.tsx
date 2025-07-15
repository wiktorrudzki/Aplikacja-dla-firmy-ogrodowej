import React from "react";
import ServiceCard, { ServiceCardDetails } from "./ServiceCard";
import { Wrap } from "@chakra-ui/react";

type Props = {
  services: ServiceCardDetails[];
};

const ServiceCards = ({ services }: Props) => (
  <Wrap gap={{ base: "4", md: "6" }} justifyContent="center">
    {services.map((service, index) => (
      <ServiceCard key={`${service?.title}_${index}`} service={service} />
    ))}
  </Wrap>
);

export default ServiceCards;
