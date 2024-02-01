import { useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';
import MonthStatistic from './MonthStatistic/MonthStatistic';
import { useInitialDate } from './MonthSwitcher/useInitialDate';

const MonthStatsTable = () => {
  const today = useInitialDate();
  const [selectedMonth, setSelectedMonth] = useState({ ...today });

  return (
    <div>
      <MonthSwitcher today={today} />
      <MonthStatistic selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} today={today} /> 
    </div>
  );
};

export default MonthStatsTable;