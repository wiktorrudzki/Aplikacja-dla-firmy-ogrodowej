import React from "react";
import ColorProvider from "./src/contexts/ColorProvider.tsx";
import Layout from "./src/layout/Layout.tsx";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Anton-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="antonFont"
    />,
  ]);
};
