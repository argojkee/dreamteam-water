import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { useInitialDate } from './useInitialDate';
import { monthsArr } from './monthsArr';
import { setSelectedMonth } from '../../../redux/calendar/calendarSlice';

const MonthSwitcher = () => {
    
  const [today, setToday] = useInitialDate();
  const [pickedDate, setPickedDate] = useState(today);
  const [registrationDate, setregistrationDate] = useState({ day: 1, month: 9, year: 2023 });
  
    const dispatch = useDispatch();
    
  useEffect(() => {
     const newCurrentMonth = {day: null, month: pickedDate.month, year: pickedDate.year };
     dispatch(setSelectedMonth(newCurrentMonth));
  }, [pickedDate]);
  
    const handlePrevMonth = () => {
        pickedDate.month === 0 ?
            setPickedDate((prev) => ({ ...prev, month: 11, year: prev.year - 1 })) :
            setPickedDate((prev) => ({ ...prev, month: prev.month - 1 }))
  };

    const handleNextMonth = () => {
        pickedDate.month === 11 ?
            setPickedDate((prev) => ({ ...prev, month: 0, year: prev.year + 1 })) :
            setPickedDate((prev) => ({ ...prev, month: prev.month + 1 }))
    };
  

  const isButtonNextDisabled = () => {
  return pickedDate.year >= today.year + 5 && pickedDate.month === today.month;
  };
  
    const isButtonPrevDisabled = () => {
      
       return (registrationDate.day <= 2 && registrationDate.month === 0 && pickedDate.month === 11 && registrationDate.year === pickedDate.year + 1) ||
            (registrationDate.day <= 2 && registrationDate.month - 1 === pickedDate.month && registrationDate.year === pickedDate.year) ||
            (registrationDate.day > 2 && registrationDate.month === pickedDate.month && registrationDate.year === pickedDate.year)? true: false
    }

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={handlePrevMonth} disabled={isButtonPrevDisabled()}>Previous</button>
      <h2>{monthsArr[pickedDate.month]} {pickedDate.year}</h2>
      <button onClick={handleNextMonth} disabled={isButtonNextDisabled()}>Next</button>
    </div>
  );
};

export default MonthSwitcher;