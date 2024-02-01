import { useEffect, useState } from 'react';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { getMonthsArr } from '../getMonthsArr';
import { MonthStatisticlist } from './MonthStatistic.styled';


const MonthStatistic = ({ selectedMonth, setSelectedMonth, today }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [statistic, setStatistic] = useState([]);

  useEffect(() => {
    const updatedStatistic = selectedMonth.month === today.month && selectedMonth.year === today.year
      ? currentMonth(selectedMonth.year, selectedMonth.month, statistic1)
      : currentMonth(selectedMonth.year, selectedMonth.month, statistic2);
      
    setStatistic(updatedStatistic);
  }, [selectedMonth]);


  const currentMonth = (year, month, statistic) => {
    const daysArr = [];
    const monthData = getMonthsArr(year)[month];
    if (!monthData) {
      return daysArr;
    }
    for (let i = 1; i <= monthData.numberOfDays; i += 1) {
      const day = statistic.find(statisticOneDay => new Date(`${statisticOneDay.date}`).getDate() === i);
      
      if (day) {
        daysArr.push({ date: i, month, year, percent: day.percent });
      } else {
        if (i <= today.day && new Date(statistic[statistic.length - 1].date) < Date.now()) {
          daysArr.push({ date: i, month, year, percent: 0 });
        } else {
          daysArr.push({ date: i, month, year, percent: '' });
        }
      }
    }
    return daysArr;
  };
 
  // const currentMonth = (year, month, statistic) => {
  //   const daysArr = [];
  //   const monthData = monthsArr(year)[month];
  //   if (!monthData) {
  //     return daysArr;
  //   }
  //   for (let i = 1; i <= monthData.numberOfDays; i += 1) {
  //     const day = statistic.find(statisticOneDay => statisticOneDay.date === i);
  //     if (day) {
  //       daysArr.push({ date: i, percent: day.percent });
  //     } else {
  //       if (i <= today.day) {
  //         daysArr.push({ date: i, percent: 0 });
  //       } else {
  //         daysArr.push({ date: i, percent: '' });
  //       }
  //     }
  //   }
  //   return daysArr;
  // };



  const statistic1 =  [
    {
        "date": "2024-01-10T00:00:00.000Z",
        "percent": 63,
        "norm": 2000,
        "drinks": 5
    },
    {
        "date": "2024-01-11T00:00:00.000Z",
        "percent": 25,
        "norm": 2000,
        "drinks": 2
    }
  ]

   const statistic2 =  [
    {
        "date": "2024-01-1T00:00:00.000Z",
        "percent": 63,
        "norm": 2000,
        "drinks": 5
    },
    {
        "date": "2024-01-2T00:00:00.000Z",
        "percent": 25,
        "norm": 2000,
        "drinks": 2
    }
  ]


// console.log(new Date(statistic[0].date) < Date.now())

  
  // console.log(new Date('2024-01-11T00:00:00.000Z').getDate())

  const handleMouseEnter = (event) => {
    const day = Number(event.target.innerText);
    setSelectedMonth(prevState => ({ ...prevState, day }))

    const buttonRect = event.target.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + window.scrollY;

    setModalPosition({ top: buttonCenterY, left: buttonCenterX });
    setModalVisible(true);
  }

  //   const renderMonth = () => {
  //   if (selectedMonth.month === today.month && selectedMonth.year === today.year) {
  //   return currentMonth(selectedMonth.year, selectedMonth.month, statistic);
  // } else {
  //   return currentMonth(selectedMonth.year, selectedMonth.month, statistic2)
  // }
  // }

  return (
    <>
      <MonthStatisticlist>
        {statistic.map(({ date, percent }) => (
          <li key={date}>
            <button onMouseEnter={handleMouseEnter}
              data-fulfilled={percent > 100 ? 'true' : 'false'}
              disabled={percent === '' ? true : false}
            >
              {date}
            </button>
            <p>{percent !== '' && `${percent}%`}</p>
          </li>
        ))}
      </MonthStatisticlist>
      {modalVisible && (<DaysGeneralStats top={modalPosition.top} left={modalPosition.left} setModalVisible={setModalVisible} selectedMonth={selectedMonth}/>)}
    </>
  );
};

export default MonthStatistic;