import { createSlice } from '@reduxjs/toolkit';
import getCurrentMonthThunk from 'API/Auth/fetchCurrentUserAPI';


const initialState = {
  date: {
    year: Number,
    month: String,
  },
  waterIsLoading: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
      builder
        /*****************getCurrentMonth********************/
        .addCase(getCurrentMonthThunk.pending, state => {
          state.waterIsLoading = true;
        })
        .addCase(getCurrentMonthThunk.fulfilled, (state, { payload }) => {
          state.waterIsLoading = false;
          state.date = { ...payload.date };
        })
        .addCase(getCurrentMonthThunk.rejected, (state, action) => {
          state.waterIsLoading = false;
          state.error = action.payload;
        });
      
  },
});
export default waterSlice.reducer;
