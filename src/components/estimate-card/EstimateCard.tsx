import React from "react";
import {
  Box,
  Flex,
  Link,
  Stack,
  useBreakpointValue,
  useToken,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdPhone } from "react-icons/md";
import { Heading2, Paragraph } from "../typography";
import { t } from "@src/utils/i18n";

const MotionBox = motion(Box);

const EstimateCard = () => {
  const [green] = useToken("colors", ["green.500"]);

  const panelWidth = useBreakpointValue({ base: 225, lg: 250 });
  const closedOffset = useBreakpointValue({ base: 215, lg: 255 });

  return (
    <MotionBox
      position="fixed"
      bottom={{ base: 2, md: 4, "2xl": 8 }}
      right={{ base: 2, md: 4, "2xl": 8 }}
      zIndex={1}
      drag="x"
      dragConstraints={{ left: 0, right: closedOffset }}
      animate={{ x: 0 }}
      width={panelWidth}
      cursor="grab"
    >
      <Stack
        position="relative"
        bg="green.50"
        rounded="2xl"
        py={4}
        px={{ base: 4, lg: 6 }}
        boxShadow="based"
        alignItems="center"
      >
        <Paragraph textAlign="center">{t("Skorzystaj z darmowej")}</Paragraph>
        <Paragraph>{t("wyceny")}</Paragraph>

        <Link href={`tel:${t("telephone-number")}`} color="green.500">
          <Flex gap={2} alignItems="center">
            <MdPhone size={16} color={green} />
            <Heading2 fontSize={{ base: "lg", lg: "2xl" }} textAlign="center">
              {t("telephone-number")}
            </Heading2>
          </Flex>
        </Link>
      </Stack>
    </MotionBox>
  );
};

export default EstimateCard;
