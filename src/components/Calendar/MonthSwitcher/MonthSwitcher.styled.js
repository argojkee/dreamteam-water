import styled from 'styled-components';

export const MonthSwitcherContainer = styled.div`

  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;

    h2{
      color: #2F2F2F;
      font-family: Roboto;
      font-size: 26px;
      font-weight: 500;
      line-height: 1,23
    }

    div{
      display: flex;
      gap: 12px;
      align-items: center;
    }
  
    h3{
      color:#407BFF;
      text-align: center;
      font-family: Roboto;
      font-size: 16px;
      line-height: 1.25;
      min-width: 120px;
      display: block;
    }

    button {
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #407BFF;
      width: 14px;
      height: 14px;
      padding: 0;
      cursor: pointer;

      &:disabled {
       opacity: 0;
  }
  }
`;