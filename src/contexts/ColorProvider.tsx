import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@theme";
import React from "react";

export default function (props: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{props.children}</ChakraProvider>;
}
