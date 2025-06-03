import { GatsbyNode } from "gatsby";
import MillionLint from "@million/lint";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = (
  args,
) => {
  args.actions.setWebpackConfig({
    plugins: [MillionLint.webpack()],
  });
};
