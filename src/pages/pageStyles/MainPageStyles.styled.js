import styled from 'styled-components';

export const MainPageStyles = styled.section`
  .main-container {
    width: 100%;
    display: flex;
  }

  @media screen and (max-width: 767px) {
    .left-side {
      height: 504px;
      width: 100%;
    }
  }

  @media screen and (max-width: 1279px) {
    .main-container {
      flex-direction: column;
    }

    .left-side {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .left-side {
      height: 548px;
      width: 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    .left-side {
      height: 680px;
    }
  }
`;
