import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    height: 437px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 224px;
  }

  @media screen and (min-width: 1440px) {
    height: 200px;
  }
`;
