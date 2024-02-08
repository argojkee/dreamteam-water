import { FaPlus } from 'react-icons/fa6';
import { GoTrash } from 'react-icons/go';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import styled from 'styled-components';

export const DrinkLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;

  color: black;
  list-style: none;
  font-family: Roboto;
  font-weight: 400;
  border-bottom: solid 1px #d7e3ff;
  transition: var(--transition-all-250ms);
`;
export const DrinkIconImg = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;
export const DrinkInfoDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  font-size: 12px;

  .time-text {
    color: ${props => (props.$isDark ? 'white' : 'var(--primary-txt-color)')};
  }
`;
export const VolumeDiv = styled.div`
  color: var(--blue-color);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  min-width: 60px;
  /* margin-right: 12px; */

  @media screen and (min-width: 768px) {
    margin-right: 16px;
  }
`;
export const TimeDiv = styled.div`
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const EmptyTxt = styled.div`
  color: #9ebbff;
  font-weight: 400;
`;
export const H2 = styled.h2`
  color: ${props => (props.$isDark ? 'orange' : '#2f2f2f')};
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
`;
export const ListUl = styled.ul`
  margin-top: 16px;
  color: #2f2f2f;
  font-family: Roboto;

  height: 183px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 5px;
    background-color: #d7e3ff;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 5px;
    background-color: #9ebbff;
  }
`;
export const BtnWrapDiv = styled.div`
  display: flex;
  gap: 18px;
  justify-content: space-between;
  margin-right: 4px;
  @media screen and (min-width: 768px) {
    margin-right: 6px;
  }
`;
export const SmallRoundBtn = styled.button`
  width: 18px;
  height: 18px;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: var(--transition-all-250ms);
  cursor: pointer;
  border-bottom: 1px solid transparent;

  &[title='Delete']:hover {
    border-bottom: 1px solid var(--red-color);
  }
  &[title='Edit']:hover {
    border-bottom: 1px solid var(--light-blue-color);
  }

  @media screen and (min-width: 768px) {
    margin: 0 9px;
  }
`;
export const EditBtnIcon = styled(HiOutlinePencilSquare)`
  color: #9ebbff;
  width: 16px;
  height: 16px;
`;
export const DelBtnIcon = styled(GoTrash)`
  color: #ef5050;
  width: 16px;
  height: 16px;
`;
export const ActionsWrapper = styled.div``;
export const AddTodayWaterBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.$isDark ? 'orange' : 'var(--blue-color)')};
  font-family: Roboto;
  font-weight: 500;

  letter-spacing: 0em;
  text-align: left;
  display: flex;
  gap: 12px;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 10px;

  border-radius: 5px;
  cursor: pointer;
  transition: var(--transition-all-250ms);

  &:hover,
  :focus {
    color: var(--orange-color);
    /* box-shadow: 0px 5px 7px rgba(64, 123, 255, 0.14); */
  }
  /* &:active {
        background-color: #D7E3FF1A;
        box-shadow: 0px 1px 7px rgba(64, 123, 255, 0.14);

    } */

  font-size: 16px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const PlusIcon = styled(FaPlus)`
  width: 17px;
  height: 17px;
`;
