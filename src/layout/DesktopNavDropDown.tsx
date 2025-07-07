import { Box, HStack, useToken, VStack } from "@chakra-ui/react";
import { NAVIGATION_MODE } from "@src/types/navigation";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import CustomLink from "./Link";
import { t } from "@src/utils/i18n";

type Props = {
  label: string;
  mode: NAVIGATION_MODE;
  children: React.ReactNode;
};

const DesktopNavDropDown = ({ label, mode, children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [transparentBlack] = useToken("colors", "blackAlpha.600");
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const deferClose = () => {
    timeoutRef.current = setTimeout(close, 200);
  };

  return (
    <Box position="relative">
      <CustomLink ariaLabel={t("Najedź, aby wysunąć menu")} mode={mode} to="#">
        <HStack onMouseEnter={open} onMouseLeave={deferClose}>
          {label}
          <BiChevronDown />
        </HStack>
      </CustomLink>
      {isOpen && (
        <Box
          position="absolute"
          left="calc(50%)"
          marginTop="4"
          padding="6"
          bgColor={mode === NAVIGATION_MODE.DARK ? "white" : transparentBlack}
          width="max-content"
          transform="translateX(-50%)"
          textAlign="center"
          shadow="element"
          borderRadius="sm"
          onMouseEnter={open}
          onMouseLeave={deferClose}
        >
          <VStack gap="6" onClick={close}>
            {children}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default DesktopNavDropDown;
