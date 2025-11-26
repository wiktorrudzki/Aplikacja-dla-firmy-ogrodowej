import { useMemo } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

const useResponsiveValues = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const navigationHeightRem = useMemo(() => (isMobile ? 5 : 10), [isMobile]);

  const contactCardIconOffsetRem = useMemo(
    () => (isMobile ? 2 : 2.5),
    [isMobile],
  );
  const contactCardIconSizeRem = useMemo(() => (isMobile ? 3 : 4), [isMobile]);

  return {
    isMobile,
    navigationHeightRem,
    contactCardIconOffsetRem,
    contactCardIconSizeRem,
  };
};

export default useResponsiveValues;
