import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const OurServiceImage = ({ children }: Props) => (
  <Box flex="1" rounded={32} overflow="hidden" boxShadow="element">
    {children}
  </Box>
);

export default OurServiceImage;
