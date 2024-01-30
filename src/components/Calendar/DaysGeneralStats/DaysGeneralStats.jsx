import { useEffect } from "react";
import { WaterStatsContainer } from "./DaysGeneralStats.styled";
import { TfiClose } from "react-icons/tfi";
import { monthsArr } from "../monthsArr";

const DaysGeneralStats = ({ setModalVisible, top, left, selectedMonth, setSelectedMonth, selectedDay}) => {

useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest('.modal-container')) {
        setModalVisible(false);
        
      }
    }
    function onEsc({ code }) {
      if (code !== 'Escape') {
        return;
      }
      setModalVisible(false);
      
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', onEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
}, [setModalVisible]);
  
  const closeModal = () => {
    setModalVisible(false);
    
  }
  
  return (
      <WaterStatsContainer className="modal-container" $top={top} $left={left}>
          <div>
        <p>{selectedMonth.day}, {monthsArr[selectedMonth.month].name }</p>
              <button onClick={closeModal}><TfiClose/></button>
          </div>
          <p>Daily norma: <span>2L</span></p>
          <p>Fulfillment of the daily norm: <span>_%</span></p>
          <p>How many servings of water: <span>6</span></p>
    </WaterStatsContainer>
  );
};

export default DaysGeneralStats;
