export const seperateCamelCase = (camelCase: string) => {
  const c = camelCase.replace(/[A-Z]/g, ' $&');
  return c[0] && c[0].toUpperCase() + c.slice(1);
};
