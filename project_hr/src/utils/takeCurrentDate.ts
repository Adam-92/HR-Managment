export const takeCurrentDate = () => {
  const current = new Date();
  const month = current.getMonth() + 1;
  const year = current.getFullYear();
  const day = current.getDate();
  return { day, month, year };
};
