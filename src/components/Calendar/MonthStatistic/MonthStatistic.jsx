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
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0,transformRight: false});

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
            daysArr.push({ date: i, percent: '0%', norm: '2L', drinks:0 });
          }
        if (!day && i > today.day) {
            daysArr.push({ date: i, percent: '' });
          }
        if (day) {
          const drinkCount = Array.isArray(day.drinks) ? day.drinks.length : day.drinks;
            daysArr.push({ date: i, percent: `${day.percent}%`, norm:`${day.norm/1000}L`, drinks: drinkCount });
          }
      }
      if (compare === 1) {
        daysArr.push({ date: i, percent: '' });
      }

      if (compare === -1) {
        if (day) {
           daysArr.push({ date: i, percent: `${day.percent}%`, norm: `${day.norm/1000}L`, drinks:day.drinks });
            } else {
           daysArr.push({ date: i, percent:'0%', norm: '2L', drinks: 0  });
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

  const handleClick = event => {
    const day = Number(event.target.innerText);  
    if (day===1 || day===2 ||day===3 ||day===4 || day===11 || day===12 ||day===13 ||day===14 ||day===21 || day===22 || day===23 ||day===24 ||day===31) {
      setModalPosition(prevState => ({ ...prevState, transformRight: true }));
    } else {
      setModalPosition(prevState => ({ ...prevState, transformRight: false }));
    }

     if (day === selectedMonth.day) {
       setSelectedMonth(prevState => ({ ...prevState, day: null }));
       setModalVisible(false);
     } else {
       setSelectedMonth(prevState => ({ ...prevState, day }));
       const buttonRect = event.target.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + window.scrollY;

    setModalPosition(prevState => ({ ...prevState, top: buttonCenterY, left: buttonCenterX }));
    setModalVisible(true);
     }
  };
  
  return (
    <>
       {modalVisible && (
        <DaysGeneralStats
          top={modalPosition.top}
          left={modalPosition.left}
          transformRight={modalPosition.transformRight}
          setModalVisible={setModalVisible}
          selectedMonth={selectedMonth}
          statistic={statistic}
        />
      )}
      <MonthStatisticlist>
        {statistic.map(({ date, percent }) => (
          <li key={date}>
            <button
              onMouseEnter={handleClick}
              onClick={handleClick}
              data-fulfilled={percent > 100 ? 'true' : 'false'}
              disabled={percent === '' ? true : false}
            >
              {date}
            </button>
            <p>{percent}</p>
          </li>
        ))}
      </MonthStatisticlist>
     
    </>
  );
};

export default MonthStatistic;