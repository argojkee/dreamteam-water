import { createSlice } from '@reduxjs/toolkit';
import { getCurrentMonthThunk } from './waterFunctions';

const initialState = {
  waterIsLoading: false,
  month: null,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,

  extraReducers: builder => {
    builder
      /*****************getCurrentMonth********************/
      .addCase(getCurrentMonthThunk.pending, state => {
        state.waterIsLoading = true;
        state.error = false;
        state.month = null;
      })
      .addCase(getCurrentMonthThunk.fulfilled, (state, { payload }) => {
        state.waterIsLoading = false;
        state.month = [...payload];
      })
      .addCase(getCurrentMonthThunk.rejected, (state, { payload }) => {
        state.waterIsLoading = false;
        state.error = payload;
      });
  },
});
export default waterSlice.reducer;
