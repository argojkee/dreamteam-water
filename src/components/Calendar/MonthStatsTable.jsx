import { useEffect, useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';
import MonthStatistic from './MonthStatistic/MonthStatistic';
import { compareDates, funcGetDate, today } from './helpers/getDate';
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
import { getStartDay } from '../../redux/auth/authSelectors';

const MonthStatsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState({ ...today });
  const [monthStatistic, setMonthStatistic] = useState([]);
  const currentMonthStatistic = useSelector(getCurrentMonth);
  const currentDayStatistic = useSelector(getCurrentDay);
  const isMonthLoading = useSelector(getIsMonthDataLoading);
  const [isOtherMonthLoading, setIsOtherMonthLoading] = useState(false);
  const startDay = useSelector(getStartDay);
  const registrationDate = funcGetDate(startDay);

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
          setIsOtherMonthLoading(true);
          const newMonthStatistic = await getMonthInfoAPI({
            month: selectedMonth.month + 1,
            year: selectedMonth.year,
          });

          setMonthStatistic([...newMonthStatistic]);
        } catch (error) {
          setMonthStatistic([]);
        } finally {
          setIsOtherMonthLoading(false);
        }
      };
      fetchData();
    }
  }, [
    selectedMonth,
    currentMonthStatistic,
    currentDayStatistic,
    setMonthStatistic,
    setIsOtherMonthLoading,
  ]);

  return (
    <div>
      <MonthSwitcher
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        registrationDate={registrationDate}
      />{' '}
      <RelativDiv>
        {isMonthLoading || isOtherMonthLoading ? (
          <SpinnerContainer>
            <PiSpinnerGap className="spinner" size={40} />
          </SpinnerContainer>
        ) : (
          <MonthStatistic
            selectedMonth={selectedMonth}
            monthStatistic={monthStatistic}
              setSelectedMonth={setSelectedMonth}
              registrationDate={registrationDate}
          />
        )}{' '}
      </RelativDiv>
    </div>
  );
};

export default MonthStatsTable;
