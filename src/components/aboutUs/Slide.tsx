import { Box, Flex, Text } from "@chakra-ui/react";
import { Slide as SlideType } from "@src/types/slide";
import { t } from "@src/utils/i18n";
import * as React from "react";
import { ExtraExtraLargeHeading, Heading1Anton, Heading2 } from "../typography";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = { slide: SlideType; nextSlides: SlideType[] };

const Slide = ({ slide, nextSlides }: Props) => {
  console.log(nextSlides);

  return (
    <>
      {getImage(slide.featuredImage) != undefined ? (
        <GatsbyImage
          image={getImage(slide.featuredImage)!}
          alt={slide.alt}
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            filter: "brightness(0.5)",
          }}
        />
      ) : null}
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
          <ExtraExtraLargeHeading>{t(slide.title)}</ExtraExtraLargeHeading>
          <Text textStyle="paragraph">{t(slide.description)}</Text>
        </Flex>
        <Flex
          style={{
            position: "fixed",
            right: "calc(-350px / 2)",
            top: "calc(50% - 250px)",
          }}
          gap={6}
        >
          {nextSlides.map((s) =>
            getImage(s.featuredImage) != undefined ? (
              <Box
                key={`next_slide_${s.id}_from_${slide.id}`}
                bgGradient="radial-gradient(linear at bottom right, rgba(0,0,0), rgba(0,0,0,0.5))"
                style={{
                  height: "500px",
                  width: "350px",
                }}
                rounded={32}
                position="relative"
              >
                <GatsbyImage
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 32,
                  }}
                  image={getImage(s.featuredImage)!}
                  alt={s.alt}
                />
                <Heading1Anton
                  fontFamily="anton"
                  position="absolute"
                  style={{ position: "absolute", left: "6%", bottom: "10%" }}
                >
                  {t(s.title)}
                </Heading1Anton>
              </Box>
            ) : null,
          )}
        </Flex>
      </Box>
    </>
  );
};

export default Slide;
