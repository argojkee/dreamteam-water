import styled from 'styled-components';

import selectArrow from '../../images/select/arrow-down-338-svgrepo-com.svg';

export const AddFormStyles = styled.div`
  margin: auto;
  text-align: center;
  // min-width: 300px;
  .header {
    font-family: 'Roboto';
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 16px;
    text-align: start;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }

  .container-edit-drink {
    display: flex;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    background-color: ${props =>
      props.$isDark ? 'rgba(0,0,0,0.5)' : '#ecf2ff'};
    column-gap: 12px;
    border-radius: 10px;
  }

  .result {
    font-weight: 600;
    color: ${props => (props.$isDark ? 'white' : 'var(--primary-color)')};
  }

  .edit-ml-value {
    color: var(--primary-color);
    margin-right: 16px;
  }

  .edit-time-value {
    color: ${props => (props.$isDark ? 'white' : ' #2f2f2f')};
  }
  .edit-second-header {
    margin-bottom: 16px;
    text-align: start;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }
  .drink-icon {
    width: 36px;
    height: 36px;
  }

  .add-second-header {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    text-align: start;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }
  .string {
    text-align: start;
    margin-bottom: 12px;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }

  .edit-water-form {
    margin-top: 20px;
  }

  .step-input {
    width: 194px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    button {
      padding: 8px 16px;
      cursor: pointer;
      font-size: 16px;
      background-color: ${props =>
        props.$isDark ? 'orange' : 'var(--primary-button-text-color)'};
      color: var(--primary-color);
      border: ${props => (props.$isDark ? 'none' : '1px solid #9ebbff')};
      border-radius: 50%;
      width: 44px;
      height: 44px;
      box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
    }
  }
  .water-amount {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d7e3ff;
    color: var(--primary-color);
    border-radius: 40px;
    width: 92px;
    height: 36px;
    font-weight: 600;
  }

  .select-container {
    display: flex;
    flex-direction: column;
  }
  input {
    color: var(--primary-color);
    border: 1px solid #d7e3ff;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: ${props => (props.$isDark ? 'gray' : 'white')};
  }

  select {
    color: var(--primary-color);
    border-color: #d7e3ff;
    appearance: none;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 24px;
    border-radius: 10px;
    background: url(${selectArrow}) no-repeat;
    background-position: calc(100% - 12px) center;
    background-size: 15px, 15px;
    background-color: ${props => (props.$isDark ? 'gray' : 'white')};
  }

  .resultInfo{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    gap: 16px;

  }

  select:focus {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  button {
    width: 100%;
    padding: 12px 24px;
    background-color: #007bff;
    color: var(--primary-button-text-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  @media screen and (max-width: 767px) {
    max-width: 400px;
    input,
    .header {
      width: 100%;
    }
    .container-edit-drink {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    select {
      width: 100%;
    }

    .resultInfo{
      display: flex;
      
      flex-direction: row;

      gap: 24px;

      width: 256px;

      margin-left: auto;
    }

    button {
      width: 160px;
    }

    width: 704px;
  }

  @media screen and (min-width: 768px) {
    // input,
    // select {
    //   width: 544px;
    // }

    .resultInfo{
      display: flex;
      flex-direction: row;
    }

    .container-edit-drink {
      width: 254px;
    }
  }

  @media screen and (min-width: 1440px) {

    .resultInfo{
      display: flex;
      
      flex-direction: row;

      gap: 24px;

      width: 256px;

      margin-left: auto;
    }

    button {
      width: 160px;
    }

    width: 592px;
  }
`;
