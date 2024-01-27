import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
  name: 'calendar',
    initialState: {
        selectedMonth: null,   
  },
    reducers: {
    setSelectedMonth: (state, action) => {
          state.selectedMonth = action.payload;
    },
  },
});

export const { setSelectedMonth } = calendarSlice.actions;
export default calendarSlice.reducer;



