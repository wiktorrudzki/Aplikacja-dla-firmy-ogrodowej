import React from "react";
import { IoStarHalfOutline, IoStarOutline, IoStarSharp } from "react-icons/io5";

type Props = { value: number };

const color = "#D69E2E";

const Star = ({ value }: Props) =>
  value === 1 ? (
    <IoStarSharp color={color} />
  ) : value === 0.5 ? (
    <IoStarHalfOutline color={color} />
  ) : (
    <IoStarOutline color={color} />
  );

export default Star;
