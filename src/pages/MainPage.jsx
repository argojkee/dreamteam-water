import Container from 'components/Container/Container';
import DailyNorm from 'components/DailyNorm/DailyNorm';
import { MainPageStyles } from './pageStyles/MainPageStyles.styled';
import MonthStatsTable from 'components/Calendar/MonthStatsTable';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList';
import {
  getCurrentMonthInfoThunk,
  getCurrentDayInfoThunk,
} from '../redux/water/waterFunctions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentMonthInfoThunk());
    dispatch(getCurrentDayInfoThunk());
  }, [dispatch]);

  return (
    <main>
      <MainPageStyles>
        <Container>
          <div className="main-container">
            <div className="left-side">
              <DailyNorm />
              <WaterRatioPanel></WaterRatioPanel>
            </div>
            <div className="right-side">
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
