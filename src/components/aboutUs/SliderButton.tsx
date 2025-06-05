import { IconButton } from "@chakra-ui/react";
import * as React from "react";

type SliderButtonProps = React.PropsWithChildren & {
  type: "prev" | "next";
};

const SliderButton = ({ children, type, ...props }: SliderButtonProps) => (
  <IconButton
    aria-label={`${type} slide`}
    variant="outline"
    borderWidth={2}
    rounded="full"
    size={["xl", "2xl"]}
    color="white"
    _hover={{ color: "black" }}
    className={`swiper-button about-us-swiper-button-${type}`}
    {...props}
  >
    {children}
  </IconButton>
);

export default SliderButton;
