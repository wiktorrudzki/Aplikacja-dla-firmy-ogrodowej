import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Slide as SlideType } from "@src/types/slide";
import { t } from "@src/utils/i18n";
import * as React from "react";

type Props = { slide: SlideType };

const Slide = ({ slide }: Props) => (
  <>
    {slide.imageElement}
    <Container color="white" height="100%" placeContent="center">
      <Flex direction="column" gap={[3, 6]} maxWidth="2xl">
        <Heading
          as="h2"
          textStyle="heading-2"
          textTransform="uppercase"
          position="relative"
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
        </Heading>
        <Heading
          as="h1"
          textStyle="extra-extra-large"
          textTransform="uppercase"
          wordBreak="break-word"
        >
          {slide.title}
        </Heading>
        <Text textStyle="paragraph">{slide.description}</Text>
      </Flex>
    </Container>
  </>
);

export default Slide;
