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
import { LuGripVertical } from "react-icons/lu";

const MotionBox = motion(Box);

const EstimateCard = () => {
  const [green] = useToken("colors", ["midnightGreen.500"]);

  const panelWidth = useBreakpointValue({ base: 250, lg: 300 });
  const closedOffset = useBreakpointValue({ base: 236, lg: 288 });

  return (
    <MotionBox
      position="fixed"
      bottom={{ base: 2, md: 4 }}
      right={{ base: 2, md: 4 }}
      zIndex={1}
      drag="x"
      dragConstraints={{ left: 0, right: closedOffset }}
      animate={{ x: 0 }}
      width={panelWidth}
      cursor="grab"
      display="flex"
      alignItems="center"
    >
      <Box
        bg={green}
        height="64px"
        width="16px"
        borderTopLeftRadius="xl"
        borderBottomLeftRadius="xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={20}
      >
        <LuGripVertical color="white" size={20} />
      </Box>

      <Stack
        bg="white"
        rounded="2xl"
        py={4}
        px={{ base: 6, lg: 10 }}
        boxShadow="based"
        alignItems="center"
        width="100%"
        gap={{ base: 1, md: 2 }}
      >
        <Paragraph
          lineHeight={{ base: "shorter", md: "short" }}
          textAlign="center"
        >
          {t("Skorzystaj z darmowej")}
        </Paragraph>
        <Paragraph>{t("wyceny")}</Paragraph>
        <Link
          href={`tel:${t("telephone-number")}`}
          color={green}
          aria-label={t("Kliknij, aby zadzwonić")}
        >
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
