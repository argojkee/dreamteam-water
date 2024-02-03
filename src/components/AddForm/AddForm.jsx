import React, { useState } from 'react';
import { AddFormStyles } from './AddForm.styled';
import { getCurrentDay } from '../../redux/water/waterSelectors';
import { useSelector } from 'react-redux';
import {
  addWaterThunk,
  editDrinkThunk,
} from '../../redux/water/waterFunctions';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

export const AddForm = ({
  closeAddForm,
  previousWaterData,
  // onSave,
  drink,
}) => {
  const [waterAmount, setWaterAmount] = useState(0);
  const [recordTime, setRecordTime] = useState(getDefaultTime());
  const dispatch = useDispatch();
  const { _id: dayId } = useSelector(getCurrentDay);

  function getDefaultTime() {
    const now = new Date();
    const roundedMinutes = Math.ceil(now.getMinutes() / 5) * 5;
    const defaultTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      roundedMinutes
    );
    return defaultTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
  }

  const handleSave = async () => {
    if (drink) {
      dispatch(
        editDrinkThunk({ id: drink.id, time: recordTime, ml: waterAmount })
      );
    } else {
      await dispatch(
        addWaterThunk({ dayId, drink: { ml: waterAmount, time: recordTime } })
      );
    }

    closeAddForm();
  };

  const showContentData = drink ? (
    <>
      <h1>Edit the entered amount of water</h1>
      <div>🥤</div>
      <p>{`${drink.ml} ml ${drink.time}`}</p>
      <h2>Correct entered data:</h2>
      <p>Amount of water:</p>
    </>
  ) : (
    <>
      <h1>Add water</h1>
      <h3>Choose a value:</h3>
      <p>Amount of water:</p>
    </>
  );

  return (
    <AddFormStyles>
      {showContentData}
      <div className="edit-water-form">
        <div className="step-input">
          <button onClick={() => setWaterAmount(prev => prev - 50)}>-</button>
          <span>{waterAmount} ml</span>
          <button onClick={() => setWaterAmount(prev => prev + 50)}>+</button>
        </div>
        <label>Recording time:</label>
        <select
          value={recordTime}
          onChange={e => setRecordTime(e.target.value)}
        >
          {generateTimeOptions()}
        </select>
        <h2>Enter the value of the water used:</h2>
        <input
          type="number"
          value={waterAmount}
          onChange={e => setWaterAmount(parseInt(e.target.value, 10) || 0)}
        />
        <p>Entered amount: {waterAmount} ml</p>
      </div>
      <button onClick={handleSave}>Save</button>
    </AddFormStyles>
  );
};

function generateTimeOptions() {
  const options = [];
  const now = new Date();
  const roundedMinutes = Math.ceil(now.getMinutes() / 5) * 5;
  const currentFormattedHour = now.getHours().toString().padStart(2, '0');
  const currentFormattedMinute = roundedMinutes.toString().padStart(2, '0');

  options.push(
    <option
      //!Било ошибки, что у элементов одинаковый ключ. Подключил наноАйи
      // key={`${currentFormattedHour}:${currentFormattedMinute}`}
      key={nanoid()}
      value={`${currentFormattedHour}:${currentFormattedMinute}`}
    >
      {`${currentFormattedHour}:${currentFormattedMinute}`}
    </option>
  );

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      options.push(
        <option
          // key={`${formattedHour}:${formattedMinute}`}
          key={nanoid()}
          value={`${formattedHour}:${formattedMinute}`}
        >
          {`${formattedHour}:${formattedMinute}`}
        </option>
      );
    }
  }

  return options;
}
