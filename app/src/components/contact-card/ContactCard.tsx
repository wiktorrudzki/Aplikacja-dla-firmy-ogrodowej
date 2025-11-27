import { Box, Container, Stack } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { Heading2 } from "../typography";
import { useResponsiveValues } from "@src/hooks";

type Props = {
  title: string;
  description: React.ReactNode;
  iconMode: "color" | "fill";
  iconAriaLabel?: string;
  Icon: IconType;
};

const ContactCard = ({
  title,
  description,
  iconMode,
  iconAriaLabel,
  Icon,
}: Props) => {
  const { contactCardIconSizeRem } = useResponsiveValues();

  return (
    <Container
      borderColor="primary.500"
      borderWidth={2}
      borderStyle="solid"
      borderRadius={32}
      width="fit-content"
      maxW="100%"
      margin="0 auto"
      padding={0}
      paddingY={{ base: 6, md: 8 }}
    >
      <Stack
        maxW="100%"
        width={335}
        height={185}
        rounded={8}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Box
          maxW="100%"
          as={Icon}
          aria-label={iconAriaLabel}
          width={contactCardIconSizeRem * 4}
          height={contactCardIconSizeRem * 4}
          fill={iconMode === "fill" ? "primary.500" : "transparent"}
          color={iconMode === "color" ? "primary.500" : "transparent"}
        />
        <Heading2 fontWeight="medium">{title}</Heading2>
        {description}
      </Stack>
    </Container>
  );
};

export default ContactCard;
