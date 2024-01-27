import { useState } from "react";

export const useInitialDate = () => {
  const currentDate = new Date();

  const [today, setToday] = useState({
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear()
  });

  return [today, setToday];
};