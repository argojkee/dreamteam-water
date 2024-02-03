export function updateOrAddCurrentDay(data, currentDay) {
  const currentDate = currentDay.date;

  const newData = data?.map(day => {
    if (day.day === currentDate) {
      return { ...currentDay };
    } else {
      return day;
    }
  });

  console.log(newData);
  return newData;
}
