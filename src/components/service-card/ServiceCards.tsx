import { Service } from "@src/types/services";
import React from "react";
import ServiceCard from "./ServiceCard";

type Props = {
  services: Service[];
};

const ServiceCards = ({ services }: Props) =>
  services.map((service, index) => (
    <ServiceCard key={`${service?.title}_${index}`} service={service} />
  ));

export default ServiceCards;
