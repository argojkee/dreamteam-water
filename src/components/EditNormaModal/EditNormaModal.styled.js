import styled from 'styled-components';

export const StyledDailyNormaContainer = styled.div`
  :root {
    --primary-text-color: #2f2f2f;
    --secondary-text-color: #407bff;
  }

  color: #2f2f2f;
  text-align: left;

  object-fit: contain;
  overflow-y: auto;
  height: 500px;
  padding-top: 8px;

  .list {
    display: flex;
    flex-wrap: wrap;

    padding: 0;
    margin: 0;

    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
  }

  li:last-child {
    margin-bottom: 12px;
  }

  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2;

    margin-bottom: 24px;
  }

  .form-text {
    /* display: flex; */
    align-items: baseline;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }

  .form-text.time {
    width: 100%;
  }

  .form-text .formula {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.33;

    color: #407bff;
  }

  .invisibleText {
    display: block;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;

    margin-top: 12px;

    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgba(215, 227, 255, 1);

    color: rgba(143, 143, 143, 1);

    span {
      color: #407bff;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    margin-top: 24px;
    margin-bottom: 16px;
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
    margin-top: 8px;

    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: #8f8f8f;
  }

  h2 .water {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  .norma-container {
    display: flex;
    align-items: center;
  }

  .norma-container .norma {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;

    color: #407bff;
  }

  .btn-save {
    width: 100%;
    height: 36px;
    padding: 8px, 30px, 8px, 30px;
    border-color: transparent;
    border-radius: 10px;
    background-color: #407bff;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    margin: 24px 0 0 0;
    text-align: center;
    color: rgba(255, 255, 255, 1);
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
    background-color: #ffffff;
    border-color: #b3d7ff;
  }

  /* стилі для радіокнопки, яка знаходиться у фокусі */
  .custom-radio:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  /* стилі для радіокнопки, яка знаходиться у фокусі та не знаходиться у стані checked */
  .custom-radio:focus:not(:checked) + label::before {
    border-color: #80bdff;
  }

  /* стилі для радіокнопки, яка знаходиться у стані checked */
  .custom-radio:checked + label::before {
    border-color: #407bff;
    background-color: #ffffff;

    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='3' fill='%23407BFF'/%3E%3C/svg%3E");
  }

  .radio-buttons-container {
    display: flex;
    gap: 24px;
  }

  .form-radio {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }

  input[type='text'] {
    color: #407bff;
  }

  /* @media screen and (max-width: 767px) {
    height: 290px;
  } */
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .container {
      max-width: 768px;
    }

    button.btn-save {
      display: block;
      /* width: 0; */
      padding: 10px 30px;
      margin-left: auto;
    }
    /* height: 418px; */
  }

  @media screen and (min-width: 1280px) {
    /* height: 548px; */
  }
`;
