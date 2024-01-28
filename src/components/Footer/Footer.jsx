import Container from 'components/Container/Container';
import axios from 'axios';
import { getCurrentDateInfo } from 'API/Water/getCurrentDateInfo';
import { addDrink } from 'API/Water/addDrink';
import { useState } from 'react';
import { editDailyNorm } from 'API/Auth/editDailyNorm';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import { AddForm } from 'components/AddForm/AddForm';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

const Footer = () => {
  const [dailyId, setDailyId] = useState(null);
  const dispatch = useDispatch();
  const [isAddShow, setIsAddShow] = useState(false);
  const [isEditShow, setIsEditShow] = useState(false);

  console.log(dailyId);

  const onCurrentDateInfoClick = async () => {
    try {
      const todayInfo = await getCurrentDateInfo({
        date: { year: 2024, month: '01', day: 28 },
      });
      console.log(todayInfo);
      setDailyId(todayInfo._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onAddDrink = async () => {
    await addDrink({
      date: { year: 2024, month: '01', day: 1 },
      drink: { ml: 250, time: '10:30' },
    });
  };

  const onEditNormaClick = async () => {
    await dispatch(
      editDailyNorm({
        date: { year: 2024, month: '01', day: 28 },
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
      <button onClick={onEditNormaClick}>Edit norm</button>
      <button>Get any day info</button>

      <button onClick={() => setIsAddShow(true)}>Open Add form</button>
      <button onClick={() => setIsEditShow(true)}>Open Edit form</button>
      {isAddShow && (
        <Modal
          closeModal={() => setIsAddShow(false)}
          children={<AddForm closeModal={() => setIsAddShow(false)} />}
        />
      )}

      {isEditShow && (
        <Modal
          closeModal={() => setIsEditShow(false)}
          children={
            <AddForm drinkId={1} closeModal={() => setIsEditShow(false)} />
          }
        />
      )}
    </Container>
  );
};

export default Footer;
