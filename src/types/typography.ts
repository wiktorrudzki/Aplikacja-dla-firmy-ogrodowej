import { HeadingProps, TextProps } from "@chakra-ui/react";

export type HeadingType = TypographyElement<HeadingProps>;

export type ParagraphType = TypographyElement<TextProps>;

type TypographyElement<T> = React.PropsWithChildren<
  T & React.RefAttributes<HTMLParagraphElement>
>;
