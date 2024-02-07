import { getMonthsArr } from '../helpers/getMonthsArr';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { MonthSwitcherContainer } from './MonthSwitcher.styled';
import { useSelector } from 'react-redux';
import { getStartDay } from '../../../redux/auth/authSelectors';
import { funcGetDate, today } from '../helpers/getDate';
import { getIsDarkTheme } from '../../../redux/theme/themeSelectors';

const MonthSwitcher = ({ selectedMonth, setSelectedMonth }) => {
  const startDay = useSelector(getStartDay);
  const registrationDate = funcGetDate(startDay);
  const isDark = useSelector(getIsDarkTheme);

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
    return registrationDate.month === selectedMonth.month &&
      registrationDate.year === selectedMonth.year
      ? true
      : false;
  };

  const isButtonNextDisabled = () => {
    return (
      selectedMonth.year >= today.year + 5 &&
      selectedMonth.month === today.month
    );
  };

  return (
    <MonthSwitcherContainer $isDark={isDark}>
      <h2 className="title">Month</h2>
      <div>
        <button onClick={handlePrevMonth} disabled={isButtonPrevDisabled()}>
          <SlArrowLeft fill={isDark ? 'orange' : '#407bff'} />
        </button>
        <p>
          {getMonthsArr(selectedMonth.year)[selectedMonth.month].name},{' '}
          {selectedMonth.year}
        </p>
        <button onClick={handleNextMonth} disabled={isButtonNextDisabled()}>
          <SlArrowRight fill={isDark ? 'orange' : '#407bff'} />
        </button>
      </div>
    </MonthSwitcherContainer>
  );
};

export default MonthSwitcher;
