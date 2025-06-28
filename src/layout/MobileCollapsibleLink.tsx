import { Collapsible, HStack, Stack } from "@chakra-ui/react";
import React, { useImperativeHandle } from "react";
import { BiChevronRight } from "react-icons/bi";
import CustomLink from "./Link";

type Props = {
  label: string;
  children: React.ReactNode;
};

export type MobileCollapsibleActions = {
  open: () => void;
  close: () => void;
};

const MobileCollapsibleLink = React.forwardRef<MobileCollapsibleActions, Props>(
  ({ label, children }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    useImperativeHandle(
      ref,
      () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }),
      [],
    );

    return (
      <Collapsible.Root open={isOpen}>
        <Collapsible.Trigger
          onClick={() => setIsOpen((prevValue) => !prevValue)}
        >
          <HStack>
            <CustomLink to="#">{label}</CustomLink>
            <BiChevronRight
              style={{
                transform: `rotate(${isOpen ? "90deg" : "0"})`,
                transition: "transform 100ms ease-in-out",
              }}
            />
          </HStack>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Stack gap={10} pt={8} pl={4}>
            {children}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  },
);

export default MobileCollapsibleLink;
