import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaPlus } from 'react-icons/fa6';
import { PiSpinnerGap } from 'react-icons/pi';
import { SpinnerContainer } from './SpinnerContainer.styled';
import { DrinkElement } from './DrinkElement';
import {
  AddTodayWaterBtn,
  EmptyTxt,
  H2,
  ListUl,
} from './TodayWaterList.styled';
import { Modal } from 'components/Modal/Modal';
import { AddForm } from 'components/AddForm/AddForm';
import {
  getDrinks,
  getIsDayDataLoading,
} from '../../redux/water/waterSelectors';

export function TodayWaterList() {
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const drinks = useSelector(getDrinks);
  const isLoading = useSelector(getIsDayDataLoading);

  const sortDrinks = drinks => {
    const sortedDrinks = drinks.slice().sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      }
      if (a.time > b.time) {
        return 1;
      }
      return 0;
    });
    return sortedDrinks;
  };

  return (
    <>
      <H2>Today</H2>

      {isLoading && (
        <SpinnerContainer>
          <PiSpinnerGap className="spinner" size={25} />
        </SpinnerContainer>
      )}

      <ListUl>
        {drinks?.length ? (
          sortDrinks(drinks).map(({ _id, ml, time }) => (
            <DrinkElement
              key={_id}
              id={_id}
              ml={ml}
              time={time}
              color="#cfdaf5aa"
            />
          ))
        ) : (
          <EmptyTxt>It's time to drink some water!</EmptyTxt>
        )}
      </ListUl>

      <AddTodayWaterBtn onClick={() => setIsShowAddModal(true)}>
        <FaPlus />
        Add water
      </AddTodayWaterBtn>

      {isShowAddModal && (
        <Modal
          closeModal={() => setIsShowAddModal(false)}
          children={<AddForm closeAddForm={() => setIsShowAddModal(false)} />}
        />
      )}
    </>
  );
}
