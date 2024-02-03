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
// import {
//   getCurrentMonth,
//   getCurrentDay,
//   getRegisterDay,
//   getIsMonthDataLoading,
//   getIsDayDataLoading,
//   getDayError,
//   getMonthError,
//   getCurrentPercentage,
//   getCurrentNorm,
// } from '../redux/water/waterSelectors';
// import { useSelector } from 'react-redux';

const MainPage = () => {
  const dispatch = useDispatch();
  // const month = useSelector(getCurrentMonth);
  // const day = useSelector(getCurrentDay);
  // const registerDay = useSelector(getRegisterDay);
  // const isMonthLoading = useSelector(getIsMonthDataLoading);
  // const isDayLoading = useSelector(getIsDayDataLoading);
  // const dayError = useSelector(getDayError);
  // const monthError = useSelector(getMonthError);
  // const percentage = useSelector(getCurrentPercentage);
  // const norma = useSelector(getCurrentNorm);

  useEffect(() => {
    dispatch(getCurrentMonthInfoThunk());
    dispatch(getCurrentDayInfoThunk());
  }, [dispatch]);

  // console.log(month);
  // console.log(monthError);

  // console.log(dayError);

  // console.log(isDayLoading);

  // console.log(isMonthLoading);

  // console.log(registerDay);

  // console.log(day);
  // console.log(percentage);
  // console.log(norma);

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
