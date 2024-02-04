import styled from 'styled-components';

export const PopoverDayStyles = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 292px;
  height: 188px;
  background-color: #fff;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  @media screen and (max-width: 767px) {
    width: 280px;
    padding: 24px 13px 24px 13px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #407bff;

    button {
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #407bff;
      width: 16px;
      height: 16px;
      padding: 0;
      cursor: pointer;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }

  span {
    color: #407bff;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
  }
`;
