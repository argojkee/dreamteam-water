import styled from 'styled-components';

export const HeaderStyles = styled.header`
  .containerHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: 704px) {
    .containerHeader {
      width: 100%;
    }
  }

  .logoBox {
    display: flex;
    gap: 4px;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    list-style: none;
  }

  .textSignIn {
    text-decoration: none;
    list-style: none;
    color: #407bff;
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
    box-sizing: border-box;

    color: #407bff;
    text-decoration: none;
    list-style: none;

    font-style: Roboto;
    font-weight: 700;
    font-size: 12px;
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
