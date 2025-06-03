import { Container, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  title: string;
  description: React.ReactNode;
  iconMode: "color" | "fill";
  Icon: IconType;
};

const ContactCard = ({ title, description, iconMode, Icon }: Props) => {
  const iconSize = useBreakpointValue({
    base: 48,
    md: 64,
  });
  const top = useBreakpointValue({
    base: "-32px",
    md: "-42px",
  });

  return (
    <Container width="fit-content" margin={0} padding={0}>
      <Icon
        size={iconSize}
        fill={iconMode === "fill" ? "#6EAF3C" : "transparent"} // cannot use chakra colors outside chakra components
        color={iconMode === "color" ? "#6EAF3C" : "transparent"} // cannot use chakra colors outside chakra components
        style={{
          position: "absolute",
          top,
          left: "calc(50% - 32px)",
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
