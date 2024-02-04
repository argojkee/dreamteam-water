import { useState } from 'react';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { MonthStatisticlist } from './MonthStatistic.styled';
import { compareDates, today } from '../helpers/getDate';
import { getMonthsArr } from '../helpers/getMonthsArr';

const MonthStatistic = ({
  selectedMonth,
  monthStatistic,
  setSelectedMonth,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = event => {
    const day = Number(event.target.innerText);
    setSelectedMonth(prevState => ({ ...prevState, day }));

    const buttonRect = event.target.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + window.scrollY;

    setModalPosition({ top: buttonCenterY, left: buttonCenterX });
    setModalVisible(true);
  };
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
      console.log('statistic', statistic)
      const day = statistic.find(statisticOneDay => {
        const date = statisticOneDay.date
          ? new Date(statisticOneDay.date)
          : new Date(statisticOneDay.day);
        return date.getDate() === i;
      });

      if (compare === 0) {
  
         if (!day && i <= today.day) {
            daysArr.push({ date: i, percent: 0, norm: 'X', drinks:0 });
          }
          if (!day && i > today.day) {
            daysArr.push({ date: i, percent: '' });
          }
        if (day) {
            console.log('day111', day)
            daysArr.push({ date: i, percent: day.percent?day.percent:0, norm:`${day.norm/1000}L`, drinks:day.drinks });
          }
      }

      if (compare === 1) {
        daysArr.push({ date: i, percent: '' });
      }

      if (compare === -1) {
        if (day) {
           daysArr.push({ date: i, percent: day.percent, norm: `${day.norm/1000}L`, drinks:day.drinks });
            } else {
           daysArr.push({ date: i, percent: 0, norm: 'X', drinks: 0  });
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
        {statistic.map(({ date, percent }) => (
          <li key={date}>
            <button
              onMouseEnter={handleMouseEnter}
              data-fulfilled={percent > 100 ? 'true' : 'false'}
              disabled={percent === '' ? true : false}
            >
              {date}
            </button>
            <p>{percent ? `${percent}%` : '0%'}</p>
          </li>
        ))}
      </MonthStatisticlist>
      {modalVisible && (
        <DaysGeneralStats
          top={modalPosition.top}
          left={modalPosition.left}
          setModalVisible={setModalVisible}
          selectedMonth={selectedMonth}
          statistic={statistic}
        />
      )}
    </>
  );
};

export default MonthStatistic;
