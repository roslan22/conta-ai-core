export const formatDate = (dateToFormat: string): string => {
  const date = new Date(dateToFormat);

  return date.toDateString();
};
