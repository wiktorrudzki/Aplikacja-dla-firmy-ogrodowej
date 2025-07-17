import React, { CSSProperties, PropsWithChildren, useMemo } from "react";
import MainContainer from "./MainContainer";
import { Breadcrumb, ContainerProps, useToken } from "@chakra-ui/react";

type Props = PropsWithChildren &
  ContainerProps & {
    breadcrumbs: Array<React.JSX.Element | string>;
  };

const MainContainerWithBreadcrumbs = ({
  breadcrumbs,
  children,
  ...rest
}: Props) => {
  const [green, white] = useToken("colors", ["green.400", "white"]);
  const [paddingBlock, paddingInline, borderRadius] = useToken("spacing", [
    "2",
    "4",
    "8",
  ]);

  const activeStyles: CSSProperties = useMemo(
    () => ({
      backgroundColor: green,
      borderRadius,
      paddingBlock,
      paddingInline,
      fontWeight: 600,
      letterSpacing: 1.1,
      color: white,
    }),
    [borderRadius, green, paddingBlock, paddingInline, white],
  );

  return (
    <MainContainer {...rest}>
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
    </MainContainer>
  );
};

export default MainContainerWithBreadcrumbs;
