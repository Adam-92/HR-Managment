export const toCamelCase = (inputString: string) => {
  return inputString
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match: string, chr: string) => {
      return chr.toUpperCase();
    });
};
