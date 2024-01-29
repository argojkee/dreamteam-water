import styled from 'styled-components';

export const UserLogoModalStyles = styled.div`
  border: none;

  button {
    background-color: transparent;
    box-shadow: none;
  }

  .avatarBox {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    border: none;
    background-color: #D3D3D3;
    display: inline-block;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .menu-user-button {
    border: none;
    margin: 0px;
    padding: 0px;
    height: 100%;
    min-width: 122px;
    cursor: pointer;

    margin-left: auto;
  }

  .menu-button svg {
    display: block;
    width: 100%;
    height: 100%;
    color: blue;
  }

  .icon {
    margin-right: 8px;
    font-size: 16px;
    color: blue;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
    width: 100%;
    padding: 0;
    list-style-type: none;

    font-style: Roboto;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  .menu-item {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: blue;
    cursor: pointer;
  }

  .iconSolid {
    margin: 0;
    padding: 0;
    width: 100%;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;

    fill: #407BFF;
  }

  .user-items {
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }

  .avatar-container {
    height: 100%;
  }

  .box-menu-item {
    display: flex;
  }
  .textName {
    color: #2f2f2f;

    font-style: Roboto;
    font-weight: 400;
    font-size: 18;
    line-height: 24px;
  }

  .menu {
    position: absolute;
    width: 118px;
    height: 88px;
    padding: 16px;
    background-color: #fff;
    border: 1px solid none;
    border-radius: 10px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);

    opacity: 0;
    transform: translateY(10px);
    visibility: hidden;
    transition: 0.3s;
  }

  .menu.active {
    top-right: 0;
    top: calc(100% - 48);
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;
