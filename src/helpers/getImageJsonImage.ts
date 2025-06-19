import { ImageJsonNode } from "@src/types/graphql";
import { getImage } from "gatsby-plugin-image";

function getImageJsonImage(
  imageJson: Required<
    Pick<ImageJsonNode, "id" | "altKey" | "childImageSharp">
  > | null,
) {
  if (!imageJson) throw new Error(`Image not found!`);

  const imageData = getImage(imageJson.childImageSharp ?? null);

  if (!imageData)
    throw new Error(`ImageJson data not found! id: ${imageJson.id}`);

  return imageData;
}

export default getImageJsonImage;
