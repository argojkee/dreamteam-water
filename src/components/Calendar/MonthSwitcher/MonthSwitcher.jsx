import { useEffect, useState } from 'react';
import { useInitialDate } from './useInitialDate';
import { monthsArr } from '../monthsArr';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { MonthSwitcherContainer } from './MonthSwitcher.styled';

const MonthSwitcher = ({ setSelectedMonth }) => {
  const [today] = useInitialDate();
  const [pickedDate, setPickedDate] = useState(today);
  const [registrationDate] = useState({ day: 1, month: 9, year: 2023 });

  useEffect(() => {
    const newCurrentMonth = {
      day: null,
      month: pickedDate.month,
      year: pickedDate.year,
    };
    setSelectedMonth(newCurrentMonth);
  }, [pickedDate, setSelectedMonth]);

  const handlePrevMonth = () => {
    pickedDate.month === 0
      ? setPickedDate(prev => ({ ...prev, month: 11, year: prev.year - 1 }))
      : setPickedDate(prev => ({ ...prev, month: prev.month - 1 }));
  };

  const handleNextMonth = () => {
    pickedDate.month === 11
      ? setPickedDate(prev => ({ ...prev, month: 0, year: prev.year + 1 }))
      : setPickedDate(prev => ({ ...prev, month: prev.month + 1 }));
  };

  const isButtonPrevDisabled = () => {
    return (registrationDate.day <= 2 &&
      registrationDate.month === 0 &&
      pickedDate.month === 11 &&
      registrationDate.year === pickedDate.year + 1) ||
      (registrationDate.day <= 2 &&
        registrationDate.month - 1 === pickedDate.month &&
        registrationDate.year === pickedDate.year) ||
      (registrationDate.day > 2 &&
        registrationDate.month === pickedDate.month &&
        registrationDate.year === pickedDate.year)
      ? true
      : false;
  };

  const isButtonNextDisabled = () => {
    return (
      pickedDate.year >= today.year + 5 && pickedDate.month === today.month
    );
  };

  return (
    <MonthSwitcherContainer>
      <h2>Month</h2>
      <div>
        <button onClick={handlePrevMonth} disabled={isButtonPrevDisabled()}>
        <SlArrowLeft />
      </button>
      <h3>
        {monthsArr[pickedDate.month].name}, {pickedDate.year}
      </h3>
      <button onClick={handleNextMonth} disabled={isButtonNextDisabled()}>
        <SlArrowRight />
        </button>
        </div>
    </MonthSwitcherContainer>
  );
};

export default MonthSwitcher;
