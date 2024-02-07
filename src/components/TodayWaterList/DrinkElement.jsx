import {
  BtnWrapDiv,
  DelBtnIcon,
  DrinkIconImg,
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
import { useSelector } from 'react-redux';
import { getIsDarkTheme } from '../../redux/theme/themeSelectors';

export const DrinkElement = ({ id, ml, time }) => {
  const [isShowEditForm, setIsShowEditForm] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const isDark = useSelector(getIsDarkTheme);
  return (
    <DrinkLi id={id}>
      <DrinkInfoDiv $isDark={isDark}>
        <DrinkIconImg src={DrinkIcon} alt="Glass of water" />
        <VolumeDiv $isDark={isDark}>{ml} ml</VolumeDiv>
        <div className="time-text">{time}</div>
      </DrinkInfoDiv>

      <BtnWrapDiv>
        <SmallRoundBtn title="Edit" onClick={() => setIsShowEditForm(true)}>
          <EditBtnIcon />
        </SmallRoundBtn>
        <SmallRoundBtn
          title="Delete"
          onClick={() => setIsShowDeleteModal(true)}
        >
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
