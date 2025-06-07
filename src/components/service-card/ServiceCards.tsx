import { Service } from "@src/types/services";
import React from "react";
import ServiceCard from "./ServiceCard";
import { GalleryImage, ImageNode } from "@src/types/images";

type ServiceWithImage = Service & {
  image: GalleryImage & ImageNode;
};

type Props = {
  services: ServiceWithImage[];
};

const ServiceCards = ({ services }: Props) =>
  services.map((service) => (
    <ServiceCard key={`${service.text}_${service.image.id}`} card={service} />
  ));

export default ServiceCards;
