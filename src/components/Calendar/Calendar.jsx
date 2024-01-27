import { useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState({
    day: null,
    month: null,
    year: null,
  });

  console.log(selectedMonth);

  return (
    <div style={{ marginTop: '50px', marginLeft: 'auto' }}>
      <MonthSwitcher changeSelectedMonth={setSelectedMonth} />
    </div>
  );
};

export default Calendar;
