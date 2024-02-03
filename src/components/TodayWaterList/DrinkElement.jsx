import {
  BtnWrapDiv,
  DelBtnIcon,
  DrinkInfoDiv,
  DrinkLi,
  EditBtnIcon,
  SmallRoundBtn,
  VolumeDiv,
} from './TodayWaterList.styled';
import DrinkIcon from '../../icons/drink.svg';
import { deleteDrinkThunk } from '../../redux/water/waterFunctions';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal/Modal';
import { AddForm } from 'components/AddForm/AddForm';
import { useState } from 'react';

export const DrinkElement = ({ id, ml, time }) => {
  const dispatch = useDispatch();
  const [isShowEditForm, setIsShowEditForm] = useState(false);

  const onDeleteClick = async () => {
    dispatch(deleteDrinkThunk(id));
  };

  return (
    <DrinkLi id={id}>
      <DrinkInfoDiv>
        <img src={DrinkIcon} alt="Glass of water" />
        <VolumeDiv>{ml} ml</VolumeDiv>
        <div>{time}</div>
      </DrinkInfoDiv>
      <BtnWrapDiv>
        <SmallRoundBtn onClick={() => setIsShowEditForm(true)} title="Edit">
          <EditBtnIcon/>
        </SmallRoundBtn>
        <SmallRoundBtn onClick={onDeleteClick} title="Delete">
          <DelBtnIcon />
        </SmallRoundBtn>
      </BtnWrapDiv>
      {isShowEditForm && (
        <Modal
          closeModal={() => setIsShowEditForm(false)}
          children={
            <AddForm
              drink={{ id, ml, time }}
              closeAddForm={() => setIsShowEditForm(false)}
            />
          }
        />
      )}
    </DrinkLi>
  );
};
