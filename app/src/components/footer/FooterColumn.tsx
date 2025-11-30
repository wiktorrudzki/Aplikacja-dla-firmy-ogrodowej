import React from "react";
import { VStack } from "@chakra-ui/react";

import { Heading2 } from "../typography";

type Props = React.ComponentProps<typeof VStack> & {
  title?: string;
  children?: React.ReactNode;
};

const FooterColumn = ({ title, children, ...props }: Props) => {
  return (
    <VStack align="start" {...props} gap="3">
      {title && (
        <Heading2 textTransform="uppercase" size="4xl">
          {title}
        </Heading2>
      )}
      {children}
    </VStack>
  );
};

export default FooterColumn;
