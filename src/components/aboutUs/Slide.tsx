import { Box, Flex, Text } from "@chakra-ui/react";
import { Slide as SlideType } from "@src/types/slide";
import { t } from "@src/utils/i18n";
import * as React from "react";
import { ExtraExtraLargeHeading, Heading2 } from "../typography";

type Props = { slide: SlideType };

const Slide = ({ slide }: Props) => (
  <>
    {slide.imageElement}
    <Box color="white" height="100%" placeContent="center">
      <Flex
        direction="column"
        gap={[3, 6]}
        maxWidth="2xl"
        position="relative"
        m={[3, 5]}
      >
        <Heading2
          textTransform="uppercase"
          _before={{
            content: '""',
            position: "absolute",
            left: "0",
            top: "-6",
            height: "3px",
            rounded: "full",
            width: "16",
            backgroundColor: "white",
          }}
        >
          {t("our-values")}
        </Heading2>
        <ExtraExtraLargeHeading>{slide.title}</ExtraExtraLargeHeading>
        <Text textStyle="paragraph">{slide.description}</Text>
      </Flex>
    </Box>
  </>
);

export default Slide;
