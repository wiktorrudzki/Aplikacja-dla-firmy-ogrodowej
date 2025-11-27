import React, { CSSProperties, PropsWithChildren, useMemo } from "react";
import MainContainer from "./MainContainer";
import { Breadcrumb, ContainerProps, useToken } from "@chakra-ui/react";
import { NavigationMarginContainer } from "../navigation-margin-container";

type Props = PropsWithChildren &
  ContainerProps & {
    breadcrumbs: Array<React.JSX.Element | string>;
    withBackground?: boolean;
  };

const MainContainerWithBreadcrumbs = ({
  breadcrumbs,
  withBackground,
  children,
  ...rest
}: Props) => {
  const [primary, white] = useToken("colors", ["primary.400", "white"]);
  const [paddingBlock, paddingInline, borderRadius] = useToken("spacing", [
    "2",
    "4",
    "8",
  ]);

  const activeStyles: CSSProperties = useMemo(
    () => ({
      backgroundColor: primary,
      borderRadius,
      paddingBlock,
      paddingInline,
      fontWeight: 600,
      letterSpacing: 1.1,
      color: white,
    }),
    [borderRadius, primary, paddingBlock, paddingInline, white],
  );

  const Wrapper = withBackground ? MainContainer : NavigationMarginContainer;

  return (
    <Wrapper
      py={{
        base: 8,
        md: 8,
        lg: 12,
      }}
      {...rest}
    >
      <Breadcrumb.Root size="lg" pb={{ base: 4, lg: 6 }}>
        <Breadcrumb.List>
          {breadcrumbs.map((el, i) => {
            const isNotLast = i < breadcrumbs.length - 1;
            return (
              <React.Fragment
                key={`${i}_${typeof el === "string" ? el : el.props.children}`}
              >
                <Breadcrumb.Item>
                  <Breadcrumb.CurrentLink
                    textAlign="center"
                    style={isNotLast ? undefined : activeStyles}
                    asChild
                  >
                    {el}
                  </Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
                {isNotLast && <Breadcrumb.Separator />}
              </React.Fragment>
            );
          })}
        </Breadcrumb.List>
      </Breadcrumb.Root>
      {children}
    </Wrapper>
  );
};

export default MainContainerWithBreadcrumbs;
