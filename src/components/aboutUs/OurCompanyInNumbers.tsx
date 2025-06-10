import { Container, Span, useToken, Wrap } from "@chakra-ui/react";
import React from "react";
import { Heading1 } from "../typography";
import { NumberCard } from "../number-card";
import { NumberCardData } from "@src/types/cards";
import { t } from "@i18n";

function OurCompanyInNumbers() {
  const green = useToken("colors", ["green.100"]);

  const OurNumbers: NumberCardData[] = [
    { value: 8, format: (v) => `${v}+`, description: t("years-of-experience") },
    {
      value: 100,
      format: (v) => `~${v}%`,
      description: t("happy-clients"),
    },
    {
      value: 300,
      format: (v) => `${v}+`,
      description: t("done-projects"),
    },
  ];
  return (
    <Container
      py={[12, 20]}
      bgGradient={{
        base: `radial-gradient(circle, ${green} 50%, white)`,
        lg: `radial-gradient(circle farthest-side, ${green} 50%, white)`,
      }}
    >
      <Heading1 textTransform="uppercase" textAlign="center">
        <Span color="green.500">{t("our-company")}</Span>
        {" " + t("in-numbers")}
      </Heading1>
      <Wrap gap={[6, 10]} justify="center" p={[6, 10]}>
        {OurNumbers.map((data, index) => (
          <NumberCard data={data} key={index} />
        ))}
      </Wrap>
    </Container>
  );
}

export default OurCompanyInNumbers;
