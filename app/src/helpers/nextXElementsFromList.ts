export default <T extends object>(list: T[], index: number, x: number): T[] => {
  if (list.length === 0 || x <= 0) return [];

  const elements: T[] = [];

  for (let i = 1; i <= x; i++) {
    const currentIndex = (index + i) % list.length;
    elements.push(list[currentIndex]);
  }

  return elements;
};
