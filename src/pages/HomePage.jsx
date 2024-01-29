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
  StyledLink,
  LinkText,
  WhyDrinkWaterContainer,
  WhyDrinkWaterTitle,
  WhyDrinkWaterList,
  WhyDrinkWaterListItem,
  WhyDrinkWaterListItemIcon,
  ListText} from './HomePage.styled';
import settingIcon from '../homepageimages/Setting.svg'; 
import pointIcon from '../homepageimages/point.svg'; 
import StatisticsIcon from '../homepageimages/Statistics.svg'; 
import CalendarIcon from '../homepageimages/Calendar.svg';
import Container from 'components/Container/Container';

const HomePage = () => {
  return (
    <>
      <BackgroundContainer>
<Container>
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

      <StyledLink to="/registration"> 
      <LinkText>Try tracker</LinkText>
      </StyledLink>

        </TrackerBlock>

        <WhyDrinkWaterContainer>

        <WhyDrinkWaterTitle>Why drink water</WhyDrinkWaterTitle>
      <WhyDrinkWaterList>
        <WhyDrinkWaterListItem>
        <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
          <ListText>Supply of nutrients to all organs</ListText>
          </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem> 
          <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8}/>
          <ListText>Providing oxygen to the lungs</ListText>
           </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem> 
          <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
          <ListText>Maintaining the work of the heart</ListText>
          </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem> 
          <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
          <ListText>Release of processed substances</ListText>
          </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem>
        <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
        <ListText>Ensuring the stability of the internal environment</ListText>
        </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem>
        <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
        <ListText>Maintaining within the normal temperature</ListText>
        </WhyDrinkWaterListItem>
        <WhyDrinkWaterListItem> <WhyDrinkWaterListItemIcon src={pointIcon} alt="Point Icon" width={8} height={8} />
        <ListText>Maintaining an immune system capable of resisting disease</ListText>
        </WhyDrinkWaterListItem>
      </WhyDrinkWaterList>

        </WhyDrinkWaterContainer>

      </ContentContainer>
      </Container>
      </BackgroundContainer>
    </>
  );
};

export default HomePage;