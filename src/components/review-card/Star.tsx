import { Box } from "@chakra-ui/react";
import React from "react";
import { IoStarHalfOutline, IoStarOutline, IoStarSharp } from "react-icons/io5";

type Props = { value: number };

const Star = ({ value }: Props) =>
  value === 1 ? (
    <Box as={IoStarSharp} color="yellow.500" />
  ) : value === 0.5 ? (
    <Box as={IoStarHalfOutline} color="yellow.500" />
  ) : (
    <Box as={IoStarOutline} color="yellow.500" />
  );

export default Star;
