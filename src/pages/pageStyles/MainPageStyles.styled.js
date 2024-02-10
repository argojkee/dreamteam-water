import styled from 'styled-components';

import Back2Mobile1 from '../../images/signIn-signUp/back/mobile/back2_mobile@1x.png';
import Back2Mobile2 from '../../images/signIn-signUp/back/mobile/back2_mobile@2x.png';

import BackMobile1 from '../../images/main-bg/back_mobile@1x.png';
import BackMobile2 from '../../images/main-bg/back_mobile@2x.png';

import Back2Tablet1 from '../../images/signIn-signUp/back/tablet/back2_tablet@1x.png';
import Back2Tablet2 from '../../images/signIn-signUp/back/tablet/back2_tablet@2x.png';

import BackTablet1 from '../../images/main-bg/back_tablet@1x.png';
import BackTablet2 from '../../images/main-bg/back_tablet@2x.png';

import Back2Desktop1 from '../../images/signIn-signUp/back/desktop/back2_desktop@1x.png';
import Back2Desktop2 from '../../images/signIn-signUp/back/desktop/back2_desktop@2x.png';

import BackDesktop1 from '../../images/main-bg/back_tablet@1x.png';
import BackDesktop2 from '../../images/main-bg/back_tablet@2x.png';

export const MainPageStyles = styled.section`
  min-height: 100vh;
  background-color: ${props =>
    props.$isDark ? 'var(--dark-bg-color)' : 'var(--white-color)'};
  .main-container {
    width: 100%;
    display: flex;
  }

  .right-side {
    border-radius: 10px;
    background: ${props =>
      props.$isDark
        ? 'rgba(85, 85, 85, 0.7)'
        : 'var(--second-background-color)'};
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  }

  .status-bar {
    background-color: var(--second-background-color);
  }

  @media screen and (max-width: 767px) {
    padding-top: 88px;
    padding-bottom: 40px;
    .left-side {
      height: 504px;
      width: 100%;
      padding-bottom: 40px;
    }

    .right-side {
      padding: 24px 8px;
    }

    .today {
      width: 100%;
      height: 258px;
      background-color: gray;
    }

    background: url(${BackMobile1}), url(${Back2Mobile1});
    background-repeat: no-repeat no-repeat;
    background-size: contain ${props => props.$bottleSize.width * 2.5}px;
    background-position: center,
      ${props => props.$bottleSize.x - props.$bottleSize.width / 1.3}px
        ${props => props.$bottleSize.y + props.$bottleSize.height / 2}px;
    background-color: ${props =>
      props.$isDark ? 'var(--dark-bg-color)' : 'var(--white-color)'};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${BackMobile2}), url(${Back2Mobile2});
      background-repeat: no-repeat no-repeat;
      background-size: contain, ${props => props.$bottleSize.width * 2.5}px;
      background-position: center, ${props => props.$bottleSize.x - props.$bottleSize.width / 1.3}px
          ${props => props.$bottleSize.y + props.$bottleSize.height / 2}px;
      background-color: ${props =>
        props.$isDark ? 'var(--dark-bg-color)' : 'var(--white-color)'};
    }
  }

  @media screen and (max-width: 1439px) {
    .main-container {
      flex-direction: column;
    }

    .left-side {
      width: 100%;
    }

    .right-side {
      width: 100%;
    }

    .status-bar {
      width: 100%;
      height: 134px;
      padding-top: 16px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 80px;
    .left-side {
      height: 548px;
      width: 100%;
    }

    .today {
      width: 100%;
      height: 260px;
    }

    background: url(${BackTablet1}), url(${Back2Tablet1});
    background-repeat: no-repeat;
    background-size: contain, ${props => props.$bottleSize.width * 2.5}px;
    background-position: center,
      ${props => props.$bottleSize.x - props.$bottleSize.width / 1.3}px
        ${props => props.$bottleSize.y + props.$bottleSize.height / 2}px;
    background-color: ${props =>
      props.$isDark ? 'var(--dark-bg-color)' : 'var(--white-color)'};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${BackTablet2}), url(${Back2Tablet2});
      background-repeat: no-repeat;
      background-size: contain, ${props => props.$bottleSize.width * 2.5}px;
      background-position: center, ${props => props.$bottleSize.x - props.$bottleSize.width / 1.3}px
          ${props => props.$bottleSize.y + props.$bottleSize.height / 2}px;
      background-color: ${props =>
        props.$isDark ? 'var(--dark-bg-color)' : 'var(--white-color)'};
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
      padding-top: 24px;
    }

    .today {
      width: 100%;
      height: 260px;
      background-color: gray;
    }
  }

  @media screen and (min-width: 1440px) {
    padding-top: 86px;
    .left-side {
      height: 680px;
      width: 624px;
      padding-right: 32px;
    }

    .right-side {
      width: 592px;
    }

    .today {
      width: 544px;
      height: 260px;
    }

    background: url(${BackDesktop1}), url(${Back2Desktop1});
    background-repeat: no-repeat;
    background-size: cover, ${props => props.$bottleSize.width * 2.5}px;
    background-position: center,
      ${props => props.$bottleSize.x - props.$bottleSize.width / 1.3}px
        ${props => props.$bottleSize.y + props.$bottleSize.height / 2}px;
    background-color: ${props =>
      props.$isDark ? 'var(--dark-bg-color)' : 'var(--white-color)'};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${BackDesktop2}), url(${Back2Desktop2});
      background-repeat: no-repeat;
      background-size: contain, ${props => props.$bottleSize.width * 2.5}px;
      background-position: center, ${props => props.$bottleSize.x - props.$bottleSize.width / 1.3}px
          ${props => props.$bottleSize.y + props.$bottleSize.height / 2}px;
      background-color: ${props =>
        props.$isDark ? 'var(--dark-bg-color)' : 'var(--white-color)'};
    }
  }
`;
