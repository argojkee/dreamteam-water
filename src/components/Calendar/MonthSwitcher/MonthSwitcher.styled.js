import styled from 'styled-components';

export const MonthSwitcherContainer = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 26px;
    font-weight: 500;
    line-height: 1, 23;
  }
  div {
    display: flex;
    align-items: center;
  }
  p {
    color: #407bff;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.25;
    min-width: 120px;
    display: block;
  }

  // @media screen and (max-width: 319px) {}
  // @media screen and (min-width: 320px) {}
  // @media screen and (min-width: 320px) and (max-width: 767px) {}
  // @media screen and (min-width: 768px) and (max-width: 1439px) {}

  @media screen and (min-width: 1440px) {
    h2 {
      font-size: 24px;
      line-height: 1, 25;
    }
  }
  button {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #407bff;
    width: 14px;
    height: 14px;
    padding: 0;
    cursor: pointer;

    &:disabled {
      opacity: 0;
    }
  }
`;
