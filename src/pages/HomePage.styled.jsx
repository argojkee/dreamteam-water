import styled from 'styled-components';
import desktop from '../homepageimages/Desktop.png';
import tablet from '../homepageimages/Tablet.png';
import mobile from '../homepageimages/Mobile.png';
import { Link } from 'react-router-dom';

export const BackgroundContainer = styled.section`
  width: 100vw;
  min-height: 100vh; 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  margin: 0 auto;
  padding: 24px 0 40px 0;
  
  @media (max-width: 767px) {
    background-image: url(${mobile});
    
  }

  @media (min-width: 768px) {
    background-image: url(${tablet});
    padding: 40px 0 50px 0;
  }

  @media (min-width: 1280px) {
    background-image: url(${desktop});
       padding: 80px 0 0 0;
  }
`;


export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1279px){
    align-items: flex-start;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 81px;
    align-items: flex-end;
  }
`;


export const TrackerBlock = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) and (max-width: 1279px){
    width: 100%;
    margin-bottom: 60px;
  }
  @media (min-width: 1280) {
    margin-bottom: 0;
  }
`;

export const TrackerTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.14;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 1.16;
  }
`;

export const TrackerSubtitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const BenefitsListTitle = styled.ul`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 12px;
`;

export const BenefitsList = styled.ul`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BenefitItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  @media (min-width: 768px) and (max-width: 1279px) {
    width: calc((100% - 64px) / 3);
  }
`;

export const BenefitItemIcon = styled.img`
  margin-right: 8px;
`;

export const BenefitItemText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const StyledLink = styled(Link)`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #407BFF;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  width: 100%;
  margin: 0 auto;
  height: 36px;
  text-decoration: none;

  @media (min-width: 768px) {
    width: 336px;
  height: 44px;
  margin: 0
  }

  @media (min-width: 1280px) {
    width: 384px;
  }
`;

export const LinkText = styled.span`
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;



export const WhyDrinkWaterContainer = styled.div`
padding: 24px 16px;
border-radius: 10px;
background: #ECF2FF;
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

@media (min-width: 768px) {
    padding: 32px 24px;
  }
`;

export const WhyDrinkWaterTitle = styled.h2`
font-size: 18px;
font-weight: 500;
line-height: 1.11;
margin-bottom: 12px;
`;

export const WhyDrinkWaterList = styled.ul`
list-style: none; 
 display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
list-style-position: inside; 
`;

export const WhyDrinkWaterListItem = styled.li`
text-indent: -16px;
margin-left: 16px;
`;

export const WhyDrinkWaterListItemIcon = styled.img`
margin-right: 8px;
`;

export const ListText = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 1.25;

`;
