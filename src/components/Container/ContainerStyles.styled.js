import styled from 'styled-components';

export const ContainerStyles = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 319px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }

  @media screen and (min-width: 320px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
