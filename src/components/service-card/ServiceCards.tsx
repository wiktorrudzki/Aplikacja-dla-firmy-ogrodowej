import React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceNode } from "@src/types/graphql";

type Props = {
  services: ServiceNode[];
};

const ServiceCards = ({ services }: Props) =>
  services.map((service, index) => (
    <ServiceCard key={`${service?.title}_${index}`} service={service} />
  ));

export default ServiceCards;
