import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PiSpinnerGap } from 'react-icons/pi';
import { SpinnerContainer } from './SpinnerContainer.styled';
import { DrinkElement } from './DrinkElement';
import {
  AddTodayWaterBtn,
  EmptyTxt,
  H2,
  ListUl,
  PlusIcon,
} from './TodayWaterList.styled';
import { Modal } from 'components/Modal/Modal';
import { AddForm } from 'components/AddForm/AddForm';
import {
  getDrinks,
  getIsDayDataLoading,
} from '../../redux/water/waterSelectors';
import { getIsDarkTheme } from '../../redux/theme/themeSelectors';

export function TodayWaterList() {
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const drinks = useSelector(getDrinks);
  const isLoading = useSelector(getIsDayDataLoading);
  const isDark = useSelector(getIsDarkTheme);

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
      <H2 $isDark={isDark}>Today</H2>

      {isLoading && (
        <SpinnerContainer>
          <PiSpinnerGap
            className="spinner"
            fill={isDark ? 'orange' : 'black'}
            size={25}
          />
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

      <AddTodayWaterBtn
        $isDark={isDark}
        onClick={() => setIsShowAddModal(true)}
      >
        <PlusIcon />
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
