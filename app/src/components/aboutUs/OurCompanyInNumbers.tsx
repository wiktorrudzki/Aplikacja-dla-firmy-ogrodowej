import { Span, Wrap } from "@chakra-ui/react";
import React from "react";
import { Heading1 } from "../typography";
import { NumberCard } from "../number-card";
import { t } from "@i18n";
import useOurNumbers from "@src/hooks/useOurNumbers";
import { RadialBackgroundContainer } from "../radial-background-container";

function OurCompanyInNumbers() {
  const { ourNumbers } = useOurNumbers();
  return (
    <RadialBackgroundContainer py={[12, 20]}>
      <Heading1 textTransform="uppercase" textAlign="center">
        <Span color="primary.500">{t("our-company")}</Span>
        {" " + t("in-numbers")}
      </Heading1>
      <Wrap gap={[6, 10]} justify="center" p={[6, 10]}>
        {ourNumbers.map((cardDetails, index) => (
          <NumberCard
            details={cardDetails}
            key={`${index}_${cardDetails.descriptionKey}`}
            index={index}
          />
        ))}
      </Wrap>
    </RadialBackgroundContainer>
  );
}

export default OurCompanyInNumbers;
