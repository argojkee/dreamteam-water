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
export const BarContainerDiv = styled.div`
    position: relative;
`
export const ProgressBarDiv = styled.input`
    position: relative;
    transform: translateY(-50%);

    width: 100%;
    background-color: #D7E3FF;
    height: 8px;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 20px;
`

export const ProgressBarLower = styled.div`
    position: absolute;
    transform: translateY(-50%);

    top:20px;
    height: 8px;
    width: ${({ val }) => val};
    border-radius: 10px;
    background-color: #9EBBFF;
`

export const WaterProgressThumb = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 4px));
    left: ${({ val }) => val};


    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #fff;
    border: solid 1px #407BFF;
`

export const SliderValueDiv = styled.div`
    position: absolute;
    left: 0;
    left: ${({ val }) => val};

    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #407BFF;


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
    cursor: pointer;

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
