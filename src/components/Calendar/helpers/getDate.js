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
  // console.log("выбр",[month1, year1])
  // console.log("сегодня",[month2, year2])
  
  if (Number(year1) < Number(year2)) {
    // console.log("сегодн.дата больше")
    return -1;
  } else if (Number(year1) > Number(year2)) {
    // console.log("вібран.дата больше")
    return 1;
  } else {
    if (Number(month1) < Number(month2)) {
      // console.log("сегодн.дата больше")
      return -1;
    } else if (Number(month1) > Number(month2)) {
      // console.log("вібран.дата больше")
      return 1;
    } else {
      // console.log("даті равні")
      return 0;
    }
  }
}