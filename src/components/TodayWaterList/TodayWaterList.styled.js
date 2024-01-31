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
export const DrinkInfoDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
`
export const VolumeDiv = styled.div`
    color: #407BFF;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
`
export const TimeDiv = styled.div `
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
`

export const EmptyTxt = styled.div`
    color: blue;
    font-weight: 700;
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
    margin-right: 6px;
`
export const SmallRoundBtn = styled.button`
    /* border-radius: 50%; */
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0 9px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    transition: all .2s ease-out;
    cursor: pointer;

    &:hover, :focus {
        background-color: #cfdaf5aa;
        box-shadow: 0px 0px 4px 5px #D7E3FFAA;
    }
    &:active {
        background-color: #c0cfff55;
        box-shadow: 0px 0px 5px 7px #c0d2ff55;
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
    text-transform: capitalize;
    color: #407BFF;
    /* font-family: Roboto; */
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
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
        background-color: #D7E3FFAA;
        box-shadow: 0px 0px 5px 4px #D7E3FFAA;
    }
    &:active {
        background-color: #c0cfff40;
        box-shadow: 0px 0px 5px 7px #c1ddff54;
    }
`
export const PlusSpan = styled.span`
    font-size: 25px;
    margin-right: 12px;
    font-weight: 100;
`