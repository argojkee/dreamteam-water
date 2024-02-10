import styled from 'styled-components';

import OnlyBottleMobile1 from '../../../images/signIn-signUp/bottle/onlyBottle/mobile/mobile_onlybottle@1x.png';
import OnlyBottleMobile2 from '../../../images/signIn-signUp/bottle/onlyBottle/mobile/mobile_onlybottle@2x.png';

import OnlyBottleTablet1 from '../../../images/signIn-signUp/bottle/onlyBottle/tablet/tablet_onlybottle@1x.png';
import OnlyBottleTablet2 from '../../../images/signIn-signUp/bottle/onlyBottle/tablet/tablet_onlybottle@2x.png';

import OnlyBottleDesktop1 from '../../../images/signIn-signUp/bottle/onlyBottle/desktop/desktop_onlybottle@1x.png';
import OnlyBottleDesktop2 from '../../../images/signIn-signUp/bottle/onlyBottle/desktop/desktop_onlybottle@1x.png';

export const BottleStyles = styled.div`
  width: 50%;
  height: 300px;

  .bottleContainer {
    width: 100%;
    height: 100%;

    background-size: cover;

    background-position: center;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 81px;
    height: 181px;

    margin: 0 auto 0 auto;

    .bottleContainer {
      background-image: url(${OnlyBottleMobile1});
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      .bottleContainer {
        background-image: url(${OnlyBottleMobile2});
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 150px;
    height: 334px;

    margin: 38px auto 38px 15%;

    .bottleContainer {
      background-image: url(${OnlyBottleTablet1});
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      .bottleContainer {
        background-image: url(${OnlyBottleTablet2});
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 213px;
    height: 474px;

    margin-top: 15px;

    background-size: contain;

    .bottleContainer {
      background-image: url(${OnlyBottleDesktop1});
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      .bottleContainer {
        background-image: url(${OnlyBottleDesktop2});
      }
    }
  }
`;

