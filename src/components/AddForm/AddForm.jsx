import React, { useState, useEffect } from 'react';
import { AddFormStyles } from './AddForm.styled';
import { getToken } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const AddForm = ({
  closeAddForm,
  previousWaterData,
  onSave,
  drinkId,
}) => {
  const [waterAmount, setWaterAmount] = useState(0);
  const [recordTime, setRecordTime] = useState(getDefaultTime());
  const [lastWaterInfo, setLastWaterInfo] = useState(null);
  const token = useSelector(getToken);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://dreamteam-water-server.onrender.com/api/water',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ date: new Date() }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setLastWaterInfo(data.dayInfo);
    } catch (error) {
      console.error('Error fetching water data:', error);
    }
  };
  useEffect(() => {
    fetchData();
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

  const handleSave = () => {
    onSave({
      amount: waterAmount,
      time: recordTime,
    });
    closeAddForm();
  };

  const showLastWaterInfo = lastWaterInfo &&
    lastWaterInfo.drinks.length > 0 && (
      <>
        <h2>🥤</h2>
        <p>{`${lastWaterInfo.drinks[0].ml} ml ${lastWaterInfo.drinks[0].time}`}</p>
      </>
    );

  const showEditData = drinkId ? (
    <>
      <h1>Edit the entered amount of water</h1>
      <p>{`${previousWaterData.amount} ml ${previousWaterData.time}`}</p>
      <h2>Correct entered data:</h2>
    </>
  ) : (
    <>
      <h1>Add water</h1>
      <h3>Choose a value:</h3>
    </>
  );

  return (
    <AddFormStyles>
      {showEditData}
      {showLastWaterInfo}
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
      key={`${currentFormattedHour}:${currentFormattedMinute}`}
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
          key={`${formattedHour}:${formattedMinute}`}
          value={`${formattedHour}:${formattedMinute}`}
        >
          {`${formattedHour}:${formattedMinute}`}
        </option>
      );
    }
  }

  return options;
}
