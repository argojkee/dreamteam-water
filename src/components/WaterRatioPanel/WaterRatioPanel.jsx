/*
   ✔ WaterRatioPanel - показує відношення фактично випитої води до запланованої к-сті, а також здійснює відкриття модалки в якій відбувається запис,
   Історія споживання води протягом дня:
   - В цьому компоненті відображається список з порціями води випитими користувачем протягом дня.
   - Кожен запис(елемент списку) містить інформацію про обсяг випитої води (наприклад, "250 мл") та час споживання (наприклад, "7:00 AM").
   - Користувач може додавати нові записи, використовуючи кнопку Add water з компоненту WaterRatioPanel
*/

// export const WaterRatioPanel = () => {
//    return (
//       <div>
//          <progress max="100" value="50">прогресс</progress>
//          <div>
//             <div>0%</div>
//             <div>50%</div>
//             <div>100%</div>
//          </div>
//       </div>
//    )
// }

import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

import { AddWaterButton, ButtonIcon, PanelDiv, Slider2, SliderContainerDiv, SliderInput } from "./WaterRatioPanel.styled";

const marks = {
   0: '0%',
   50: '50%',
   100: '100%',
}

export const WaterRatioPanel = () => {
   const [value, setValue] = useState(20); // добавить значение

   

   const handleSliderChange = (event) => {
      setValue(event.target.value);
   };

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
               step='1'
               // disabled
               id="range-slider"
               value={value}
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