import React, { PropsWithChildren } from "react";
import { MainContainer } from "@src/components/main-container";
import { MdxCustomProvider } from "@src/components/mdx";

const BasicPageTempate = ({ children }: PropsWithChildren) => {
  return (
    <MainContainer>
      <MdxCustomProvider>{children}</MdxCustomProvider>
    </MainContainer>
  );
};

export default BasicPageTempate;
