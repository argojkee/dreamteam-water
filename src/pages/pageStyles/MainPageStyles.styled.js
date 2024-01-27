import styled from 'styled-components';

export const MainPageStyles = styled.section`
  .main-container {
    width: 100%;
    display: flex;
  }

  .left-side {
    border: 1px solid green;
  }

  .right-side {
    border-radius: 10px;
    background: var(--Secondary-color-2, #ecf2ff);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }

  @media screen and (max-width: 767px) {
    padding-top: 24px;
    padding-bottom: 40px;
    .left-side {
      height: 504px;
      width: 100%;
    }

    .right-side {
      padding: 24px 8px;
    }

    .status-bar {
      width: 100%;
      height: 134px;
      background-color: gray;
    }

    .today {
      width: 100%;
      height: 258px;
      background-color: gray;
    }
  }

  @media screen and (max-width: 1279px) {
    .main-container {
      flex-direction: column;
    }

    .left-side {
      width: 100%;
    }

    .right-side {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .left-side {
      padding-bottom: 40px;
    }

    .right-side {
      padding: 32px 24px;
    }
    .status-bar {
      width: 100%;
      height: 90px;
      background-color: gray;
    }

    .today {
      width: 100%;
      height: 260px;
      background-color: gray;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 44px 16px;
    .left-side {
      height: 548px;
      width: 100%;
    }

    .today {
      width: 100%;
      height: 260px;
      background-color: gray;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 20px;
    .left-side {
      height: 680px;
      width: 624px;
    }

    .right-side {
      width: 592px;
    }

    .today {
      width: 544px;
      height: 260px;
      background-color: gray;
    }
  }
`;
