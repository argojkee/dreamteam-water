// import { ClassNames } from "@emotion/react";
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { monthsArr } from '../monthsArr';
import { MonthStatisticlist } from './MonthStatistic.styled';



const MonthStatistic = ({ selectedMonth, modalVisible, setModalVisible, setModalPosition, setSelectedMonth }) => {
  

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
        daysArr.push({ date: i, percentage: '0' });
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

  const handleClick = (event) => {
    const day = Number(event.target.innerText)
    if (day !== selectedMonth.day  ) {
       setSelectedMonth({ ...selectedMonth, day: day });

    if (modalVisible) {
      setModalVisible(false);
    } else {
      const buttonRect = event.target.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.width;
      
    setModalPosition({ top: buttonCenterY, left: buttonCenterX });
    setModalVisible(true);
  }
    } else {
      setModalVisible(false);
      // setSelectedMonth({ ...selectedMonth, day: null });
    }
   
  };

  
  return (
    <>
      <MonthStatisticlist>
        {currentMonth(selectedMonth.month, stat).map(({ date, percentage }) => (
          <li key={date}>
            <button onClick={handleClick}
              title="Click to view daily statistics"
              data-fulfilled={percentage > 100 ? 'true' : 'false'}
            >
              {date}
            </button>
            <p>{percentage !== '' && `${percentage}%`}</p>
          </li>
        ))}
      </MonthStatisticlist>
    </>
  );
};

export default MonthStatistic;