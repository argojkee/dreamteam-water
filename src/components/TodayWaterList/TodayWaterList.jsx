import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DrinkElement } from "./DrinkElement";
import { EmptyTxt, H2, ListUl } from "./TodayWaterList.styled";

/*
    ✔ TodayWaterList - показує список порцій води, випитої юзером на протязі дня,
    Компонент рендерить: 
    -шкалу з відношенням випитої води за день відносно визначеної норми,
    -кнопку AddWater що відкриває модалку TodayListModal для вводу значення кількості випитої порції води.
*/
const testList = [
    {
        id: 1,
        vol: 100,
        // time: Date.parse('2023-01-01T14:48:00'),
        time: '10:13 AM',
    },
    {
        id: 2,
        vol: 300,
        // time: Date.parse('2023-01-01T22:22:00'),
        time: '2:22 PM',
    },
    {
        id: 3,
        vol: 600,
        // time: Date.parse('2023-01-01T23:54:00'),
        time: '6:41 PM',
    },
    {
        id: 4,
        vol: 100,
        // time: Date.parse('2023-01-01T23:54:00'),
        time: '7:22 PM',
    },
    {
        id: 5,
        vol: 100,
        // time: Date.parse('2023-01-01T23:54:00'),
        time: '8:00 PM',
    },
    {
        id: 6,
        vol: 100,
        // time: Date.parse('2023-01-01T23:54:00'),
        time: '8:56 PM',
    },
]
const list = testList;

export function TodayWaterList() {
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(requestGetAllContacts())
    }, [dispatch])

    // const contacts = useSelector((state) => state.contactList.contacts.items);
    // const filterWord = useSelector((state) => state.contactList.filter)

    // const filterContactsByName = () => {
    //     const ff = filterWord.toLowerCase() ?? '';
    //     return contacts.filter(contact => contact.name.toLowerCase().includes(ff))
    // }

    // const list = filterContactsByName();

    return (
        <>
            <H2>Today</H2>

            <ListUl>
                {list.length
                    ? (list.map(({ id, vol, time }) =>
                        <DrinkElement
                            key={id}
                            id={id}
                            vol={vol}
                            time={time}
                        />
                    ))
                    : (<EmptyTxt>List is empty.</EmptyTxt>)
                }
            </ListUl>
        </>
    )
}