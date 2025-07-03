import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Stack } from "@chakra-ui/react";
import { EstimateCard } from "@src/components/estimate-card";

type Props = {
  children: React.ReactNode;
  showFooter: boolean;
  showEstimateCard: boolean;
};

const Layout = ({ showFooter, showEstimateCard, children }: Props) => {
  return (
    <Stack minHeight="100vh" justifyContent="space-between" gap={0}>
      <Navigation />
      {children}
      {showFooter && <Footer />}
      {showEstimateCard && <EstimateCard fixedBottomRight />}
    </Stack>
  );
};

export default Layout;
