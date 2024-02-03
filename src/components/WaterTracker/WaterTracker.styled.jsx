import styled, { css } from 'styled-components';

export const SliderTitle = styled.h3`
  color:  #407BFF;
font-size: 18px;
font-weight: 400;
line-height: 1.33;
margin-bottom: 8px;
@media (min-width: 768px) and (max-width: 1439px){
    margin-bottom: 0;
  }
`;



export const TrackerWrapper = styled.div`
@media (min-width: 768px) {
    display: flex;
    /* justify-content: space-between; */
    gap: 32px;
    align-items: center;
  }

  @media (min-width: 1440px) {
    gap: 43px;
  }
`;

export const WaterScaleContainer = styled.div`
padding: 0 10px;
@media (min-width: 768px) and (max-width: 1439px){
  }
`;


export const WaterScale = styled.div`
  position: relative;
  width: 100%;
  height: 14px;
  background-color: #9EBBFF;
  border-radius: 10px;
  margin-bottom: 52px;

  @media (min-width: 768px){
    width: 325px;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    width: 360px;
  }
`;

export const WaterProgress = styled.div`
position: absolute;
  height: 100%;
  width: ${({ width }) => width};
  border-radius: 10px;
  background-color: #407BFF;
`;

export const Slider = styled.div`
 width: 14px;
height: 14px;
border-radius: 14px;
border: 1px solid  #407BFF;
background: #FFF;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ percentage }) => percentage === 0 ? `100` : `${100 - percentage}%`};
`;

// export const StickContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
 
// `;

// export const Stick = styled.div`
//   height: 8px;
//   width: 1px;
//   background-color: #9EBBFF;
 
// `;





export const PercentageText = styled.div`
padding-left: 3px;

  color: #407BFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;
  ${({ position }) => position === "current" && css`
    /* Стили для текущего процента */
    position: absolute;
    top: calc(50% + 16px); /* Выравниваем текст над точкой */
    left: ${({ percentage }) => `${percentage}%`}; /* Позиционируем текущий процент в зависимости от процента */
    transform: translateX(-50%); /* Центрируем текст относительно точки */
  `}
`;


export const AddButton = styled.button`
width: 100%;
display: inline-flex;
padding: 6px 0;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
background: #407BFF;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

@media (min-width: 768px) and (max-width: 1439px){
    width: 336px;
  }

  @media (min-width: 1440px) {
    width: 178px;
  }
  
`;

export const AddButtonIcon = styled.img`
 
`;

export const AddButtonText = styled.span`
color: #FFF;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 1.25;
 
`;