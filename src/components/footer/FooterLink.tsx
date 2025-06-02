import * as React from "react";
import { Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

type LinkProps = {
  children?: React.ReactNode;
  to: string;
};

const FooterLink = ({ children, to, ...props }: LinkProps) => (
  <Link
    textStyle="paragraph"
    variant="underline"
    color="white"
    textDecorationColor="white"
    asChild
    {...props}
  >
    <GatsbyLink to={to}>{children}</GatsbyLink>
  </Link>
);
export default FooterLink;
