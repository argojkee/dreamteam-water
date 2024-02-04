
import styled from 'styled-components';

export const WaterStatsContainer = styled.div`
position: absolute;
padding: 24px 16px;
display: flex;
flex-direction: column;
gap: 20px;
width: 292px;
height: 188px;
background-color: #fff;
color:#2F2F2F;
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 1.25;
border-radius: 10px;
box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);

@media screen and (max-width: 767px) {
top: -188px;
left: -8px;
width: 280px;
padding: 24px 13px 24px 13px;
  }

div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #407BFF;

    button {
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #407BFF;
        width: 16px;
        height: 16px;
        padding: 0;
        cursor: pointer;

     svg{
        width: 16px;
        height: 16px;
         }
}

}

    span{
        color:#407BFF;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.33; 
    }
     @media screen and (min-width: 768px) and (max-width: 1279px) {
      top: ${props => props.$top}px;
      left: ${props => props.$left}px;
      transform: ${props => (props.$transformRight ? 'translate(0%, -100%)' : 'translate(-100%, -100%)')};
     }

@media screen and (min-width: 1280px) {
top: ${props => props.$top}px;
left: ${props => props.$left}px;
transform: translate(-100%, -100%);
  }

`