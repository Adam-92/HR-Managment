export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'numeric',
    year: 'numeric',
    day: '2-digit',
  });
  return formatter.format(dateObj);
};
