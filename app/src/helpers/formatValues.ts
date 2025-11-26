export const formatToRem = (value: number) => `${value}rem`;
export const formatToRelativePath = (path: string) =>
  path.at(0) === "/" ? path.substring(1) : path;
