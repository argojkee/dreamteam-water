import styled from 'styled-components';

export const HeaderStyles = styled.header`
  border: red 1px solid;

  .containerHeader {
    display: flex;
    justify-content: space-between;
  }

  .logoBox {
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
  }

  .avatarContainer {
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: center;
  }

  .logoText {
    width: 58px;
    height: 28px;

    color: blue;
    text-decoration: none;
    list-style: none;

    font-style: Roboto;
    font-weight: 400;
    font-size: 1.2;
    line-height: 14.06px;
  }

  .avatarText {
    color: blue;
    text-decoration: none;

    font-style: Roboto;
    font-weight: 400;
    font-size: 1.8;
    line-height: 14.06px;
  }
`;