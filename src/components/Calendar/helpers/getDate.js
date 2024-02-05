export const funcGetDate = (date) => {
  const currentDate = new Date(date);

  return {
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear()
  }
};

export const today = funcGetDate(Date.now())

export const compareDates = ([month1, year1], [month2, year2])=>{
  
  if (Number(year1) < Number(year2)) {
    return -1;
  } else if (Number(year1) > Number(year2)) {
    return 1;
  } else {
    if (Number(month1) < Number(month2)) {
      return -1;
    } else if (Number(month1) > Number(month2)) {
      return 1;
    } else {
      return 0;
    }
  }
}