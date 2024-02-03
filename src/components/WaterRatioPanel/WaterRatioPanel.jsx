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
  SliderValueDiv,
  ProgressBarLower,
  WaterProgressThumb,
  ProgressBarDiv,
  RulerDiv,
  RulerElStripDiv,
  RulerElDiv,
} from './WaterRatioPanel.styled';
import { Modal } from 'components/Modal/Modal';
import { getCurrentPercentage } from '../../redux/water/waterSelectors';
import { AddForm } from 'components/AddForm/AddForm';

const elTypes = {
  progressBar: 'PROGRESS_BAR',
  progressBarThumb: 'PROGRESS_BAR_THUMB',
  progressBarLower: 'PROGRESS_BAR_LOWER',
  progressBarValue: 'PROGRESS_BAR_VALUE',
};

export const WaterRatioPanel = () => {
  const [isShowAddModal, setIsShowAddModal] = useState(false);

  const progressValue = useSelector(getCurrentPercentage);

  const calcWidth = elType => {
    switch (elType) {
      case 'PROGRESS_BAR_LOWER': {
        if (progressValue >= 100) return '100%';
        return progressValue < 2 ? `0` : `calc(${progressValue}%)`;
      }
      case 'PROGRESS_BAR_THUMB': {

        if (progressValue >= 100) return 'calc(100% - 13px)';
        return `calc(${progressValue}% - 7px)`;
        if (progressValue <= 5) return `calc(${progressValue}% - 7px)`;
        return progressValue < 2 ? `0` : `calc(${progressValue}% - 13px)`;
      }
      case 'PROGRESS_BAR_VALUE': {
        if (progressValue >= 100) return `calc(100% - 50px)`;

        return `calc(${progressValue}% - 30px)`;
        return progressValue < 2 ? `0` : `calc(${progressValue}% - 3%)`;
      }
      default:
        return `${progressValue}%`;
    }
  };

  const checkOverlap = (rulerVal, currentVal) => {
    switch (rulerVal) {
      case 0:
        if(currentVal <= 8) return true;
        else return false;
      case 50:
        if(currentVal >= 42 && currentVal <= 62) return true;
        else return false;
      case 100:
        if(currentVal >= 92) return true;
        else return false;
    
      default: return false;
    }
  }

  return (
    <div>
      <RatioBarH3>Today</RatioBarH3>

      <PanelDiv>

        <SliderContainerDiv className="slider-container">
          <BarContainerDiv>
            <ProgressBarDiv />
            <ProgressBarLower val={calcWidth(elTypes.progressBarLower)} />
            <WaterProgressThumb val={calcWidth(elTypes.progressBarThumb)} />

            <SliderValueDiv val={calcWidth(elTypes.progressBarValue)}>
              {progressValue ?? '0'}%
            </SliderValueDiv>
          </BarContainerDiv>

          <RulerDiv>
            <RulerElDiv>
              <RulerElStripDiv>|</RulerElStripDiv>
              { !checkOverlap(0, progressValue) && <div>0%</div>}
            </RulerElDiv>
            <RulerElDiv>
              <RulerElStripDiv>|</RulerElStripDiv>
              { !checkOverlap(50, progressValue) && <div>50%</div>}
            </RulerElDiv>
            <RulerElDiv>
              <RulerElStripDiv>|</RulerElStripDiv>
              { !checkOverlap(100, progressValue) && <div>100%</div>}
            </RulerElDiv>
          </RulerDiv>

        </SliderContainerDiv>

        <AddWaterButton onClick={() => setIsShowAddModal(true)}>
          <ButtonIcon><CiCirclePlus /></ButtonIcon>
          Add Water
        </AddWaterButton>

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
