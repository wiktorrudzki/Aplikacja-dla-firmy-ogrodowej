import { Box, Stack } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainCard = ({ children }: Props) => {
  return (
    <Box
      bgGradient="radial-gradient(circle at bottom right, #EBF8FF, #EBF4E4)" // hardcode colors becuase cannot reference the variable from here
      py={{
        base: 16,
        lg: 48,
      }}
      px={{
        base: 32,
        lg: 64,
      }}
      borderRadius={16}
      boxShadow="element"
    >
      <Stack alignItems="center">{children}</Stack>
    </Box>
  );
};

export default MainCard;
