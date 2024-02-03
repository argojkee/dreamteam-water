export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function getMonthsArr(year) {
  const isLeap = isLeapYear(year);

  return [
    { name: 'January', numberOfDays: 31 },
    { name: 'February', numberOfDays: isLeap ? 29 : 28 },
    { name: 'March', numberOfDays: 31 },
    { name: 'April', numberOfDays: 30 },
    { name: 'May', numberOfDays: 31 },
    { name: 'June', numberOfDays: 30 },
    { name: 'July', numberOfDays: 31 },
    { name: 'August', numberOfDays: 31 },
    { name: 'September', numberOfDays: 30 },
    { name: 'October', numberOfDays: 31 },
    { name: 'November', numberOfDays: 30 },
    { name: 'December', numberOfDays: 31 }
  ];
}