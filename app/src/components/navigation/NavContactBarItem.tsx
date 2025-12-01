import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  children?: React.ReactNode;
};

const NavContactBarItem = ({ icon, children }: Props) => (
  <HStack gap="1">
    <Icon as={icon} size="sm" />
    {children}
  </HStack>
);
export default NavContactBarItem;
