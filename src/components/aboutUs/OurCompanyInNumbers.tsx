import { Container, Span, useToken, Wrap } from "@chakra-ui/react";
import React from "react";
import { Heading1 } from "../typography";
import { NumberCard } from "../number-card";
import { t } from "@i18n";
import { ourNumbers } from "@data/OurNumbers";

function OurCompanyInNumbers() {
  const green = useToken("colors", ["green.100"]);
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
        {ourNumbers.map((cardDetails, index) => (
          <NumberCard
            details={cardDetails}
            key={`${index}_${cardDetails.descriptionKey}`}
          />
        ))}
      </Wrap>
    </Container>
  );
}

export default OurCompanyInNumbers;
