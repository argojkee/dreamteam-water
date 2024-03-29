import styled from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';

export const RatioBarH3 = styled.h3`
  color: ${props => (props.$isDark ? 'white' : 'var(--blue-color)')};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 8px;
  @media screen and (max-width: 1439px) {
    margin-bottom: 0;
  }
`;

export const PanelDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    gap: 23px;
  }

  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const SliderContainerDiv = styled.div`
  position: relative;

  @media screen and (max-width: 1439px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }
`;
export const BarContainerDiv = styled.div`
  position: relative;
  margin: 0 14px 0 19px;
  height: 14px;
`;
//
export const ProgressBarDiv = styled.input`
  position: relative;
  transform: translateY(-50%);

  width: 100%;
  background-color: #d7e3ff;
  height: 8px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-top: 20px;
`;

export const ProgressBarLower = styled.div`
  position: absolute;
  transform: translateY(-50%);

  top: 20px;
  height: 8px;
  width: ${({ $percentage }) => $percentage};
  border-radius: 10px;
  background-color: ${props => (props.$isDark ? 'orange' : '#9ebbff')};

  transition: all 1000ms var(--cubic);
`;

export const WaterProgressThumb = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(44%);
  left: ${({ $percentage }) => $percentage};

  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--white-color);
  border: solid 1px var(--blue-color);

  transition: all 1000ms var(--cubic);
`;

export const SliderValueDiv = styled.div`
  position: absolute;
  left: 0;
  left: ${({ $percentage }) => $percentage};

  text-align: center;
  font-family: var(--main-font);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: ${props => (props.$isDark ? 'orange' : 'var(--blue-color)')};

  margin-top: 13px;
  padding: 0 13px;

  transition: all 700ms var(--cubic);
`;

export const RulerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--blue-color);

  margin: 15px 0 0 5px;
`;
export const RulerElStripDiv = styled.div`
  color: #d7e3ff;
  font-size: 10px;
`;
export const RulerElDiv = styled.div`
  width: 30px;
`;

export const AddWaterButton = styled.button`
  background-color: var(--blue-color);
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;
  align-items: center;

  font-family: var(--main-font);
  font-weight: 500;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  text-transform: capitalize;
  transition: var(--transition-all-250ms);
  cursor: pointer;

  box-shadow: var(--btn-box-shadow);

  &:hover,
  &:focus {
    outline: none;
    box-shadow: var(--btn-hover-box-shadow);
  }
  &:active {
    /* background-color: #3872f8; */
    /* box-shadow: 0px 2px 7px rgba(64, 123, 255, 0.54); */
    box-shadow: var(--btn-active-box-shadow);
  }

  padding: 8px 30px 8px 30px;
  min-width: 100%;
  height: 36px;

  font-size: 16px;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    padding: 10px 30px 10px 30px;
    min-width: 50%;
    height: 44px;

    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 31%;
  }
`;
export const BtnIcon = styled(CiCirclePlus)`
  stroke-width: 1px;
  width: 26px;
  height: 26px;

  padding: 0;
  margin: 0;
`;
