import { BtnWrapDiv, DelBtnIcon, DrinkInfoDiv, DrinkLi, EditBtnIcon, SmallRoundBtn, VolumeDiv } from "./TodayWaterList.styled"
import DrinkIcon from '../../icons/drink.svg';
// import { useState } from "react";
// import { Modal } from "@mui/material";
// import TodayListModal from "components/TodayListModal/TodayListModal";

export const DrinkElement = ({ id, vol, time }) => {
    // const [showAddModal, setShowAddModal] = useState(false);

    // const qwe = () => {
    //     console.info('########TEST openModal#############');
    //     setShowAddModal(true)
    // }

    return (
        <DrinkLi id={id}>
            <DrinkInfoDiv>
                <img src={DrinkIcon} alt="Glass of water" />
                <VolumeDiv>{vol} ml</VolumeDiv>
                <div>{time}</div>
            </DrinkInfoDiv>
            <BtnWrapDiv>
                <SmallRoundBtn>
                    <EditBtnIcon title='Edit'
                        // onClick={() => qwe()}
                    />
                </SmallRoundBtn>
                <SmallRoundBtn>
                    <DelBtnIcon title='Delete' />
                </SmallRoundBtn>
            </BtnWrapDiv>
            {/* {showAddModal && (
                // модалка не работает
                <Modal
                    closeModal={() => setShowAddModal(false)}
                    children={
                        <TodayListModal closeModal={() => setShowAddModal(false)} />
                    }
                />
            )} */}
        </DrinkLi>
    )
}