import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const OurServiceImage = ({ children }: Props) => (
  <Box rounded={16} my={5} mx={[5]} boxShadow="element">
    {children}
  </Box>
);

export default OurServiceImage;
