import React from "react";
import { Alert, AlertTitle, AlertDescription, Box } from "@chakra-ui/react";

type Props = {
  title: string;
  message: string;
  status?: "info" | "warning" | "error" | "success" | "neutral";
};

const CustomAlert = ({ title, status, message }: Props) => (
  <Alert.Root status={status} variant="subtle" mt={4} borderRadius="md">
    <Alert.Indicator />
    <Box flex="1">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Box>
  </Alert.Root>
);

export default CustomAlert;
