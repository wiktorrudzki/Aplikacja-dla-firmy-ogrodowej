import { HStack, Text } from "@chakra-ui/react";
import * as React from "react";

type DetailProps = {
  icon: React.ElementType;
  children: React.ReactNode;
};

const FooterContactDetail = ({ icon: Icon, children }: DetailProps) => (
  <HStack>
    <Icon size="1.5rem" />
    <Text whiteSpace="pre-line" textStyle="paragraph">
      {children}
    </Text>
  </HStack>
);

export default FooterContactDetail;
