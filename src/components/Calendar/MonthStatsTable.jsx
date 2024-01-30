import { useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';
import MonthStatistic from './MonthStatistic/MonthStatistic';

const MonthStatsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState({
    day:null,
    month: null,
    year: null,
  });

  return (
    <div >
      <MonthSwitcher setSelectedMonth={setSelectedMonth} />
      <MonthStatistic selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} /> 
    </div>
  );
};

export default MonthStatsTable;