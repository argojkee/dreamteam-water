import { MonthStatisticlist } from './MonthStatistic.styled';
import { compareDates, today } from '../helpers/getDate';
import { getMonthsArr } from '../helpers/getMonthsArr';
import PopoverDay from '../DaysGeneralStats/PopoverDay';

const MonthStatistic = ({ selectedMonth, monthStatistic }) => {
  const currentMonth = (year, month, statistic) => {
    const daysArr = [];
    const monthData = getMonthsArr(year)[month];
    if (!monthData) {
      return daysArr;
    }
    const picData = [selectedMonth.month, selectedMonth.year];
    const todayData = [today.month, today.year];
    const compare = compareDates(picData, todayData);

    for (let i = 1; i <= monthData.numberOfDays; i += 1) {
      const day = statistic.find(statisticOneDay => {
        const date = statisticOneDay.date
          ? new Date(statisticOneDay.date)
          : new Date(statisticOneDay.day);
        return date.getDate() === i;
      });

      if (compare === 0) {
        if (!day && i <= today.day) {
          daysArr.push({ date: i, percent: 0, norm: '2L', drinks: 0 });
        }
        if (!day && i > today.day) {
          daysArr.push({ date: i, percent: '' });
        }
        if (day) {
          const drinkCount = Array.isArray(day.drinks)
            ? day.drinks.length
            : day.drinks;
          daysArr.push({
            date: i,
            percent: day.percent,
            norm: `${day.norm / 1000}L`,
            drinks: drinkCount,
          });
        }
      }
      if (compare === 1) {
        daysArr.push({ date: i, percent: '' });
      }

      if (compare === -1) {
        if (day) {
          daysArr.push({
            date: i,
            percent:day.percent,
            norm: `${day.norm / 1000}L`,
            drinks: day.drinks,
          });
        } else {
          daysArr.push({ date: i, percent: 0, norm: '2L', drinks: 0 });
        }
      }
    }
    return daysArr;
  };

  const statistic = currentMonth(
    selectedMonth.year,
    selectedMonth.month,
    monthStatistic
  );

  return (
    <>
      <MonthStatisticlist>
        {statistic.map(({ date, percent, drinks, norm }) => (
          <li key={date}>
            <PopoverDay
              key={date}
              date={date}
              drinks={drinks}
              norm={norm}
              percent={percent}
              selectedMonth={selectedMonth}
            />
            <p>{percent}%</p>
          </li>
        ))}
      </MonthStatisticlist>
    </>
  );
};

export default MonthStatistic;
