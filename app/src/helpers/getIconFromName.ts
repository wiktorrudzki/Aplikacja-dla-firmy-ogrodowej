import { IconType } from "react-icons";
import { BsTreeFill } from "react-icons/bs";
import {
  MdBuild,
  MdHotTub,
  MdDisabledByDefault,
  MdOpacity,
  MdAcUnit,
  MdGrass,
  MdDesignServices,
  MdLocalFlorist,
  MdWeekend,
  MdLayers,
  MdLandscape,
  MdCleaningServices,
  MdNature,
  MdBusinessCenter,
} from "react-icons/md";

const iconPacks: Record<string, IconType> = {
  MdBuild,
  MdHotTub,
  MdOpacity,
  MdAcUnit,
  MdGrass,
  MdDesignServices,
  MdLocalFlorist,
  MdWeekend,
  MdLayers,
  MdLandscape,
  BsTreeFill,
  MdCleaningServices,
  MdNature,
  MdBusinessCenter,
};

export default (iconName?: string): IconType => {
  return iconPacks[iconName ?? ""] ?? MdDisabledByDefault;
};
