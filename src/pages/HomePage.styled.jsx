import styled from 'styled-components';
import desktop1 from '../homepageimages/Desktop1.png';
import desktop2 from '../homepageimages/Desktop2.png';
import tablet from '../homepageimages/Tablet.png';
import mobile from '../homepageimages/Mobile.png';

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  
  @media (max-width: 767px) {
    background-image: url(${mobile});
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    background-image: url(${tablet});
  }

  @media (min-width: 1200px) {
    /* max-width: 1440px; */
    margin: 0 auto;
    background-image: url(${desktop2}), url(${desktop1});
    background-position: center bottom 125px, center bottom;
  }
`;