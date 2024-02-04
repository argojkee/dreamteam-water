import { GoTrash } from "react-icons/go";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import styled from "styled-components";

export const DrinkLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;

    color: black;
    list-style: none;
    font-family: Roboto;
    font-weight: 400;
    border-bottom: solid 1px #D7E3FF;
    transition: all .2s ease-out;
`
export const DrinkIconImg = styled.img`
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
        width: 36px;
        height: 36px;
    }
`
export const DrinkInfoDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    font-size: 12px;
`
export const VolumeDiv = styled.div`
    color: #407BFF;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    
    min-width: 60px;
    /* margin-right: 12px; */

    @media screen and (min-width: 768px) {
        margin-right: 16px;
    }
`
export const TimeDiv = styled.div`
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
`

export const EmptyTxt = styled.div`
    color: #9EBBFF;
    font-weight: 400;
`
export const H2 = styled.h2`
    color: #2F2F2F;
    font-family: Roboto;
    font-size: 26px;
    font-weight: 500;
`
export const ListUl = styled.ul`
    margin-top: 16px;
    color: #2F2F2F;
    font-family: Roboto;

    height: 183px;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        width: 2px;
        border-radius: 5px;
        background-color: #D7E3FF;
    }
    &::-webkit-scrollbar-thumb {
        width: 4px;
        border-radius: 5px;
        background-color: #9EBBFF;
    }
`
export const BtnWrapDiv = styled.div`
    display: flex;
    gap: 18px;
    justify-content: space-between;
    margin-right: 4px;
    @media screen and (min-width: 768px) {
        margin-right: 6px;
    }
`
export const SmallRoundBtn = styled.button`
    width: 18px;
    height: 18px;
    padding: 0;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    transition: all .2s ease-out;
    cursor: pointer;

    &:hover, :focus {
        /* background-color: #cfdaf5aa; */
        /* box-shadow: 0px 0px 4px 5px #D7E3FFAA; */
        box-shadow: 0px 1px 5px rgba(64, 123, 255, 0.24);
    }
    &:active {
        background-color: #c0cfff35;
        /* box-shadow: 0px 0px 5px 7px #c0d2ff55; */
        
        box-shadow: 0px 1px 2px rgba(64, 123, 255, 0.34);
    }

    @media screen and (min-width: 768px) {
        margin: 0 9px;
    }

`
export const EditBtnIcon = styled(HiOutlinePencilSquare)`
    color: #9EBBFF;
    width: 16px;
    height: 16px;
`
export const DelBtnIcon = styled(GoTrash)`
    color: #EF5050;
    width: 16px;
    height: 16px;
`
export const ActionsWrapper = styled.div`

`
export const AddTodayWaterBtn = styled.button`
    background-color: transparent;
    border: none;
    color: #407BFF;
    font-family: Roboto;
    font-weight: 500;
   
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    gap: 12px;
    justify-content: space-evenly;
    align-items: center;

    margin-top: 10px;
    
    border-radius: 5px;
    cursor: pointer;
    transition: all .2s ease-out;
    &:hover, :focus {
        box-shadow: 0px 5px 7px rgba(64, 123, 255, 0.14);
        /* background-color: #D7E3FFAA; */
        /* box-shadow: 0px 0px 5px 4px #D7E3FFAA; */
    }
    &:active {
        /* background-color: #c0cfff40; */
        background-color: #D7E3FF1A;
        box-shadow: 0px 1px 7px rgba(64, 123, 255, 0.14);
        /* box-shadow: 0px 0px 5px 7px #c1ddff54; */
    }

    font-size: 16px;
    line-height: 20px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 24px;
    }
`
export const PlusSpan = styled.span`
    font-size: 25px;
    margin-right: 12px;
    font-weight: 100;
`