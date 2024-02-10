import styled from 'styled-components';
import background from '../../../images/verify/BackgroundMainPage.png';

export const VerificationStyles = styled.div`
  background-color: ${props =>
    props.$isDark ? 'var(--dark-bg-color)' : 'transparent'};
  height: 100%;
  height: 100%;

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
    color: ${props => (props.$isDark ? '#fff' : 'black')};
  }

  .box_textMessage {
    display: block;
    padding-bottom: 36px;
  }

  .box {
    background-color: ${props => (props.$isDark ? 'black' : 'transparent')};
  }
`;

export const BackgroundStyles = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const ContentStyles = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15%;
`;
