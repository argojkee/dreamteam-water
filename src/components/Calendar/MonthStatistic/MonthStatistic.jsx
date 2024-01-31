import { useCallback, useState } from 'react';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { monthsArr } from '../monthsArr';
import { MonthStatisticlist } from './MonthStatistic.styled';
// import { throttle } from 'lodash';
import { throttle } from './throttle';

const MonthStatistic = ({ selectedMonth, setSelectedMonth }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const currentMonth = (month, statistic) => {
    const daysArr = [];
    const monthData = monthsArr[month];
    if (!monthData) {
      return daysArr;
    }
    for (let i = 1; i <= monthData.numberOfDays; i += 1) {
      const day = statistic.find(statisticOneDay => statisticOneDay.date === i);
      if (day) {
        daysArr.push({ date: i, percentage: day.percentage });
      } else {
        daysArr.push({ date: i, percentage: '' });
      }
    }
    return daysArr;
  };

  const stat = [
    { date: 1, percentage: 120 },
    { date: 2, percentage: 20 },
    { date: 6, percentage: 150 },
    { date: 8, percentage: 80 },
  ];

  const handleMouseEnter = useCallback(
    () =>
      throttle(event => {
        const day = Number(event.target.innerText);
        setSelectedMonth(prevState => ({ ...prevState, day }));

        const buttonRect = event.target.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + window.scrollY;

        setModalPosition({ top: buttonCenterY, left: buttonCenterX });
        setModalVisible(true);
      }, 500),
    [setSelectedMonth]
  );

  return (
    <>
      <MonthStatisticlist>
        {currentMonth(selectedMonth.month, stat).map(({ date, percentage }) => (
          <li key={date}>
            <button
              onMouseEnter={handleMouseEnter}
              data-fulfilled={percentage > 100 ? 'true' : 'false'}
            >
              {date}
            </button>
            <p>{percentage !== '' && `${percentage}%`}</p>
          </li>
        ))}
      </MonthStatisticlist>
      {modalVisible && (
        <DaysGeneralStats
          top={modalPosition.top}
          left={modalPosition.left}
          setModalVisible={setModalVisible}
          selectedMonth={selectedMonth}
        />
      )}
    </>
  );
};

export default MonthStatistic;
