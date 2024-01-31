import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentMonthAPI } from '../../API/Water/getCurrentMonth';

//санка для отримання даних по воді за поточний місяць
export const getCurrentMonthThunk = createAsyncThunk(
  'water/get',
  async (_, thunkAPI) => {
    try {
      const currentMonth = await getCurrentMonthAPI();
      return currentMonth; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);