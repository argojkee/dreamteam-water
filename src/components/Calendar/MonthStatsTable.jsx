import { useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';
import MonthStatistic from './MonthStatistic/MonthStatistic';
import { getDate } from './MonthSwitcher/getDate';

const MonthStatsTable = () => {
  const today = getDate(Date.now());
  const [selectedMonth, setSelectedMonth] = useState({ ...today });

  return (
    <div>
      <MonthSwitcher today={today} selectedMonth = {selectedMonth} setSelectedMonth={setSelectedMonth}/>
      <MonthStatistic selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} today={today} /> 
    </div>
  );
};

export default MonthStatsTable;