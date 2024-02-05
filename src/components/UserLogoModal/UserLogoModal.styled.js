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
    background-color: #EFECEC;
    display: inline-block;
      overflow:hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-sizing: border-box;
  }

  .avatar {
    display: block;
    font-size: xx-large;
    text-align: center;
    vertical-align: middle;
    justify-content: space-evenly;
    align-items: center;
}
  }

  .menu-user-button {
    border: none;
    margin: 0px;
    padding: 0px;
    height: 100%;

    cursor: pointer;

    margin-left: auto;
  }

  .main-user-container {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .menu-button svg {
    display: block;
    width: 100%;
    height: 100%;
    color: blue;
  }

  .iconAvatarText{
    height: 100%;
    align-items: center;
    font-size: x-large;
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

    fill: var(--primary-color) ;
  }

  .user-items {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    flex-direction: row;
    align-items: center;
    height: 100%;
  }

  .user-box {
    position: relative;
    display: flex;
    gap: 8px;
    align-items: center;
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
    top: calc(100% - (100% - 48px));
    right: 0;
    width: 118px;
    height: 88px;
    padding: 16px;
    background-color: var(--primary-button-text-color);
    border: 1px solid none;
    border-radius: 10px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);

    opacity: 0;
    transform: translateY(10px);
    visibility: hidden;
    transition: 0.3s;
  }

  .test {
    display: block;
    height: 100%;
  }
  .menu.active {
    top: calc(100% - 48);
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;
