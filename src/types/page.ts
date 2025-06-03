import type { FC } from "react";

export type GatsbyPageWithLayout<T = {}> = FC<T> & {
  hideFooter?: boolean;
};
