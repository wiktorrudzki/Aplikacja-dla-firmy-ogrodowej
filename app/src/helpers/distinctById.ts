export default function distinctById<T extends { id: string }>(elements: T[]) {
  const elementIds = new Set<string>();
  const filteredElements: T[] = [];

  elements.forEach((element) => {
    if (elementIds.has(element.id)) return;
    elementIds.add(element.id);
    filteredElements.push(element);
  });

  return filteredElements;
}
