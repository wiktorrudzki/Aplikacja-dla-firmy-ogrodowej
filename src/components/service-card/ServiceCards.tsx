import React from "react";
import ServiceCard, { ServiceCardDetails } from "./ServiceCard";

type Props = {
  services: ServiceCardDetails[];
};

const ServiceCards = ({ services }: Props) =>
  services.map((service, index) => (
    <ServiceCard key={`${service?.title}_${index}`} service={service} />
  ));

export default ServiceCards;
