import styled from // , { css }
'styled-components';

export const MonthStatisticlist = styled.div`

  display: flex;
  gap: 22px;
  align-items: start;
  padding-top: 16px;
  flex-wrap: wrap;
  list-style: none;

  li {
    text-align: center;
    height: 52px;
    width: 34px;
  }

  button {
    border: none;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2f2f2f;
    width: 34px;
    height: 34px;
    padding: 7px;
    cursor: pointer;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 1, 25;
    border-radius: 50%;

    &[data-fulfilled='false'] {
      border: 1px solid #ff9d43;
    }

    //   &:disabled {
    //    opacity: 0;
  }

  p {
    color: #9ebbff;
    font-family: Roboto;
    size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

// [{ date: { year, month, day }, percent }, { date: { year, month, day }, percent }]
// [
//     {
//         "date": {
//             "year": 2024,
//             "month": "01",
//             "day": 1
//         },
//         "percent": 157.7
//     },
//     {
//         "date": {
//             "year": 2024,
//             "month": "01",
//             "day": 3
//         },
//         "percent": 0
//     }
// ]

export const Li = styled.li.attrs(props => ({
  // Every <PasswordInput /> should be type="password"
}))``;
