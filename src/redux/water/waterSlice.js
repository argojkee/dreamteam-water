import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentMonthInfoThunk,
  getCurrentDayInfoThunk,
  addWaterThunk,
  deleteDrinkThunk,
  editDrinkThunk,
} from './waterFunctions';

const initialState = {
  month: null,
  dayInfo: null,
  registerDay: null,
  monthDataLoading: false,
  dayDataLoading: false,
  monthError: null,
  dayError: false,
  isAddDrinkLoading: false,
  isDeleting: false,
  isEditing: false,
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
      .addCase(getCurrentDayInfoThunk.pending, state => {
        state.dayDataLoading = true;
        state.dayError = false;
      })
      .addCase(getCurrentDayInfoThunk.fulfilled, (state, { payload }) => {
        state.dayDataLoading = false;
        state.dayInfo = { ...payload.dayInfo };
        state.registerDay = payload.startDay;
      })
      .addCase(getCurrentDayInfoThunk.rejected, (state, { payload }) => {
        state.dayDataLoading = false;
        state.dayError = payload;
      })
      .addCase(addWaterThunk.pending, state => {
        state.isAddDrinkLoading = true;
      })
      .addCase(addWaterThunk.fulfilled, (state, { payload }) => {
        state.isAddDrinkLoading = false;
        state.dayInfo = { ...payload };
        console.log({ ...payload });
      })
      .addCase(addWaterThunk.rejected, state => {
        state.isAddDrinkLoading = false;
      })
      .addCase(deleteDrinkThunk.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteDrinkThunk.fulfilled, (state, { payload }) => {
        state.isDeleting = false;
        state.dayInfo = { ...payload };
        console.log(payload);
      })
      .addCase(deleteDrinkThunk.rejected, state => {
        state.isDeleting = false;
      })
      .addCase(editDrinkThunk.pending, state => {
        state.isEditing = true;
      })
      .addCase(editDrinkThunk.fulfilled, (state, { payload }) => {
        state.isEditing = false;
        state.dayInfo = { ...payload };
        console.log(payload);
      })
      .addCase(editDrinkThunk.rejected, state => {
        state.isEditing = false;
      });
  },
});
export default waterSlice.reducer;
