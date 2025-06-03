import React from "react";
import ColorProvider from "./src/contexts/ColorProvider.tsx";
import Layout from "./src/layout/Layout.tsx";
import "./global.css";
import { WrapPageElementBrowserArgs } from "gatsby";
import { GatsbyPageWithLayout } from "./src/types/page";

export const wrapRootElement = ({ element }) => {
  return <ColorProvider>{element}</ColorProvider>;
};

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs) => {
  const hideFooter =
    (element.type as GatsbyPageWithLayout)?.hideFooter ?? false;
  return (
    <Layout showFooter={!hideFooter} {...props}>
      {element}
    </Layout>
  );
};
