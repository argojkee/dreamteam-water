import { CiCirclePlus } from 'react-icons/ci';

import {
  AddWaterButton,
  ButtonIcon,
  PanelDiv,
  SliderContainerDiv,
  SliderInput,
} from './WaterRatioPanel.styled';

// const marks = {
//    0: '0%',
//    50: '50%',
//    100: '100%',
// }

export const WaterRatioPanel = () => {
  // const [value, setValue] = useState(20); // добавить значение
  //   const value = 20;

  // const handleSliderChange = (event) => {
  //    setValue(event.target.value);
  // };

  return (
    <PanelDiv>
      <AddWaterButton>
        <ButtonIcon>
          <CiCirclePlus />
        </ButtonIcon>
        Add Water
      </AddWaterButton>
      <SliderContainerDiv className="slider-container">
        {/* <Slider2
               marks={marks}
               min={0}
               max={100}
               onChange={handleSliderChange}
               value={value}
            /> */}
        <SliderInput
          type="range"
          min="0"
          max="100"
          step="1"
          // disabled
          id="range-slider"
          // value={value}
          // onChange={handleSliderChange}
        />

        {/* <SliderValueDiv className="slider-value" id="sliderValue">
               {value}
            </SliderValueDiv> */}
      </SliderContainerDiv>
    </PanelDiv>
  );
};

export default WaterRatioPanel;
