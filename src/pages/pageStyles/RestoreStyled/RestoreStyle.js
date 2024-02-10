import styled from 'styled-components';
import background from '../../../images/verify/BackgroundMainPage.png';

export const RestoreStyled = styled.div`
  background-color: ${props =>
    props.$isDark ? 'var(--dark-bg-color)' : 'transparent'};
  height: 100%;
  width: 100%;

  .box {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .setting-form-form {
    width: 384px;
  }

  .setting-form-input {
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
    border-color: #d7e3ff;
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

  @media screen and (max-width: 767px) {
    .setting-form-submit {
      width: 100%;
    }
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
