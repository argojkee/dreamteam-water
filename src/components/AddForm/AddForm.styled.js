import styled from 'styled-components';

export const AddFormStyles = styled.div`
  margin: auto;
  text-align: center;
  min-width: 300px;
  .header {
    font-family: 'Roboto';
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 16px;
    text-align: start;
  }

  .add-second-header {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    text-align: start;
  }
  .string {
    text-align: start;
    margin-bottom: 12px;
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
      background-color: #ffffff;
      color: #407bff;
      border: 1px solid #9ebbff;
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
    color: #407bff;
    border-radius: 40px;
    width: 92px;
    height: 36px;
  }

  .select-container {
    display: flex;
    flex-direction: column;
  }
  input {
    color: #407bff;
    border-color: #d7e3ff;
    width: 120px;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  select {
    color: #407bff;
    border-color: #d7e3ff;
    width: 120px;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 24px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 12px 24px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
`;
