import styled from 'styled-components';

export const HeaderStyles = styled.header`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 60px;
  .containerHeader {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: var(--primary-color);
    text-shadow: 0px 0px #fff;
  }

  @media screen and (max-width: 300px) {
    .textSignIn {
      font-size: 0px;
    }
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

    color: ${props => (props.$isDark ? 'orange' : 'var(--primary-color)')};
    text-decoration: none;
    list-style: none;

    font-family: Roboto;
    font-weight: 700;
    font-size: 12px;
    line-height: 14.06px;
  }

  .avatarText {
    color: blue;
    text-decoration: none;

    font-family: Roboto;
    font-weight: 400;
    font-size: 1.8;
    line-height: 14.06px;
  }
`;
