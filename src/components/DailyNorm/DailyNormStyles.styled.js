import styled from 'styled-components';

import background from '../../images/main-bg/Bottle-Main-lg.png';

export const DailyNormStyles = styled.div`
  background-image: url(${background});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  .dailyNormaSection {
    padding: 8px 20px 8px 20px;

    box-shadow: rgba(158, 187, 255, 0.12);
    border: 1px solid rgba(236, 242, 255, 1);
    border-radius: 10px;
  }

  h2 {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    text-align: left;
  }

  .button-info-container {
    display: flex;
    flex-direction: row;
  }

  span {
    font-family: Roboto;
    font-size: 22px;
    font-weight: 700;
    line-height: 1;

    text-align: left;

    color: rgba(64, 123, 255, 1);
  }

  button {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;

    border: none;
    background-color: inherit;

    margin-left: 12px;
    text-align: left;

    color: rgba(139, 174, 255, 1);
  }

  /* background-image: url('../../images/main-bg/Bottle-Main-sm.png'); */

  @media screen and (max-width: 767px) {
    height: 290px;
    background-image: url(${background});
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 418px;
    background-image: url(${background});
  }

  @media screen and (min-width: 1280px) {
    height: 548px;
    background-image: url(${background});
  }
`;
