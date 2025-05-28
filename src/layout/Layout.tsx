import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Stack } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Stack>
      <Navigation />
      {children}
      <Footer />
    </Stack>
  );
};

export default Layout;
