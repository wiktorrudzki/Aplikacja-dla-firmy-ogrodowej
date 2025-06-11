import { HStack } from "@chakra-ui/react";
import * as React from "react";
import { Paragraph } from "@src/components/typography";

type DetailProps = {
  icon: React.ElementType;
  children: React.ReactNode;
};

const FooterContactDetail = ({ icon: Icon, children }: DetailProps) => (
  <HStack>
    <Icon size="1.5rem" />
    <Paragraph whiteSpace="pre-line">{children}</Paragraph>
  </HStack>
);

export default FooterContactDetail;
