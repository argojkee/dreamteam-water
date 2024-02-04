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
import { Modal } from 'components/Modal/Modal';
import { AddForm } from 'components/AddForm/AddForm';
import { useState } from 'react';
import LogoutDeleteModalContent from 'components/LogoutDeleteModal/LogoutDeleteModalContent';

export const DrinkElement = ({ id, ml, time }) => {
  const [isShowEditForm, setIsShowEditForm] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  return (
    <DrinkLi id={id}>
      <DrinkInfoDiv>
        <img src={DrinkIcon} alt="Glass of water" />
        <VolumeDiv>{ml} ml</VolumeDiv>
        <div>{time}</div>
      </DrinkInfoDiv>
      <BtnWrapDiv>
        <SmallRoundBtn onClick={() => setIsShowEditForm(true)}>
          <EditBtnIcon title="Edit" />
        </SmallRoundBtn>
        <SmallRoundBtn onClick={() => setIsShowDeleteModal(true)}>
          <DelBtnIcon title="Delete" />
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
      {isShowDeleteModal && (
        <Modal
          closeModal={() => setIsShowDeleteModal(false)}
          children={
            <LogoutDeleteModalContent
              closeModal={() => setIsShowDeleteModal(false)}
              id={id}
            />
          }
        />
      )}
    </DrinkLi>
  );
};
