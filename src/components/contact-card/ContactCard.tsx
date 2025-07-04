import { Box, Container, Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { Heading2 } from "../typography";
import { useResponsiveValues } from "@src/hooks";

type Props = {
  title: string;
  description: React.ReactNode;
  iconMode: "color" | "fill";
  Icon: IconType;
};

const ContactCard = ({ title, description, iconMode, Icon }: Props) => {
  const { contactCardIconSizeRem, contactCardIconOffsetRem } =
    useResponsiveValues();

  return (
    <Container width="fit-content" maxW="100%" margin="0 auto" padding={0}>
      <Box
        maxW="100%"
        as={Icon}
        width={contactCardIconSizeRem * 4}
        height={contactCardIconSizeRem * 4}
        fill={iconMode === "fill" ? "green.500" : "transparent"}
        color={iconMode === "color" ? "green.500" : "transparent"}
        left={`calc(50% - ${contactCardIconOffsetRem}rem)`}
        top={-contactCardIconOffsetRem * 4}
        position="absolute"
      />
      <Stack
        maxW="100%"
        bg="white"
        width={335}
        height={185}
        rounded={8}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Heading2 fontWeight="medium">{title}</Heading2>
        {description}
      </Stack>
    </Container>
  );
};

export default ContactCard;
