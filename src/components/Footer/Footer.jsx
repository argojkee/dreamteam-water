import Container from 'components/Container/Container';
import axios from 'axios';
import { getCurrentDateInfo } from 'API/Water/getCurrentDateInfo';
import { addDrink } from 'API/Water/addDrink';
import { useState } from 'react';
import editDailyNorm from 'API/Auth/editDailyNorm';
import { useDispatch } from 'react-redux';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

const Footer = () => {
  const [dailyId, setDailyId] = useState(null);
  const dispatch = useDispatch();

  const onCurrentDateInfoClick = async () => {
    const todayInfo = await getCurrentDateInfo({
      year: 2023,
      month: 'January',
      day: 28,
    });
    console.log(todayInfo);
    setDailyId(todayInfo._id);
  };

  const onAddDrink = async () => {
    const result = await addDrink({
      date: { year: 2023, month: 'January', day: 28 },
      drink: { ml: 250, time: '10:30' },
    });
  };

  const onEditClick = async () => {
    await dispatch(
      editDailyNorm({
        date: { year: 2023, month: 'January', day: 28 },
        norm: 2501,
      })
    );
  };

  return (
    <Container>
      <button onClick={onCurrentDateInfoClick}>Get current date info</button>
      <button onClick={onAddDrink}>Add drink</button>
      <button>Edit drink</button>
      <button>Delete drink</button>
      <button>Get month info</button>
      <button onClick={onEditClick}>Edit norm</button>
      <button>Get any day info</button>
    </Container>
  );
};

export default Footer;
