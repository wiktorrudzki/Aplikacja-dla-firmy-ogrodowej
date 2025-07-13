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
    preventFromSideEffects();
    setIsOpen(true);
  };

  const close = () => {
    preventFromSideEffects();
    setIsOpen(false);
  };

  const deferClose = () => {
    preventFromSideEffects();
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  const preventFromSideEffects = () =>
    timeoutRef.current && clearTimeout(timeoutRef.current);

  return (
    <Box position="relative">
      <Box
        onMouseEnter={open}
        onMouseLeave={deferClose}
        onFocus={open}
        onBlur={deferClose}
      >
        <CustomLink
          ariaLabel={t("Najedź lub użyj Tab, aby wysunąć menu")}
          mode={mode}
          to="#"
        >
          <HStack tabIndex={0}>
            {label}
            <BiChevronDown />
          </HStack>
        </CustomLink>
      </Box>

      {isOpen && (
        <Box
          position="absolute"
          left="50%"
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
          onFocus={open}
          onBlur={deferClose}
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
