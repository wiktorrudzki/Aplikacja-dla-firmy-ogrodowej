import React from "react";
import ServiceCard, { ServiceType } from "./ServiceCard";

type Props = {
  services: ServiceType[];
};

const ServiceCards = ({ services }: Props) =>
  services.map((service, index) => (
    <ServiceCard key={`${service?.title}_${index}`} service={service} />
  ));

export default ServiceCards;
