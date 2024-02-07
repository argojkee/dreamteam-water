import styled from 'styled-components';

import BackMobile1 from '../../../images/signIn-signUp/back/mobile/back_mobile@1x.png';
import BackMobile2 from '../../../images/signIn-signUp/back/mobile/back_mobile@2x.png';
import Back2Mobile1 from '../../../images/signIn-signUp/back/mobile/back2_mobile@1x.png';
import Back2Mobile2 from '../../../images/signIn-signUp/back/mobile/back2_mobile@2x.png';

import BackTablet1 from '../../../images/signIn-signUp/back/tablet/back_tablet@1x.png';
import BackTablet2 from '../../../images/signIn-signUp/back/tablet/back_tablet@2x.png';
import Back2Tablet1 from '../../../images/signIn-signUp/back/tablet/back2_tablet@1x.png';
import Back2Tablet2 from '../../../images/signIn-signUp/back/tablet/back2_tablet@2x.png';

import BackDesktop1 from '../../../images/signIn-signUp/back/desktop/back_desktop@1x.png';
import BackDesktop2 from '../../../images/signIn-signUp/back/desktop/back_desktop@2x.png';
import Back2Desktop1 from '../../../images/signIn-signUp/back/desktop/back2_desktop@1x.png';
import Back2Desktop2 from '../../../images/signIn-signUp/back/desktop/back2_desktop@2x.png';

// 'FormContainer' get props  automatic from 'ContainerFormStyle' if you send them.
const Section = styled.section`
  width: 100vw;
  padding-top: 64px;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    background: url(${BackMobile1}), url(${Back2Mobile1});
    background-repeat: no-repeat, no-repeat;
    background-size: cover, ${props => props.$bottleSize.width * 2}px;
    background-position: 0 10px,
      ${props => props.$bottleSize.x - props.$bottleSize.width / 2}px
        ${props => props.$bottleSize.y + props.$bottleSize.height / 1.7}px;
    background-color: ${props => props.$isDark
      ? 'black'
      : `url(${BackMobile1})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${BackMobile2}), url(${Back2Mobile2});
      background-repeat: no-repeat, no-repeat;
      background-size: cover, ${props => props.$bottleSize.width * 2}px;
      background-position: 0 50px,
        ${props => props.$bottleSize.x - props.$bottleSize.width / 2}px
          ${props => props.$bottleSize.y + props.$bottleSize.height / 1.7}px;

      background-color: ${props => props.$isDark
        ? 'black'
        : `url(${BackMobile1})`};
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background: url(${BackTablet1}), url(${Back2Tablet1});
    background-repeat: no-repeat, no-repeat;
    background-size: cover, ${props => props.$bottleSize.width * 2}px;
    background-position: 0 3px,
      ${props => props.$bottleSize.x - props.$bottleSize.width / 2}px
        ${props => props.$bottleSize.y + props.$bottleSize.height / 1.7}px;
    background-color: ${props => props.$isDark
      ? 'black'
      : `url(${BackMobile1})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${BackTablet2}), url(${Back2Tablet2});
      background-repeat: no-repeat, no-repeat;
      background-size: cover, ${props => props.$bottleSize.width * 2}px;
      background-position: 0 3px,
        ${props => props.$bottleSize.x - props.$bottleSize.width / 2}px
          ${props => props.$bottleSize.y + props.$bottleSize.height / 1.7}px;
      background-color: ${props => props.$isDark
      ? 'black'
      : `url(${BackMobile1})`};
    }
  }

  @media screen and (min-width: 1440px) {
    background: url(${BackDesktop1}), url(${Back2Desktop1});
    background-repeat: no-repeat, no-repeat;
    background-size: contain, ${props => props.$bottleSize.width * 2}px;
    background-position: 0 10px,
      ${props => props.$bottleSize.x - props.$bottleSize.width / 2}px
        ${props => props.$bottleSize.y + props.$bottleSize.height / 1.7}px;
    background-color: ${props => props.$isDark
      ? 'black'
      : `url(${BackMobile1})`};

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${BackDesktop2}), url(${Back2Desktop2});
      background-repeat: no-repeat, no-repeat;
      background-size: contain, ${props => props.$bottleSize.width * 2}px;
      background-position: 0 10px,
        ${props => props.$bottleSize.x - props.$bottleSize.width / 2}px
          ${props => props.$bottleSize.y + props.$bottleSize.height / 1.7}px;
      background-color: ${props => props.$isDark
        ? 'black'
        : `url(${BackMobile1})`};
    }
  }
`;

const Styles = props => {
  return props.$section ? <Section {...props} /> : '';
};

export default Styles;
