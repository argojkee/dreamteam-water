export function updateOrAddCurrentDay(data, currentDay) {
  const currentDate = currentDay.date;
  const existingDay = data.find(day => day.date === currentDate);

  if (existingDay) {
    existingDay.percent = currentDay.percent;
  } else {
    data = [...data, currentDay];
  }

  return data;
}