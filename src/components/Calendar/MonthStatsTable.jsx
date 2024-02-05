import { useEffect, useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';
import MonthStatistic from './MonthStatistic/MonthStatistic';
import { compareDates, today } from './helpers/getDate';
import { useSelector } from 'react-redux';
import {
  getCurrentDay,
  getCurrentMonth,
  getIsMonthDataLoading,
} from '../../redux/water/waterSelectors';
import { getMonthInfoAPI } from 'API/Water/getMonthInfoAPI';
import { updateOrAddCurrentDay } from './helpers/updateOrAddCurrentDay';
import { PiSpinnerGap } from 'react-icons/pi';
import { SpinnerContainer } from './SpinnerContainer.styled';
import { RelativDiv } from './MonthStatsTablet.styled';

const MonthStatsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState({ ...today });
  const [monthStatistic, setMonthStatistic] = useState([]);
  const currentMonthStatistic = useSelector(getCurrentMonth);
  const currentDayStatistic = useSelector(getCurrentDay);
  const isMonthLoading = useSelector(getIsMonthDataLoading);

  useEffect(() => {
    const picData = [selectedMonth.month, selectedMonth.year];
    const todayData = [today.month, today.year];
    const compare = compareDates(picData, todayData);

    if (compare === 0) {
      if (currentMonthStatistic && currentDayStatistic) {
        const updatedData = updateOrAddCurrentDay(
          currentMonthStatistic,
          currentDayStatistic
        );
        setMonthStatistic([...updatedData]);
      }
    }

    if (compare === 1) {
      setMonthStatistic([]);
    }

    if (compare === -1) {
      const fetchData = async () => {
        try {
          const newMonthStatistic = await getMonthInfoAPI({
            month: selectedMonth.month + 1,
            year: selectedMonth.year,
          });

          setMonthStatistic([...newMonthStatistic]);
        } catch (error) {
          setMonthStatistic([]);
        }
      };
      fetchData();
    }
  }, [
    selectedMonth,
    currentMonthStatistic,
    currentDayStatistic,
    setMonthStatistic,
  ]);

  return (
    <div>
      <MonthSwitcher
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      /> <RelativDiv>
      {isMonthLoading ? (
        <SpinnerContainer>
          <PiSpinnerGap className="spinner" size={40} />
        </SpinnerContainer>
      ) : (
        <MonthStatistic
          selectedMonth={selectedMonth}
          monthStatistic={monthStatistic}
          setSelectedMonth={setSelectedMonth}
        />
      )} </RelativDiv>
    </div>
  );
};

export default MonthStatsTable;
