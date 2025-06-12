import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import { IconType } from "react-icons";

const iconPacks: Record<string, Record<string, IconType>> = {
  Md: MdIcons,
  Fa: FaIcons,
  Bs: BsIcons,
  Gi: GiIcons,
};

export default (iconName: string): IconType => {
  const prefix = iconName.slice(0, 2);
  const iconPack = iconPacks[prefix];

  if (iconPack && iconName in iconPack) {
    return iconPack[iconName];
  }

  return MdIcons.MdDisabledByDefault;
};
