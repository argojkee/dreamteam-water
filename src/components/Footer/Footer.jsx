import Container from 'components/Container/Container';
import axios from 'axios';
import { getCurrentDateInfo } from 'API/Water/getCurrentDateInfo';
import { addDrink } from 'API/Water/addDrink';
import { useState } from 'react';
import { editDailyNorm } from 'API/Auth/editDailyNorm';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import { AddForm } from 'components/AddForm/AddForm';
import { deleteDrink } from 'API/Water/deleteDrink';
import { getMonthInfo } from 'API/Water/getMonthInfo';
import { editDrink } from 'API/Water/editDrink';
axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

const Footer = () => {
  const dispatch = useDispatch();
  const [isAddShow, setIsAddShow] = useState(false);
  const [isEditShow, setIsEditShow] = useState(false);

  const onCurrentDateInfoClick = async () => {
    try {
      const date = { year: 2024, month: 'January', day: 1 };
      const dayInfo = await getCurrentDateInfo({
        date,
      });
      console.log(dayInfo);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onAddDrink = async () => {
    try {
      const drink = await addDrink({
        date: { year: 2024, month: 'January', day: 1 },
        drink: { ml: 250, time: '10:30' },
      });
      console.log(drink);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onDeleteDrink = async () => {
    try {
      const result = await deleteDrink('65b804d29be4e2161a1e5a15');
      console.log(result);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onGetMonthInfo = async () => {
    const result = await getMonthInfo({
      date: { year: 2024, month: 'January' },
    });
    console.log(result);
  };

  const onEditDrink = async () => {
    const result = await editDrink('65b804c19be4e2161a1e5a0f', {
      drink: { ml: 500, time: '7:30' },
    });
    console.log(result);
  };

  const onEditNormaClick = async () => {
    await dispatch(
      editDailyNorm({
        date: { year: 2024, month: '01', day: 1 },
        norm: 2501,
      })
    );
  };

  return (
    <Container>
      <button
        style={{ backgroundColor: 'rgba(0,128,0,0.5)' }}
        onClick={onCurrentDateInfoClick}
      >
        Get current date info
      </button>
      <button
        style={{ backgroundColor: 'rgba(0,128,0,0.5)' }}
        onClick={onAddDrink}
      >
        Add drink
      </button>
      <button onClick={onEditDrink}>Edit drink</button>
      <button onClick={onDeleteDrink}>Delete drink</button>
      <button
        style={{ backgroundColor: 'rgba(0,128,0,0.5)' }}
        onClick={onGetMonthInfo}
      >
        Get month info
      </button>
      <button onClick={onEditNormaClick}>Edit norm</button>
      {/* <button>Get any day info</button> */}

      <button
        style={{ backgroundColor: 'rgba(0,128,0,0.5)' }}
        onClick={() => setIsAddShow(true)}
      >
        Open Add form
      </button>
      <button
        style={{ backgroundColor: 'rgba(0,128,0,0.5)' }}
        onClick={() => setIsEditShow(true)}
      >
        Open Edit form
      </button>
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
