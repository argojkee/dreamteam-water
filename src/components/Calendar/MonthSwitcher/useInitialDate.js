export const useInitialDate = () => {
  const currentDate = new Date();

  const today = {
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear()
  }

  return today
};