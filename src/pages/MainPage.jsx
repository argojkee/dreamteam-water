import Calendar from 'components/Calendar/Calendar';
import Container from 'components/Container/Container';
import DailyNorm from 'components/DailyNorm/DailyNorm';
import { MainPageStyles } from './pageStyles/MainPageStyles.styled';

const MainPage = () => {
  return (
    <main>
      <MainPageStyles>
        <Container>
          <div className="main-container">
            <div className="left-side">
              <DailyNorm />
              <div className="statusBar"></div>
            </div>
            <div className="leftSide">
              <div className="today"></div>
              <Calendar />
            </div>
          </div>
        </Container>
      </MainPageStyles>
    </main>
  );
};

export default MainPage;
