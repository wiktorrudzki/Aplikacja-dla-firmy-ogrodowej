import { Box, Stack, StackProps, useToken } from "@chakra-ui/react";
import { ImageDetails } from "@src/types/images";
import { t } from "@src/utils/i18n";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

type Props = StackProps & {
  children?: React.ReactNode;
  backgroundImageDetails?: ImageDetails;
};

function ContentCard({ children, backgroundImageDetails, ...props }: Props) {
  const [borderRadius] = useToken("spacing", "4");
  const [cyan, secondary, white] = useToken("colors", [
    "primary.500",
    "secondary.500",
    "white",
  ]);

  const bgImageEl = backgroundImageDetails ? (
    <GatsbyImage
      image={backgroundImageDetails.data}
      alt={t(backgroundImageDetails.alt)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        borderRadius,
        zIndex: "-1",
        ...backgroundImageDetails.style,
      }}
    />
  ) : undefined;

  return (
    <Box
      bgGradient={
        bgImageEl
          ? undefined
          : `radial-gradient(circle farthest-side at left bottom, ${cyan}3F, ${white}3F),
      radial-gradient(circle farthest-side at right top, ${secondary}3F, ${white}3F);`
      }
      py={[4, 8, 16]}
      px={[4, 8, 16]}
      my={5}
      mx={[5]}
      alignContent="center"
      borderRadius={borderRadius}
      position="relative"
      boxShadow="element"
    >
      <Stack
        alignItems="center"
        textAlign="center"
        justifyContent="space-evenly"
        {...props}
      >
        {bgImageEl}
        {children}
      </Stack>
    </Box>
  );
}

export default ContentCard;
