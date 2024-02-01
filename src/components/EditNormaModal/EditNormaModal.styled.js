import styled from 'styled-components';

export const StyledDailyNormaContainer = styled.div`
  :root {
    --primary-text-color: #2f2f2f;
    --secondary-text-color: #407bff;
  }

  color: #2f2f2f;
  text-align: left;
  font-family: Roboto;

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

  .form-text .formula {
    font-size: 18px;
    font-weight: 400;
    line-height: 0.75;

    color: #407bff;
  }

  .invisibleText {
    display: block;

    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;

    margin-top: 12px;
    margin-bottom: 24px;
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
    line-height: 1.1;

    margin-top: 24px;
    margin-bottom: 16px;
  }

  label.form-text {
    display: inline-block;
    margin-right: 24px;
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

  .form-text .norma {
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

    text-align: center;
    color: rgba(255, 255, 255, 1);
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
      width: 0;
      padding: 10px 30px;
      margin-left: auto;
    }
    /* height: 418px; */
  }

  @media screen and (min-width: 1280px) {
    /* height: 548px; */
  }
`;
