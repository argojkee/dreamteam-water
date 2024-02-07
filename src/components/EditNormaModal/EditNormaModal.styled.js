import styled from 'styled-components';

export const StyledDailyNormaContainer = styled.div`
  color: #2f2f2f;
  text-align: left;

  object-fit: contain;

  height: 620px;

  /* background-color: ${props => (props.$isDark ? 'gray' : 'white')}; */

  .theory {
    display: flex;
    flex-direction: column;
  }

  .modal-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 24px;
  }

  .link {
    margin: 0;
  }

  .list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    gap: 14px;

    padding: 0;
    margin-bottom: 12px;

    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2;
    /* color: ${props => (props.$isDark ? 'white' : 'black')}; */
  }

  .calculate {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 16px;
    /* color: ${props => (props.$isDark ? 'white' : 'black')}; */
    margin-bottom: 24px;
  }

  .activity {
    margin-bottom: 8px;
  }

  .calculate div:last-child p {
    margin-bottom: 0;
  }

  .norma-text {
    height: fit-content;
  }

  .form-text {
    /* display: flex; */
    align-items: baseline;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;

    /* color: ${props => (props.$isDark ? 'white' : 'black')}; */
  }

  .formcalc-text {
    margin-bottom: 8px;
    /* color: ${props => (props.$isDark ? 'white' : 'black')}; */
  }

  .form-text.time {
    width: 100%;
  }

  .form-text .formula {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;

    /* color: ${props => (props.$isDark ? 'orange' : '#407bff')}; */
  }

  .save_form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    gap: 24px;
  }

  .norma {
    height: fit-content;
    margin-left: 6px;
  }

  .invisibleText {
    display: block;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;

    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgba(215, 227, 255, 1);

    color: ${props => (props.$isDark ? 'white' : 'rgba(143, 143, 143, 1)')};
    /*  span {
      color: ${props => (props.$isDark ? 'white' : 'var(--primary-color)')};
    }*/
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    color: ${props => (props.$isDark ? 'white' : 'black')};
  }

  label.form-text {
    display: inline-block;

    margin-bottom: 16px;
  }

  .numberKilo {
    width: 100%;
    height: 44px;

    border: 1px solid #d7e3ff;
    border-radius: 6px;
    padding-left: 10px;

    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: #8f8f8f;
  }

  .input::placeholder {
    font-size: 18px;
    /* color: ${props => (props.$isDark ? '#407bff' : '#8f8f8f')}; */
  }

  .weightError {
    border-color: ${props =>
      props.$errors.weightError ? '#EF5050' : '#D7E3FF'};
    color: ${props => (props.$errors.weightError ? '#EF5050' : '#D7E3FF')};
  }

  .activityError {
    border-color: ${props =>
      props.$errors.activityError && !props.$errors.weightError
        ? '#EF5050'
        : '#D7E3FF'};
    color: ${props => (props.$errors.activityError ? '#EF5050' : '#D7E3FF')};
  }

  .drinkError {
    border-color: ${props =>
      props.$errors.drinkError && !props.$errors.activityError
        ? '#EF5050'
        : '#D7E3FF'};
    color: ${props => (props.$errors.drinkError ? '#EF5050' : '#D7E3FF')};
  }

  .numberKilo:focus {
    outline: none;
  }

  .water {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;

    margin-bottom: 16px;
  }

  .norma-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .norma-container .norma {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;

    /* color: ${props => (props.$isDark ? 'orange' : '#407bff')}; */
  }

  .btn-save {
    width: 100%;
    height: 36px;
    padding: 8px, 30px, 8px, 30px;
    border-color: transparent;
    border-radius: 10px;
    background-color: var(--primary-color);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    text-align: center;
    color: rgba(255, 255, 255, 1);
  }

  .errors {
    height: 16px;
    font-size: 16px;
    color: #ef5050;

    margin-bottom: 8px;
  }

  /**************INPUT TYPE RADIO********************* */
  /* для елемента input з type="radio" */
  .custom-radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  /* для элемента label зв'язанного з .custom-radio */
  .custom-radio + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  /* створення в label псевдоелемента before з наступними стилями */
  .custom-radio + label::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid rgb(64, 123, 255);
    border-radius: 50%;
    margin: 0px 6px 0px 3px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  /* стилі при наведені курсора на радіо */
  .custom-radio:not(:disabled):not(:checked) + label:hover::before {
    border-color: #b3d7ff;
  }
  /* стилі для активної радіокнопки (при натиснені на неї) */
  .custom-radio:not(:disabled):active + label::before {
    background-color: var(--primary-button-text-color);
    border-color: #b3d7ff;
  }

  /* стилі для радіокнопки, яка знаходиться у фокусі */
  // .custom-radio:focus + label::before {
  //   box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  // }

  /* стилі для радіокнопки, яка знаходиться у фокусі та не знаходиться у стані checked */
  .custom-radio:focus:not(:checked) + label::before {
    border-color: #80bdff;
  }

  /* стилі для радіокнопки, яка знаходиться у стані checked */
  .custom-radio:checked + label::before {
    border-color: ${props =>
      props.$isDark ? 'orange' : 'var(--primary-color'};
    background-color: var(--primary-button-text-color);

    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='3' fill='%23407BFF'/%3E%3C/svg%3E");
    background-size: auto;
  }

  /* стилі для радіокнопки, яка знаходиться у стані disabled */
  .custom-radio:disabled + label::before {
    border-color: ${props => (props.$isDark ? 'black' : 'gray')};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }

  .radio-buttons-container {
    display: flex;
    gap: 24px;
  }

  .form-radio {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    /* color: ${props => (props.$isDark ? 'white' : 'black')}; */
  }

  input[type='text'] {
    /* background-color: ${props => (props.$isDark ? 'gray' : 'white')}; */
    /* color: ${props => (props.$isDark ? 'white' : '#8f8f8f')}; */
  }

  button.btn-save {
    display: block;
    width: 100%;
    height: 44px;

    padding: 10px 30px;

    cursor: pointer;

    &:hover {
      box-shadow: 0px 5px 14px rgba(64, 123, 255, 0.54);
      background-color: #3473fb;
    }

    &:active {
      box-shadow: none;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    .modal-container {
      width: 100%;
    }

    .norma-text {
      width: 70%;
    }

    .list {
      flex-direction: column;
    }

    button.btn-save {
      margin: 0 8px 8px auto;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    .modal-container {
      width: 704px;
    }

    button.btn-save {
      width: 160px;
      margin: 0 8px 8px auto;
    }
  }

  @media screen and (min-width: 1440px) {
    /* height: 548px; */
    button.btn-save {
      width: 160px;
      margin: 0 8px 8px auto;
    }
  }
`;
