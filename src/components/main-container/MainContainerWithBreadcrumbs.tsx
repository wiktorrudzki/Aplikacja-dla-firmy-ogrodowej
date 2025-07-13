import React, { PropsWithChildren } from "react";
import MainContainer from "./MainContainer";
import { Breadcrumb, ContainerProps } from "@chakra-ui/react";

type Props = PropsWithChildren &
  ContainerProps & {
    breadcrumbs: Array<React.JSX.Element | string>;
  };

const MainContainerWithBreadcrumbs = ({
  breadcrumbs,
  children,
  ...rest
}: Props) => (
  <MainContainer {...rest}>
    <Breadcrumb.Root size="lg" pb={{ base: 4, lg: 6 }}>
      <Breadcrumb.List>
        {breadcrumbs.map((el, i) => (
          <React.Fragment
            key={`${i}_${typeof el === "string" ? el : el.props.children}`}
          >
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink asChild>{el}</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
            {i < breadcrumbs.length - 1 && <Breadcrumb.Separator />}
          </React.Fragment>
        ))}
      </Breadcrumb.List>
    </Breadcrumb.Root>
    {children}
  </MainContainer>
);

export default MainContainerWithBreadcrumbs;
