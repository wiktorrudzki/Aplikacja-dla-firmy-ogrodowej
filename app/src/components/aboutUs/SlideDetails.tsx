import { Flex } from "@chakra-ui/react";
import React from "react";
import { ExtraExtraLargeHeading, Heading2, Paragraph } from "../typography";
import { t } from "@src/utils/i18n";
import { Slide } from "@src/types/slide";

type Props = {
  slide: Slide;
};

const SlideDetails = ({ slide }: Props) => {
  return (
    <Flex
      direction="column"
      gap={[3, 6]}
      maxWidth="2xl"
      position="relative"
      m={[3, 5]}
      zIndex={slide.id * 10 + 1}
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
      <ExtraExtraLargeHeading>{t(slide.title)}</ExtraExtraLargeHeading>
      <Paragraph>{t(slide.description)}</Paragraph>
    </Flex>
  );
};

export default SlideDetails;
