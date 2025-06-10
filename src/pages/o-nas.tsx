import { Box, Container, Span, useToken, VStack, Wrap } from "@chakra-ui/react";
import { HeroSlider } from "@src/components/aboutUs";
import {
  ExtraLargeHeading,
  Heading1,
  Paragraph,
} from "@src/components/typography";
import { GatsbyPageWithLayout } from "@src/types/page";
import React, { PropsWithChildren } from "react";

type OurNumberData = {
  value: number;
  format?: (value: number) => string;
  description: string;
};

const NumberCard = ({ data }: PropsWithChildren & { data: OurNumberData }) => (
  <VStack
    textAlign="center"
    bgColor="green.50"
    p="10"
    borderRadius="2xl"
    shadow="element"
  >
    <ExtraLargeHeading fontWeight="extrabold" color="green.500">
      {data.format ? data.format(data.value) : data.value}
    </ExtraLargeHeading>
    <Paragraph textTransform="uppercase" width="min-content" fontWeight="bold">
      {data.description}
    </Paragraph>
  </VStack>
);

const About: GatsbyPageWithLayout = () => {
  const green = useToken("colors", ["green.100"]);

  const OurNumbers: OurNumberData[] = [
    { value: 8, format: (v) => `${v}+`, description: "lat doświadczenia" },
    {
      value: 100,
      format: (v) => `~${v}%`,
      description: "zadowolonych klientów",
    },
    {
      value: 300,
      format: (v) => `${v}+`,
      description: "zrealizowanych projektów",
    },
  ];

  return (
    <Box>
      <HeroSlider />
      <Container
        py={[12, 20]}
        bgGradient={{
          base: `radial-gradient(circle, ${green} 50%, white)`,
          lg: `radial-gradient(circle farthest-side, ${green} 50%, white)`,
        }}
      >
        <Heading1 textTransform="uppercase" textAlign="center">
          <Span color="green.500">Nasza firma</Span> w liczbach
        </Heading1>
        <Wrap gap={[6, 10]} justify="center" p={[6, 10]}>
          {OurNumbers.map((data, index) => (
            <NumberCard data={data} key={index} />
          ))}
        </Wrap>
      </Container>
    </Box>
  );
};

export default About;
