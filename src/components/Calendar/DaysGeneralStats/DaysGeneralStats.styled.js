
import styled from 'styled-components';

export const WaterStatsContainer = styled.div`
position: absolute;

  @media screen and (max-width: 319px) {}
  @media screen and (min-width: 320px) {}
  @media screen and (min-width: 320px) and (max-width: 767px) {}
  @media screen and (min-width: 768px) and (max-width: 1279px) {}
  @media screen and (min-width: 1280px) {}

  top: ${props => props.$top}px;
  left: ${props => props.$left}px;
  transform: translate(-100%, -100%);
display: flex;
flex-direction: column;
gap: 16px;
padding: 24px 16px;
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



`