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
      href="/fonts/Anton-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Amiko-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Inter_18pt-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Medium.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="antonFont"
    />,
    <link
      rel="preload"
      href="/fonts/Nunito-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="antonFont"
    />,
  ]);
};
