import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { t } from "@i18n";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Box, VStack, Text } from "@chakra-ui/react";

const ImageStyle: React.CSSProperties = {
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
};

const GradientOverlay: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)",
};

const Panel = ({ children }: { children: React.ReactNode }) => (
  <Flex
    position="relative"
    height={{ base: "50vh", md: "100vh" }}
    width={{ base: "100vw", md: "50vw" }}
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Flex>
);

const StackStyle: React.CSSProperties = {
  zIndex: 1,
  color: "white",
  textAlign: "center",
};

const IndexPage: React.FC<PageProps> = ({}) => {
  return (
    <Flex as="main" flexDir={{ base: "column", md: "row" }}>
      <Panel>
        <StaticImage
          src="../assets/images/skyscraper.jpg"
          alt="skyscraper"
          loading="eager"
          style={ImageStyle}
        />
        <Box style={GradientOverlay} />
        <VStack style={StackStyle}>
          <Text>asd</Text>
        </VStack>
      </Panel>
      <Panel>
        <StaticImage
          src="../assets/images/house.jpg"
          alt="house"
          loading="eager"
          style={ImageStyle}
        />
        <Box style={GradientOverlay} />
        <VStack style={StackStyle}>
          <Text>asd</Text>
        </VStack>
      </Panel>
    </Flex>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
