import { MDXProvider } from "@mdx-js/react";
import { HeadingType, ParagraphType } from "@src/types/typography";
import React from "react";
import type { ComponentProps, PropsWithChildren } from "react";
import {
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  UnorderedList,
  OrderedList,
} from "../typography";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import { Link, LinkProps, ListRootProps } from "@chakra-ui/react";

const shortcodes = {
  h1: (props: HeadingType) => <Heading1 my="6" {...props} />,
  h2: Heading2,
  h3: Heading3,
  p: (props: ParagraphType) => <Paragraph my="4" {...props} />,
  ul: (props: ListRootProps) => <UnorderedList my="4" {...props} />,
  ol: (props: ListRootProps) => <OrderedList my="4" {...props} />,
  GatsbyLink: ({ ref, children, ...rest }: GatsbyLinkProps<any>) => (
    <Link color="midnightGreen.500" asChild>
      <GatsbyLink {...rest}>{children}</GatsbyLink>
    </Link>
  ),
  Link: (props: LinkProps) => <Link color="midnightGreen.500" {...props} />,
};

const MdxCustomProvider = ({
  children,
  ...rest
}: PropsWithChildren<ComponentProps<typeof MDXProvider>>) => {
  return (
    <MDXProvider components={shortcodes} {...rest}>
      {children}
    </MDXProvider>
  );
};

export default MdxCustomProvider;
