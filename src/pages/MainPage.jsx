import Container from 'components/Container/Container';
import DailyNorm from 'components/DailyNorm/DailyNorm';
import { MainPageStyles } from './pageStyles/MainPageStyles.styled';
import MonthStatsTable from 'components/Calendar/MonthStatsTable';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';

const MainPage = () => {
  return (
    <main>
      <MainPageStyles>
        <Container>
          <div className="main-container">
            <div className="left-side">
              <DailyNorm />
              {/* <div className="status-bar"> Status bar</div> */}
              <WaterRatioPanel></WaterRatioPanel>
            </div>
            <div className="right-side">
              {/* <div className="today">Today</div> */}
              <TodayWaterList></TodayWaterList>
              <MonthStatsTable />
            </div>
          </div>
        </Container>
      </MainPageStyles>
    </main>
  );
};

export default MainPage;
