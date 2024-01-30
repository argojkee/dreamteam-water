import { useState } from 'react';
import MonthSwitcher from './MonthSwitcher/MonthSwitcher';
import MonthStatistic from './MonthStatistic/MonthStatistic';
import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';



const MonthStatsTable = () => {
  const [selectedMonth, setSelectedMonth] = useState({
    day: null,
    month: null,
    year: null,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  return (
    <div >
      <MonthSwitcher changeSelectedMonth={setSelectedMonth} />
      <MonthStatistic selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth } setModalVisible={setModalVisible} setModalPosition={setModalPosition} modalVisible={modalVisible} />
      {modalVisible && (<DaysGeneralStats top={modalPosition.top} left={modalPosition.left} setModalVisible={setModalVisible} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />)}
    </div>
  );
};

export default MonthStatsTable;

// style={{ position: 'relative' }}