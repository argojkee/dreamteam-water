import { CiCirclePlus } from 'react-icons/ci';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  AddWaterButton,
  ButtonIcon,
  PanelDiv,
  RatioBarH3,
  SliderContainerDiv,
  SliderInput,
  SliderValueDiv,
  WaterProgress,
} from './WaterRatioPanel.styled';
import { Modal } from 'components/Modal/Modal';
import { getCurrentDay } from '../../redux/water/waterSelectors';
import { AddForm } from 'components/AddForm/AddForm';

// const marks = {
//    0: '0%',
//    50: '50%',
//    100: '100%',
// }

export const WaterRatioPanel = () => {
  // const [value, setValue] = useState(20); // добавить значение
  const [isShowAddModal, setIsShowAddModal] = useState(false);

  const currentDayQWE = useSelector(getCurrentDay);
  const progressValue = currentDayQWE?.percent || 0;

  // const handleSliderChange = (event) => {
  //    setValue(event.target.value);
  // };

  return (
    <div>
      <RatioBarH3>Today</RatioBarH3>

      <PanelDiv>
        <AddWaterButton onClick={() => setIsShowAddModal(true)}>

          <ButtonIcon><CiCirclePlus /></ButtonIcon>
          Add Water
        </AddWaterButton>

        <SliderContainerDiv className="slider-container">
          <SliderInput
            type="range"
            min="0"
            max="100"
            step="1"
            disabled
            id="range-slider"
            value={progressValue}
          // onChange={handleSliderChange}
          />
          <WaterProgress width={`${progressValue}%`} />

          <SliderValueDiv className="slider-value" id="sliderValue">
            {progressValue}
          </SliderValueDiv>

          <div>
            {/* <div>0%</div> */}
          </div>


        </SliderContainerDiv>

        {isShowAddModal && (
          <Modal
            closeModal={() => setIsShowAddModal(false)}
            children={<AddForm closeAddForm={() => setIsShowAddModal(false)} />}
          />
        )}
      </PanelDiv>
    </div>
  );
};

export default WaterRatioPanel;
