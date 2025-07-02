import { ROUTES } from "@src/constants";
import { ImageDataLike } from "gatsby-plugin-image";
import React from "react";

export type Service = {
  title: string;
  icon: string;
  featuredImage: ImageDataLike;
  alt: string;
};

export type OurService = {
  title: string;
  aboutDescription: string;
  homeDescription: string;
  route: ROUTES;
  image: React.JSX.Element;
};
