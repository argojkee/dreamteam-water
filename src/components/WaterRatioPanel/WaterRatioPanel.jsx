import { CiCirclePlus } from 'react-icons/ci';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  AddWaterButton,
  BarContainerDiv,
  ButtonIcon,
  PanelDiv,
  RatioBarH3,
  SliderContainerDiv,
  SliderInput,
  SliderValueDiv,
  ProgressBarLower,
  WaterProgressThumb,
  ProgressBarDiv,
} from './WaterRatioPanel.styled';
import { Modal } from 'components/Modal/Modal';
import { getCurrentDay, getCurrentPercentage } from '../../redux/water/waterSelectors';
import { AddForm } from 'components/AddForm/AddForm';

const elTypes = {
  progressBar: 'PROGRESS_BAR',
  progressBarThumb: 'PROGRESS_BAR_THUMB',
  progressBarLower: 'PROGRESS_BAR_LOWER',
  progressBarValue: 'PROGRESS_BAR_VALUE',
}

export const WaterRatioPanel = () => {
  // const [value, setValue] = useState(20); // добавить значение
  const [isShowAddModal, setIsShowAddModal] = useState(false);

  const progressValue = useSelector(getCurrentPercentage);

  const calcWidth = (elType) => {
    switch (elType) {
      case 'PROGRESS_BAR_THUMB':
        {
          if (progressValue >= 100) { return 'calc(100% - 13px)' }
          if (progressValue <=3) return `calc(${progressValue}% - 7px)`
          return progressValue < 2 ? `0` : `calc(${progressValue}% - 13px)`;
        }
      case 'PROGRESS_BAR_LOWER':
        {
          if (progressValue >= 100) { return '100%' }
          return progressValue < 2 ? `0` : `calc(${progressValue}%)`;
        }
      case 'PROGRESS_BAR_VALUE':
        {
          if (progressValue >= 100) { return 'calc(95%)' }
          return progressValue < 2 ? `0` : `calc(${progressValue}% - 3%)`;
        }
        default: return `${progressValue}%`;
    }
  }
   

  return (
    <div>
      <RatioBarH3>Today</RatioBarH3>

      <PanelDiv>
        <AddWaterButton onClick={() => setIsShowAddModal(true)}>
          <ButtonIcon><CiCirclePlus /></ButtonIcon>
          Add Water
        </AddWaterButton>

        <SliderContainerDiv className="slider-container">

          <BarContainerDiv>
            <ProgressBarDiv />
            <ProgressBarLower width={calcWidth(elTypes.progressBarLower)} />
            <WaterProgressThumb Width={calcWidth(elTypes.progressBarThumb)} />

            <SliderValueDiv Width={calcWidth(elTypes.progressBarValue)}>
              {progressValue}%
            </SliderValueDiv>


          </BarContainerDiv>



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
