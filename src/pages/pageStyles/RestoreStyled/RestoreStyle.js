import styled from 'styled-components';
import background from '../../../images/verify/BackgroundMainPage.png';

export const RestoreStyled = styled.div`
  background-color: ${props =>
    props.$isDark ? 'var(--dark-bg-color)' : 'transparent'};
  height: 100%;
  width: 100%;

  .box {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: calc(100% - 60px);
    position: relative;
    top: 60px;
    text-align: center;
  }

  .setting-text {
    display: block;
    padding-bottom: 16px;
    overflow: hidden;
    font-style: Roboto;
    font-weight: 400;
    font-size: 20px;
    color: white;
    line-height: 1.23;
    text-align: center;
    color: ${props => (props.$isDark ? 'orange' : 'var(--primary-color)')};
  }

  .setting-form-form {
    display: block;
    width: 384px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px;
  }

  @media screen and (max-width: 390px) {
    .setting-form-form {
      width: 100%;
    }
  }

  .setting-form-input {
    position: relative;
    z-index: 500;
    display: block;
    width: 100%;
    height: 44px;
    font-family: roboto;
    font-size: 16px;
    color: var(--primary-color);
    padding: 12px 10px;
    border-radius: 6px;
    background-color: white;
    border: 1px solid;
    border-color: blue;
    outline: 'none';
    margin-bottom: 16px;
  }

  @media screen and(max-width: 767px) {
    .setting-form-input {
      width: 100%;
    }
  }

  .setting-form-submit {
    display: block;
    border: 1px solid;
    border-radius: 6px;
    height: 44px;
    padding: 10px 30px;
    cursor: pointer;
    width: 100%;
    margin: 0 8px 8px auto;
    color: var(--white-color);
    font-size: 20px;

    background-color: ${props =>
      props.$isDark ? '#ff9d43' : 'var(--primary-color)'};
    box-shadow: 0px 5px 8px rgba(64, 123, 255, 0.34);

    &:hover {
      background-color: ${props => (props.$isDark ? '#FB8925' : '#3371f8')};
      box-shadow: 0px 5px 14px rgba(64, 123, 255, 0.54);
    }

    &:active {
      box-shadow: none;
    }
  }

  @media screen and (max-width: 390px) {
    .setting-form-submit {
      width: 100%;
    }
  }

  .bubble-gen {
    width: 100wv;
    height: 0px;
    margin: 0;
    padding: 0;
    bottom: 1px;
  }

  span {
    position: absolute;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(80, 150, 250, 0.5);
    animation: animate 5s linear infinite;
  }
  span:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(0.25) translate(-70%, -70%);
    background: radial-gradient(#fff, transparent);
    border-radius: 50%;
  }
  @keyframes animate {
    0% {
      transform: translateY(0%);
      opacity: 1;
    }
    60%,
    99% {
      opacity: 1;
    }
    100% {
      transform: translateY(-2000%);
      opacity: 0;
    }
  }
  h2 {
    color: #333;
    font-size: 10em;
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
  //стили

  margin-left: auto;
  margin-right: auto;

  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: roboto;
  color: white;
  width: 100%;
  margin-bottom: 8px;
  background-color: transparent;
`;
