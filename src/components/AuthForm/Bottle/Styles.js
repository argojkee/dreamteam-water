import styled from 'styled-components';

import BottleMobile1 from '../../../images/signIn-signUp/bottle/mobile/bottle_mobile@1x.png';
// import BottleMobile2 from '../../../images/signIn-signUp/bottle/mobile/bottle_mobile@2x.png';

// import BottleTablet1 from '../../../images/signIn-signUp/bottle/tablet/bottle_tablet@1x.png';
// import BottleTablet2 from '../../../images/signIn-signUp/bottle/tablet/bottle_tablet@2x.png';

// import BottleDesk1 from '../../../images/signIn-signUp/bottle/desktop/bottle_desktop@1x.png';
// import BottleDesk2 from '../../../images/signIn-signUp/bottle/desktop/bottle_desktop@2x.png';

// 'FormContainer' get props  automatic from 'ContainerFormStyle' if you send them.
const Div = styled.div`
  width: ${props => props.width || '50%'};
  height: ${props => props.height || '300px'};

  background-size: cover;

  background-image: url(${BottleMobile1});
`;

const Styles = props => {
  return <>{props.$div ? <Div {...props} /> : ''}</>;
};

export default Styles;
