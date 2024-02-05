import styled from 'styled-components';

export const VerificationStyles = styled.div`
  width: 100%;

  .btn_login {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 384px;
    height: 44px;
    padding: 10px 30px 10px 30px;
    border-radius: 10px;
    background-color: var(--primary-color);
    color: white;

    font-style: Roboto;
    font-weight: 500;
    font-size: 18px;
    color: white;
    line-height: 24px;
    text-align: center;
  }

  .btn_login:hover,
  .btn_login:focus {
    background-color: var(--primary-color);
    box-shadow: 0px 5px 8px rgba(64, 123, 255, 0.34);
  }

  .link {
    text-decoration: none;
  }
  .text_message {
    overflow: hidden;
    font-style: Roboto;
    font-weight: 400;
    font-size: 20px;
    color: white;
    line-height: 1.23;
    text-align: center;
    color: #2f2f2f;
  }

  .box_textMessage {
    display: block;
    padding-bottom: 36px;
  }
`;
