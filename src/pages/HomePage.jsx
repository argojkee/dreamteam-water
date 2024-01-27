import { BackgroundContainer} from './HomePage.styled';
import settingIcon from '../homepageimages/Setting.svg'; 
import StatisticsIcon from '../homepageimages/Statistics.svg'; 
import CalendarIcon from '../homepageimages/Calendar.svg'; 

const HomePage = () => {
  return (
    <>
      <BackgroundContainer />
      <div>
        <div>
        <h1>Water consumption tracker</h1>
        <p>Record daily water intake and track</p>
<ul>
  <li>
  <img src={CalendarIcon} alt="CalendarIcon" width={40} height={40} />
    <p>Habit drive</p>
  </li>
  <li>
  <img src={StatisticsIcon} alt="StatisticsIcon" width={40} height={40} />
    <p>View statistics</p>
  </li>
  <li>
  <img src={settingIcon} alt="Setting Icon" width={40} height={40} />
    <p>Personal rate setting</p>
  </li>
</ul>
      <button>Try tracker</button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default HomePage;