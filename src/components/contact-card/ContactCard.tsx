import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  title: string;
  description: React.ReactNode;
  iconMode: "color" | "fill";
  Icon: IconType;
};

const ContactCard = ({ title, description, iconMode, Icon }: Props) => {
  return (
    <Container width="fit-content">
      <Box
        as={Icon}
        width={16}
        height={16}
        fill={iconMode === "fill" ? "green.500" : "transparent"} // cannot use chakra colors outside chakra components
        color={iconMode === "color" ? "green.500" : "transparent"} // cannot use chakra colors outside chakra components
        style={{
          position: "absolute",
          top: "-2.5rem",
          left: "calc(50% - 2rem)",
        }}
      />

      <Stack
        bg="white"
        width={335}
        height={185}
        rounded={8}
        justifyContent="center"
        alignItems="center"
      >
        <Text textStyle="heading-2">{title}</Text>
        {description}
      </Stack>
    </Container>
  );
};

export default ContactCard;
