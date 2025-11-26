import React from "react";
import { AnimateSlideToViewFixed } from "../animations";
import EstimateCard from "./EstimateCard";

type Props = { isVisible: boolean };

const AnimatedEstimateCard = ({ isVisible }: Props) => {
  return (
    <AnimateSlideToViewFixed
      isVisible={isVisible}
      initialPosition={{ x: 200, y: 0 }}
      elementPosition={{ bottom: 0, right: 0 }}
    >
      <EstimateCard />
    </AnimateSlideToViewFixed>
  );
};

export default AnimatedEstimateCard;
