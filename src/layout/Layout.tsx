import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Stack } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  showFooter: boolean;
};

const Layout = ({ showFooter, children }: Props) => {
  return (
    <Stack>
      <Navigation />
      {children}
      {showFooter && <Footer />}
    </Stack>
  );
};

export default Layout;
