import styled from 'styled-components';

export const AddFormStyles = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
  text-align: center;
  padding: 20px;
  /* width: 300px; */

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
  h1 {
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  h3 {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .edit-water-form {
    margin-top: 20px;
  }

  .step-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    button {
      padding: 8px 16px;
      cursor: pointer;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  }

  input {
    padding: 12px;
    font-size: 16px;
    width: 100%;
    margin-bottom: 10px;
  }

  select {
    padding: 12px;
    font-size: 16px;
    width: 100%;
    margin-bottom: 10px;
  }

  button {
    padding: 12px 24px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
  }
`;
