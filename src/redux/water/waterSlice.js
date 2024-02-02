import { createSlice } from '@reduxjs/toolkit';
import { getCurrentMonthInfoThunk } from './waterFunctions';
import { getCurrentDayInfo } from './waterFunctions';

const initialState = {
  month: null,
  dayInfo: null,
  registerDay: null,
  monthDataLoading: false,
  dayDataLoading: false,
  monthError: null,
  dayError: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,

  extraReducers: builder => {
    builder
      /*****************getCurrentMonth********************/
      .addCase(getCurrentMonthInfoThunk.pending, state => {
        state.monthDataLoading = true;
        state.monthError = false;
        state.month = null;
      })
      .addCase(getCurrentMonthInfoThunk.fulfilled, (state, { payload }) => {
        state.monthDataLoading = false;
        state.month = [...payload];
      })
      .addCase(getCurrentMonthInfoThunk.rejected, (state, { payload }) => {
        state.monthDataLoading = false;
        state.monthError = payload;
      })
      .addCase(getCurrentDayInfo.pending, state => {
        state.dayDataLoading = true;
        state.dayError = false;
      })
      .addCase(getCurrentDayInfo.fulfilled, (state, { payload }) => {
        state.dayDataLoading = false;
        state.dayInfo = { ...payload.dayInfo };
        state.registerDay = payload.startDay;
      })
      .addCase(getCurrentDayInfo.rejected, (state, { payload }) => {
        state.dayDataLoading = false;
        state.dayError = payload;
      });
  },
});
export default waterSlice.reducer;
