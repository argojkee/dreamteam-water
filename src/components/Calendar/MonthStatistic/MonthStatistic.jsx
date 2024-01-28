import { ClassNames } from "@emotion/react";
import { monthsArr } from "../monthsArr";
import { MonthStatisticlist } from "./MonthStatistic.styled";
const MonthStatistic = ({ selectedMonth }) => {
  
  const currentMonth = (month, statistic) => {
    const daysArr = [];
    const monthData = monthsArr[month];
    if (!monthData) {
      return daysArr;
    }
    for (let i = 1; i <= monthData.numberOfDays; i += 1) {
      const day = statistic.find((statisticOneDay) => statisticOneDay.date === i);
      if (day) {
        daysArr.push({ date: i, percentage: day.percentage });
      } else {
        daysArr.push({ date: i, percentage: "0" });
      }
    }
    return daysArr;
  };

  const stat = [{date:1, percentage: 120}, {date:2, percentage: 20}, {date:6, percentage: 150}, {date:8, percentage: 80},]

  return (
    <>
      <MonthStatisticlist style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
        {currentMonth(selectedMonth.month, stat ).map(({ date, percentage }) => (
        <li key={date}>
          <button title="Click to view daily statistics" data-fulfilled={percentage > 100 ? 'true' : 'false'}>{date}</button>
            <p>{percentage !== '' && `${percentage}%`}</p>
        </li>
      ))}
      </MonthStatisticlist>
      </>
  );
};

export default MonthStatistic

// {percentage < 100 ? 'true' : 'false'}

