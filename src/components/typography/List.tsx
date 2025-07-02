import { List as ChakraList, ListRootProps } from "@chakra-ui/react";
import React from "react";

export const UnorderedList = ({ children, ...rest }: ListRootProps) => {
  return (
    <ChakraList.Root marginLeft="6" {...rest}>
      {children}
    </ChakraList.Root>
  );
};

export const OrderedList = ({ children, ...rest }: ListRootProps) => {
  return (
    <UnorderedList as="ol" {...rest}>
      {children}
    </UnorderedList>
  );
};
