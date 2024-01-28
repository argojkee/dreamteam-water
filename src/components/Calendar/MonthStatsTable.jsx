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
    <div style={{ marginTop: '50px', marginLeft: 'auto', width: '592px' }}>
      <MonthSwitcher changeSelectedMonth={setSelectedMonth} />
      <MonthStatistic  selectedMonth={selectedMonth } />
    </div>
  );
};

export default MonthStatsTable;
