import React, { PropsWithChildren } from "react";
import { MainCard } from "../main-card";
import { NavigationMarginContainer } from "../navigation-margin-container";
import { ContainerProps } from "@chakra-ui/react";

type Props = PropsWithChildren & ContainerProps;

const MainContainer = ({ children, ...rest }: Props) => (
  <NavigationMarginContainer>
    <MainCard my={{ base: 8, md: 10, lg: 12 }} {...rest}>
      {children}
    </MainCard>
  </NavigationMarginContainer>
);

export default MainContainer;
