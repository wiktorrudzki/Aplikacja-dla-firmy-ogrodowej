import { Box, Container, Stack, useBreakpointValue } from "@chakra-ui/react";
import constants from "@src/constants";
import React from "react";
import { IconType } from "react-icons";
import { Heading2 } from "../typography";

type Props = {
  title: string;
  description: React.ReactNode;
  iconMode: "color" | "fill";
  Icon: IconType;
};

const ContactCard = ({ title, description, iconMode, Icon }: Props) => {
  const iconSize = useBreakpointValue({
    base: constants.contactCardIconBaseSizeRem * 4,
    md: constants.contactCardIconMdSizeRem * 4,
  });
  const top = useBreakpointValue({
    base: -constants.contactCardIconBaseOffsetRem * 4,
    md: -constants.contactCardIconMdOffsetRem * 4,
  });

  return (
    <Container width="fit-content" margin="0 auto" padding={0}>
      <Box
        as={Icon}
        width={iconSize}
        height={iconSize}
        fill={iconMode === "fill" ? "green.500" : "transparent"}
        color={iconMode === "color" ? "green.500" : "transparent"}
        left={{
          base: `calc(50% - ${constants.contactCardIconBaseOffsetRem}rem)`,
          md: `calc(50% - ${constants.contactCardIconMdOffsetRem}rem)`,
        }}
        top={top}
        position="absolute"
      />

      <Stack
        bg="white"
        width={335}
        height={185}
        rounded={8}
        justifyContent="center"
        alignItems="center"
      >
        <Heading2 fontWeight="medium">{title}</Heading2>
        {description}
      </Stack>
    </Container>
  );
};

export default ContactCard;
