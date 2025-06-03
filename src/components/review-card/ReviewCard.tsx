import { Card, Flex } from "@chakra-ui/react";
import React from "react";
import Star from "./Star";

type Props = {
  reviewer: string;
  description: string;
  rating: number;
};

const getStarArray = (value: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(1);
    } else if (value >= i - 0.5) {
      stars.push(0.5);
    } else {
      stars.push(0);
    }
  }

  return stars;
};

const ReviewCard = ({ reviewer, description, rating }: Props) => (
  <Card.Root maxWidth={430}>
    <Card.Header textStyle="heading-3" width="100%">
      <Flex justifyContent="space-between" wrap="wrap">
        {reviewer}
        <Flex gap={2}>
          {getStarArray(rating).map((val, index) => (
            <Star key={`rating.star.${reviewer}.${index}.${val}`} value={val} />
          ))}
        </Flex>
      </Flex>
    </Card.Header>
    <Card.Body textStyle="paragraph">{description}</Card.Body>
  </Card.Root>
);

export default ReviewCard;
