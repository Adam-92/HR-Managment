export const numberOfPages = (totalRows: number, rowsPerPage: string) => {
  const maybeFloatNumber = totalRows / parseInt(rowsPerPage, 10);
  const pages = Math.ceil(maybeFloatNumber);
  return pages;
};
