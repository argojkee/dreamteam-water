import styled from 'styled-components';

export const StyledDailyNormaContainer = styled.div`
  color: rgba(47, 47, 47, 1);
  text-align: left;
  font-family: Roboto;

  ul {
    list-style: none;
  }

  h1 {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2;

    margin-bottom: 24px;
  }

  .form-text {
    display: flex;
    align-items: baseline;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }

  .form-text span {
    font-size: 18px;
    font-weight: 400;
    line-height: 0.75;

    color: rgba(64, 123, 255, 1);
  }

  .invisibleText {
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
      color: rgba(64, 123, 255, 1);
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

    border-width: 1px;
    border-color: rgba(215, 227, 255, 1);
    border-style: solid;
    border-radius: 6px;
    padding-left: 10px;
    margin-top: 8px;

    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: rgba(64, 123, 255, 1);
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
  }

  .btn-save {
    width: 100%;
    height: 36px;
    padding: 8px, 30px, 8px, 30px;
    border-color: transparent;
    border-radius: 10px;
    background-color: rgba(64, 123, 255, 1);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;

    text-align: center;
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 767px) {
    /* height: 290px; */
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    /* height: 418px; */
  }

  @media screen and (min-width: 1280px) {
    /* height: 548px; */
  }
`;
