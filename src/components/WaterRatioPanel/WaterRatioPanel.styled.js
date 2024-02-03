import styled from "styled-components";

export const RatioBarH3 = styled.h3`
    color:  #407BFF;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;
    margin-bottom: 8px;
    @media (min-width: 768px) and (max-width: 1439px){
        margin-bottom: 0;
    }
`;

export const PanelDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 23px;

`
export const SliderContainerDiv = styled.div`
    width: 100%;
    position: relative;
`
// rc-slider - не получилось
// export const Slider2 = styled(Slider)`
//   &.rc-slider-rail {
//     position: absolute;
//     width: 100%;
//     height: 4px;
//     background-color: #e9e9e9;
//     border-radius: 6px;
//   }

//   &.rc-slider-track,
//   &.rc-slider-tracks {
//     position: absolute;
//     height: 4px;
//     background-color: tint(blue, 60%);
//     border-radius: 6px;
//   }
// `

export const SliderInput = styled.input`
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    background-color: #D7E3FF;
    height: 8px;
    border-radius: 5px;
    outline: none;
    margin-top: 20px;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 14px;
        height: 14px;
        background-color: white;
        border-radius: 50%;
        border: solid 1px #407BFF;
        /* filled-color: #9EBBFF; */
        /* cursor: pointer; */
    }
    &::-ms-fill-lower {
    background: slateblue;
    border-radius: 0;
  }
  `
  export const WaterProgress = styled.div`
    position: absolute;

    top:20px;
    height: 8px;
    width: ${({ width }) => width};
    border-radius: 10px;
    background-color: #9EBBFF;
  `;


// export const RangeSliderInput = styled.input`
//     width: 100%;
//     border-radius: 8px;    

//     &.range-slider__range {
//         background: blue;
//     }

//     &.range-slider__thumb[data-lower] {
//         width: 0;
//     }
//     &.range-slider__range {
//     border-radius: 6px;
  
//   background: #ffbf00;
// }
// `

export const SliderValueDiv = styled.div`
    position: absolute;
    /* top: -30px; */
    left: 0;
    /* width: 100%; */
    text-align: center;
`

export const AddWaterButton = styled.button`
    background-color: #407BFF;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    min-width: 31%;
    
    padding: 10px 30px 10px 30px;
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    text-transform: capitalize;
    transition: all .2s ease-out;

    &:hover, &:focus, &:active {
        outline: none;
        background-color: #3872f8;
        box-shadow: 0px 0px 5px 3px #D7E3FFAA;
    }
    &:active {
        background-color: #306af0;
        box-shadow: 0px 0px 4px 3px #D7E3FFAA;
    }
`
export const ButtonIcon = styled.span`
    display: block;
    padding: 0;
    margin: 0;
    width: 20%;
    font-size: 30px;
    font-weight: 700;
`

