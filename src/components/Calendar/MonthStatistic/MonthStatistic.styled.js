import styled from 'styled-components';

export const MonthStatisticlist = styled.div`
  display: flex;
  align-items: start;
  padding-top: 16px;
  flex-wrap: wrap;
  list-style: none;
  gap: 25px;
 
   p {
    color: #9EBBFF;
    font-family: Roboto;
    size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }

  li {
    text-align: center;
    height: 52px;
  }

  button {
    border: none;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2f2f2f;
    width: 32px;
    height: 32px;
    padding: 7px;
    cursor: pointer;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 1, 25;
    border-radius: 50%;

    &[data-fulfilled='false'] {
      border: 1px solid #ff9d43;
    }

      &:disabled {
       border: none;
       cursor: auto;
  }
}
  @media screen and (min-width: 320px) and (max-width: 767px) {

    p {
    size: 10px;
    line-height: 1.6;
    }

    li {
      width: 32px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {

    gap: 34px;

    p {
    size: 13px;
    line-height: 1.53;
  } 
  }

  @media screen and (min-width: 768px) {
    li {
    width: 34px;
  }
    button {
    width: 34px;
    height: 34px;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 22px;
  }
}`;