import React from "react";
import ColorProvider from "./src/contexts/ColorProvider.tsx";
import Layout from "./src/layout/Layout.tsx";

export const wrapRootElement = ({ element }) => {
  return <ColorProvider>{element}</ColorProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Anton-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Amiko-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Nunito-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="antonFont"
    />,
  ]);
};
