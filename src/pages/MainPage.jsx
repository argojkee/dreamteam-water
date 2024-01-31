import Container from 'components/Container/Container';
import DailyNorm from 'components/DailyNorm/DailyNorm';
import { MainPageStyles } from './pageStyles/MainPageStyles.styled';
import MonthStatsTable from 'components/Calendar/MonthStatsTable';

const MainPage = () => {
  return (
    <main>
      <MainPageStyles>
        <Container>
          <div className="main-container">
            <div className="left-side">
              <DailyNorm />
              <div className="status-bar"> Status bar</div>
            </div>
            <div className="right-side">
              <div className="today">Today</div>
              <MonthStatsTable/>
            </div>
          </div>
        </Container>
      </MainPageStyles>
    </main>
  );
};

export default MainPage;
