import React, { useState, useEffect } from 'react';
import { AddFormStyles } from './AddForm.styled';
import { getCurrentDay } from '../../redux/water/waterSelectors';
import { useSelector } from 'react-redux';
import {
  addWaterThunk,
  editDrinkThunk,
} from '../../redux/water/waterFunctions';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toastError } from 'services/toastNotification';

export const AddForm = ({ closeAddForm, previousWaterData, drink }) => {
  const [waterAmount, setWaterAmount] = useState(0);
  const [recordTime, setRecordTime] = useState(getDefaultTime());
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const { _id: dayId } = useSelector(getCurrentDay);
  useEffect(() => {
    setRecordTime(getDefaultTime());
  }, []);

  useEffect(() => {
    setInputValue(waterAmount.toString());
  }, [waterAmount]);

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
    if (drink && waterAmount === drink.ml) {
      toastError(
        'Invalid water amount. Please enter a different value than the previous one.'
      );
    } else if (waterAmount > 0) {
      if (drink) {
        dispatch(
          editDrinkThunk({ id: drink.id, time: recordTime, ml: waterAmount })
        );
      } else {
        await dispatch(
          addWaterThunk({
            dayId,
            drink: { ml: waterAmount, time: recordTime },
          })
        );
      }

      closeAddForm();
    }
  };

  const handleInputChange = e => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setWaterAmount(newValue >= 0 ? parseInt(newValue, 10) : 0);
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
          <button
            onClick={() => setWaterAmount(prev => Math.max(prev - 50, 0))}
          >
            -
          </button>
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
          value={inputValue}
          onChange={handleInputChange}
          onBlur={() => {
            if (drink && waterAmount === drink.ml) {
              setWaterAmount(0);
              toastError(
                'Invalid water amount. Please enter a different value than the previous one.'
              );
            }
          }}
        />

        <p>Entered amount: {waterAmount} ml</p>
      </div>
      <button onClick={handleSave}>
        {isLoading ? <PiSpinnerGap className="spinner" size={16} /> : 'Save'}
      </button>
    </AddFormStyles>
  );
};

function generateTimeOptions() {
  const options = [];
  const now = new Date();
  const roundedMinutes = Math.ceil(now.getMinutes() / 5) * 5;
  const currentFormattedHour = now.getHours().toString().padStart(2, '0');
  const currentFormattedMinute = roundedMinutes.toString().padStart(2, '0');

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 5) {
      const formattedHour = hour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      if (
        (hour < now.getHours() ||
          (hour === now.getHours() && minute <= now.getMinutes())) &&
        !options.some(
          option => option.props.value === `${formattedHour}:${formattedMinute}`
        )
      ) {
        options.push(
          <option key={nanoid()} value={`${formattedHour}:${formattedMinute}`}>
            {`${formattedHour}:${formattedMinute}`}
          </option>
        );
      }
    }
  }

  return options;
}
