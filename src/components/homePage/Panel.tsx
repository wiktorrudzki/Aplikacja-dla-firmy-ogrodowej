import * as React from "react";
import { GridProps, Grid, GridItem, VStack, Text } from "@chakra-ui/react";
import "./Panel.css";

interface PanelProps extends GridProps {
  children: React.ReactNode;
  BackgroundStaticImage: React.JSX.Element;
}

const Panel = ({ children, BackgroundStaticImage, ...props }: PanelProps) => {
  return (
    <Grid
      as="section"
      flex={1}
      transition="flex-grow 700ms ease"
      _hover={{ flex: 1.2 }}
      className="panel"
    >
      <GridItem gridArea="1/1">{BackgroundStaticImage}</GridItem>
      <GridItem
        gridArea="1/1"
        position="relative"
        background={
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)"
        }
      />
      <GridItem
        gridArea="1/1"
        position="relative"
        placeContent="center"
        justifyItems="center"
        {...props}
      >
        {children}
      </GridItem>
    </Grid>
  );
};

export default Panel;
