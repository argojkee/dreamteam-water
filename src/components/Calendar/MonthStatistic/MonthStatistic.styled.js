import styled from 'styled-components';

export const MonthStatisticlist = styled.div`

  display: flex;
  gap: 22px;
  align-items: start;
  padding-top: 16px;

  li{
    text-align: center;
  }

  button {
      border: none;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #2F2F2F;
      width: 34px;
      height: 34px;
      padding: 7px;
      cursor: pointer;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 1,25;

    //   &:disabled {
    //    opacity: 0;
  }

    p{
      color: #9EBBFF;
      font-family: Roboto;
      size: 12px;
      font-weight: 400;
      line-height: 1.5;
    }


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