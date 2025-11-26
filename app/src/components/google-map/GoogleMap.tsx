import { Box } from "@chakra-ui/react";
import React from "react";

const GoogleMap = () => (
  <Box textAlign="center" bg="white" width="100%" height="450px">
    <iframe
      src="https://www.google.com/maps/d/u/4/embed?mid=12oViRAr61nRjy0h2XUktryjkTMqw4gA&ehbc=2E312F&noprof=1"
      width="100%"
      height="100%"
      title="Zakres usług"
    ></iframe>
  </Box>
);

export default GoogleMap;
