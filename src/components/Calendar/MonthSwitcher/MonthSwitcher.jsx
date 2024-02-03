// import {  useEffect, useState } from 'react';
import { getMonthsArr } from '../helpers/getMonthsArr';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { MonthSwitcherContainer } from './MonthSwitcher.styled';
import { useSelector } from 'react-redux';
import { getStartDay } from '../../../redux/auth/authSelectors';
import { funcGetDate, today } from '../helpers/getDate';

const MonthSwitcher = ({ selectedMonth, setSelectedMonth }) => {
  const startDay = useSelector(getStartDay);
  const registrationDate = funcGetDate(startDay);

  const handlePrevMonth = () => {
    selectedMonth.month === 0
      ? setSelectedMonth(prev => ({ ...prev, month: 11, year: prev.year - 1 }))
      : setSelectedMonth(prev => ({ ...prev, month: prev.month - 1 }));
  };

  const handleNextMonth = () => {
    selectedMonth.month === 11
      ? setSelectedMonth(prev => ({ ...prev, month: 0, year: prev.year + 1 }))
      : setSelectedMonth(prev => ({ ...prev, month: prev.month + 1 }));
  };

  const isButtonPrevDisabled = () => {
    return (registrationDate.day <= 2 &&
      registrationDate.month === 0 &&
      selectedMonth.month === 11 &&
      registrationDate.year === selectedMonth.year + 1) ||
      (registrationDate.day <= 2 &&
        registrationDate.month - 1 === selectedMonth.month &&
        registrationDate.year === selectedMonth.year) ||
      (registrationDate.day > 2 &&
        registrationDate.month === selectedMonth.month &&
        registrationDate.year === selectedMonth.year)
      ? true
      : false;
  };

  const isButtonNextDisabled = () => {
    return (
      selectedMonth.year >= today.year + 5 && selectedMonth.month === today.month
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
        {getMonthsArr(selectedMonth.year)[selectedMonth.month].name}, {selectedMonth.year}
      </h3>
      <button onClick={handleNextMonth} disabled={isButtonNextDisabled()}>
        <SlArrowRight />
        </button>
        </div>
    </MonthSwitcherContainer>
  );
};

export default MonthSwitcher;