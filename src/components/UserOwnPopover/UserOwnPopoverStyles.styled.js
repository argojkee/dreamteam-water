import styled from 'styled-components';

export const UserOwnPopoverStyles = styled.div`
  border: none;

  button {
    background-color: transparent;
    box-shadow: none;
  }

  .avatarBox {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    border: 1px solid #2f2f2f;
    display: inline-block;
  }

  .containerPopover {
    background-color: red;
  }
  .iconSolid {
    margin: 0;
    padding: 0;
    width: 100%;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
  }

  .settingsBox {
    background-color: red;
  }

  .buttonBox {
    display: flex;
    height: 50px;
    border: none;
    background-color: red;

    border-width: 0px;
    border-style: none;
    border-color: none;
    border-image: none;
  }

  .textSettings {
    color: red;
    text-decoration: none;
  }

  .avatarContainer {
    display: flex;
    gap: 8px;
    flex-direction: row;
    align-items: center;
  }

  .textName {
    color: #2f2f2f;

    font-style: Roboto;
    font-weight: 400;
    font-size: 18;
    line-height: 24px;
  }

  .iconAvatar {
    color: red;
  }

  .popover {
    backgroundcolor: red;
    padding: 16px;
  }

  .containerPopover {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
  }

  .buttonPopover {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
  }

  .css-sghohy-MuiButtonBase-root-MuiButton-root {
    -webkit-text-decoration: none;
    text-decoration: none;
  }

  .css-sghohy-MuiButtonBase-root-MuiButton-root:hover {
    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: var(--primary-button-text-color);
    box-shadow: none;
  }

  .css-3bmhjh-MuiPaper-root-MuiPopover-paper {
    width: 118px;
    height: 88px;
    padding: 16px;
  }

  .css-17ffvgn-MuiTypography-root {
    width: 118px;
    height: 88px;
  }
`;
