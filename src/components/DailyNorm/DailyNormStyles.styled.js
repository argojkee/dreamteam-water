import styled from 'styled-components';
import background from '../../images/main-bg/Bottle-Main-sm.png';

export const DailyNormStyles = styled.div`
  background-image: url(${background});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  .dailyNormaSection {
    width: 164px;
    height: 76px;

    padding: 8px 20px 8px 20px;

    background-color: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(0deg, #ecf2ff, #ecf2ff);
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

    /* width: 28px;
    height: 20px; */

    text-align: left;

    color: rgba(139, 174, 255, 1);
  }

  /* background-image: url('../../images/main-bg/Bottle-Main-sm.png'); */
`;
