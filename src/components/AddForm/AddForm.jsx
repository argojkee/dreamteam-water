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
import { PiSpinnerGap } from 'react-icons/pi';
import {
  getIsEditingDrink,
  getIsAddingDrink,
} from '../../redux/water/waterSelectors';
import drinkIcon from '../../icons/drink.svg';
import { getIsDarkTheme } from '../../redux/theme/themeSelectors';

export const AddForm = ({ closeAddForm, previousWaterData, drink }) => {
  const [waterAmount, setWaterAmount] = useState(0);
  const [recordTime, setRecordTime] = useState(getDefaultTime());

  const dispatch = useDispatch();
  const { _id: dayId, drinks } = useSelector(getCurrentDay);
  const isAdding = useSelector(getIsAddingDrink);
  const isEditing = useSelector(getIsEditingDrink);
  const isDark = useSelector(getIsDarkTheme);
  const isLoading = isAdding || isEditing;

  useEffect(() => {
    setRecordTime(getDefaultTime());
  }, []);

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

  const handleSave = async e => {
    e.preventDefault();

    if (!waterAmount) return toastError('Water amount must be more than 0');

    if (waterAmount > 0) {
      if (
        drinks.some(
          drink => drink.time === recordTime && drink.ml === waterAmount
        )
      ) {
        return toastError('You already have this drink');
      }

      if (drink) {
        if (waterAmount === drink.ml && recordTime === drink.time) {
          return toastError(
            'Please enter a different value than the previous one.'
          );
        }

        await dispatch(
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
    } else {
      return toastError('Please, enter water amount or delete this drink');
    }
  };

  const handleInputChange = e => {
    const newValue = e.target.value;
    if (newValue === '') return setWaterAmount('');
    setWaterAmount(newValue >= 0 ? parseInt(newValue, 10) : 0);
  };

  const showContentData = drink ? (
    <>
      <h1 className="header">Edit the entered amount of water</h1>
      <div className="container-edit-drink">
        <img className="drink-icon" src={drinkIcon} alt="drink" />
        <p className="edit-string">
          <span className="edit-ml-value">{`${drink.ml} ml`}</span>{' '}
          <span className="edit-time-value">{drink.time}</span>
        </p>
      </div>
      <h2 className="edit-second-header">Correct entered data:</h2>
      <p className="string">Amount of water:</p>
    </>
  ) : (
    <>
      <h1 className="header">Add water</h1>
      <h2 className="add-second-header">Choose a value:</h2>
      <p className="string">Amount of water:</p>
    </>
  );

  return (
    <AddFormStyles $isDark={isDark}>
      {showContentData}
      <form onSubmit={handleSave} className="edit-water-form">
        <div className="step-input">
          <button
            type="button"
            onClick={() => setWaterAmount(prev => Math.max(prev - 50, 0))}
          >
            -
          </button>
          <div className="water-amount">{waterAmount || 0} ml</div>
          <button
            type="button"
            onClick={() => setWaterAmount(prev => prev + 50)}
          >
            +
          </button>
        </div>
        <div className="select-container">
          <label className="string">Recording time:</label>
          <select
            value={recordTime}
            onChange={e => setRecordTime(e.target.value)}
          >
            {generateTimeOptions()}
          </select>
        </div>
        <div className="input-container">
          <h2 className="add-second-header">
            Enter the value of the water used:
          </h2>
          <input
            type="number"
            value={waterAmount}
            onChange={handleInputChange}
          />
        </div>
        <p className="result">Entered amount: {waterAmount || 0} ml</p>

        <button type="submit">
          {isLoading ? <PiSpinnerGap className="spinner" size={16} /> : 'Save'}
        </button>
      </form>
    </AddFormStyles>
  );
};

function generateTimeOptions() {
  const options = [];
  const now = new Date();

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
        const newTime =
          Number(formattedHour) >= 12 && Number(formattedMinute) > 0
            ? `0${formattedHour - 12}:${formattedMinute} PM`
            : `${formattedHour}:${formattedMinute} AM`;
        options.push(
          <option key={nanoid()} value={newTime}>
            {`${formattedHour}:${formattedMinute}`}
          </option>
        );
      }
    }
  }
  return options;
}
