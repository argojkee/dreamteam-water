import { DelBtn, DrinkInfoDiv, DrinkLi, EditBtn, VolumeDiv } from "./TodayWaterList.styled"
import DrinkIcon from '../../icons/drink.svg';

export const DrinkElement = ({ id, vol, time }) => {

    return (
        <DrinkLi id={id}>
            <DrinkInfoDiv>
                <img src={DrinkIcon} alt="Glass of water" />
                <VolumeDiv>{vol} ml</VolumeDiv>
                <div>{time}</div>
            </DrinkInfoDiv>
            <div>
                <EditBtn title='Edit' />
                <DelBtn title='Delete' />
            </div>
        </DrinkLi>
    )
}