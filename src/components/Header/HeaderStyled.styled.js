import styled from 'styled-components';

export const HeaderStyles = styled.header`
  .containerHeader {
    display: flex;
    justify-content: space-between;
    width: 1216px;
    height: 48px;
  }

  @media screen and (max-width: 704px) {
    .containerHeader {
      width: 100%;
    }
  }

  .logoBox {
    width: 102px;
    height: 48px;
    padding: 0px;
    margin: 0px;
    display: flex;
    gap: 4px;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    list-style: none;
  }

  .AuthContainer {
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    list-style: none;
  }

  .logoText {
    width: 58px;
    height: 28px;

    color: blue;
    text-decoration: none;
    list-style: none;

    font-style: Roboto;
    font-weight: 700;
    font-size: 12px;
    line-height: 14.06px;

    box-sizing: border-box;
    border: 1px red solid;
    padding: 0px;
    margin: 0px;
  }

  .textSignIn {
    color: blue;
    text-decoration: none;
    list-style: none;

    font-style: Roboto;
    font-weight: 400;
    font-size: 24px;
    line-height: 14.06px;
  }
`;
