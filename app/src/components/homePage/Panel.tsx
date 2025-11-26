import * as React from "react";
import { GridProps, Grid, GridItem } from "@chakra-ui/react";
import "./Panel.css";

type PanelProps = GridProps & {
  children: React.ReactNode;
  backgroundStaticImage: React.JSX.Element;
};

const Panel = ({ children, backgroundStaticImage, ...props }: PanelProps) => {
  return (
    <Grid
      as="section"
      flex={1}
      transition="flex-grow 700ms ease"
      _hover={{ flex: 1.2 }}
      className="panel"
      position="relative"
    >
      <GridItem position="absolute" top={0} left={0} height={"100%"}>
        {backgroundStaticImage}
      </GridItem>
      <GridItem
        gridArea="1/1"
        position="relative"
        background={
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)"
        }
      />
      <Grid
        gridArea="1/1"
        position="relative"
        placeContent="center"
        justifyItems="center"
        {...props}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default Panel;
