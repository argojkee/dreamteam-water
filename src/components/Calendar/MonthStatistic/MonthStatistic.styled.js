import styled from 'styled-components';

export const MonthStatisticlist = styled.div`
  display: flex;
  align-items: start;
  padding-top: 16px;
  flex-wrap: wrap;
  list-style: none;
  gap: 25px;

  p {
    color: #9ebbff;
    font-family: Roboto;
    size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }

  li {
    text-align: center;
    height: 52px;
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

  @media screen and (min-width: 768px) and (max-width: 1439px) {
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

    @media screen and (min-width: 1440px) {
      gap: 22px;
    }
  }
`;
