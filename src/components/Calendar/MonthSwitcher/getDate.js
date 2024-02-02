export const getDate = (date) => {
  const currentDate = new Date(date);

  return {
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear()
  }
};