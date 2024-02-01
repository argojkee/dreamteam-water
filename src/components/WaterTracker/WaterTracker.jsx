import React from 'react';
import { SliderTitle, WaterProgress, WaterScale, Slider, PercentageText, WaterScaleContainer, AddButton, AddButtonIcon,AddButtonText, TrackerWrapper } from './WaterTracker.styled';
import plusforbutton from '../../homepageimages/plusforbutton.svg'; 

const WaterTracker = ({ percentage = 40}) => {
  return (
    <div>
      <SliderTitle>Today</SliderTitle>
      <TrackerWrapper>
      <WaterScaleContainer>
      <WaterScale>
       <WaterProgress width={`${percentage}%`} />
       <Slider percentage={percentage}>
          <PercentageText position="current">{percentage}%</PercentageText>
        </Slider>
      </WaterScale>
      {/* <StickContainer>
      <Stick></Stick>
      <Stick></Stick>
      <Stick></Stick>
      </StickContainer> */}
     
     
      </WaterScaleContainer>
      <AddButton>
        <AddButtonIcon src={plusforbutton} alt="plusforbutton" />
        <AddButtonText>Add water</AddButtonText>
      </AddButton>
      </TrackerWrapper>
      
    </div>
  );
};

export default WaterTracker;
