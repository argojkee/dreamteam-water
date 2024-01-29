import { useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';
import MonthStatistic from './MonthStatistic/MonthStatistic';



const MonthStatsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState({
    day: null,
    month: null,
    year: null,
  });

  return (
    <>
      <MonthSwitcher changeSelectedMonth={setSelectedMonth} />
      <MonthStatistic  selectedMonth={selectedMonth } />
    </>
  );
};

export default MonthStatsTable;
