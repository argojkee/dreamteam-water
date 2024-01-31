import styled from "styled-components";

import BackMobile1 from '../../../images/signIn-signUp/back/mobile/back_mobile@1x.png';
import BackMobile2 from '../../../images/signIn-signUp/back/mobile/back_mobile@2x.png';

import BackTablet1 from '../../../images/signIn-signUp/back/tablet/back_tablet@1x.png';
import BackTablet2 from '../../../images/signIn-signUp/back/tablet/back_tablet@2x.png';

import BackDesk1 from '../../../images/signIn-signUp/back/desktop/back__desktop@1x.png';
import BackDesk2 from '../../../images/signIn-signUp/back/desktop/back__desktop@2x.png';


// 'FormContainer' get props  automatic from 'ContainerFormStyle' if you send them.
const Section = styled.section`

width: 100vw;

background-size: cover;

@media screen and (min-width: 320px) and (max-width: 767px) { 
  background: url(${BackMobile1});
  background-size: cover;
  @media (min-device-pixel-ratio: 2),(min-resolution: 192dpi),(min-resolution: 2dppx) {
    background: url(${BackMobile2});
    background-size: cover;
  }
}

@media screen and (min-width: 768px) and (max-width: 1440px) { 
 
  background: url(${BackTablet1});
  background-size: cover;
  @media (min-device-pixel-ratio: 2),(min-resolution: 192dpi),(min-resolution: 2dppx) {
    background: url(${BackTablet2});
    background-size: cover;
  }
}

@media screen and (min-width: 768px) and (max-width: 1440px) { 
  
  background: url(${BackDesk1});
  background-size: cover;
  @media (min-device-pixel-ratio: 2),(min-resolution: 192dpi),(min-resolution: 2dppx) {
    background: url(${BackDesk2});
    background-size: cover;
  }
}
  
`;

const Styles = (props) => {

  return( 
    
      props.$section ? <Section {...props}/> : ''
     
  )
};

export default Styles;