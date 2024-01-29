import { BackgroundContainer,
  ContentContainer,
  TrackerBlock,
  TrackerTitle,
  TrackerSubtitle,
  BenefitsListTitle,
  BenefitsList,
  BenefitItem,
  BenefitItemIcon,
  BenefitItemText,
  TrackerButton,
  TrackerButtonText,
  WhyDrinkWaterContainer,
  WhyDrinkWaterTitle,
  WhyDrinkWaterList,
  WhyDrinkWaterListItem,
  WhyDrinkWaterListItemIcon} from './HomePage.styled';
import settingIcon from '../homepageimages/Setting.svg'; 
import pointIcon from '../homepageimages/point.svg'; 
import StatisticsIcon from '../homepageimages/Statistics.svg'; 
import CalendarIcon from '../homepageimages/Calendar.svg';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (
    <>
      <BackgroundContainer>
      <ContentContainer>
        <TrackerBlock>
        <TrackerTitle>Water consumption tracker</TrackerTitle>
        <TrackerSubtitle>Record daily water intake and track</TrackerSubtitle>
        <BenefitsListTitle>Tracker Benefits</BenefitsListTitle>
<BenefitsList>
  <BenefitItem>
  <BenefitItemIcon src={CalendarIcon} alt="CalendarIcon" width={40} height={40} />
    <BenefitItemText>Habit drive</BenefitItemText>
  </BenefitItem>
  <BenefitItem>
  <BenefitItemIcon src={StatisticsIcon} alt="StatisticsIcon" width={40} height={40} />
    <BenefitItemText>View statistics</BenefitItemText>
  </BenefitItem>
  <BenefitItem>
  <BenefitItemIcon src={settingIcon} alt="Setting Icon" width={40} height={40} />
    <BenefitItemText>Personal rate setting</BenefitItemText>
  </BenefitItem>
</BenefitsList>
      <TrackerButton as={Link} to="/dreamteam-water/register">
      <TrackerButtonText>Try tracker</TrackerButtonText>
      </TrackerButton>
        </TrackerBlock>
        <WhyDrinkWaterContainer>
        <WhyDrinkWaterTitle>Why drink water</WhyDrinkWaterTitle>
      <WhyDrinkWaterList>
        <WhyDrinkWaterListItem>
        <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
          Supply of nutrients to all organs
          </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem> 
          <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8}/>
          Providing oxygen to the lungs
           </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem> 
          <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
          Maintaining the work of the heart
          </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem> 
          <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
          Release of processed substances
          </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem>
        <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
        Ensuring the stability of the internal environment
        </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem>
        <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
        Maintaining within the normal temperature
        </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem> <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
        Maintaining an immune system capable of resisting disease
        </WhyDrinkWaterListItem>
      </WhyDrinkWaterList>
        </WhyDrinkWaterContainer>
      </ContentContainer>
      </BackgroundContainer>
    </>
  );
};

export default HomePage;