import styled from 'styled-components';

export const LogoutDeleteModalCotntentStyles = styled.div`
  .title,
  .message {
    color: #2f2f2f;
    font-weight: 500;
    margin-bottom: 24px;
  }

  .title {
    font-size: 26px;
    line-height: 1.23;
  }

  .message {
    font-size: 18px;
    line-height: 1.11;
  }

  .btn-container {
    display: flex;
  }

  button {
    padding-left: 30px;
    padding-right: 30px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }

  .action-btn {
    background-color: #ef5050;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    color: #fff;
  }

  .cancel-btn {
    background-color: #d7e3ff;
    color: #407bff;
  }

  @media screen and (max-width: 767px) {
    .btn-container {
      flex-direction: column-reverse;
      row-gap: 32px;
      margin-left: auto;
    }
    button {
      padding-top: 8px;
      padding-bottom: 8px;
      font-size: 16px;
      line-height: 1.25;
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .btn-container {
      column-gap: 54px;
      justify-content: flex-end;
    }
    button {
      padding-top: 10px;
      padding-bottom: 10px;
      font-size: 18px;
      line-height: 24px;
      width: 160px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`;