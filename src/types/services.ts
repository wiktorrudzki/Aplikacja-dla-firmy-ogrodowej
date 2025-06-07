import { IconType } from "react-icons";
import services from "@data/services.json";
import { GalleryImage, ImageNode } from "./images";

export type Service = {
  text: keyof typeof services;
  icon: IconType;
  imageId: string;
};

export type ServiceCard = Service & {
  image: GalleryImage & ImageNode;
};
