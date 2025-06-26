import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const OurServiceImage = ({ children }: Props) => (
  <Box rounded={32} my={5} mx={[5]} overflow="hidden" boxShadow="element">
    {children}
  </Box>
);

export default OurServiceImage;
