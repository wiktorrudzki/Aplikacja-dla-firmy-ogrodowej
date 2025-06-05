import { Text } from "@chakra-ui/react";
import { ParagraphType } from "@src/types/typography";
import React from "react";

const Paragraph = ({ children, ...props }: ParagraphType) => (
  <Text {...props}>{children}</Text>
);

export default Paragraph;
