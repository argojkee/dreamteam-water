import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMonthInfoAPI } from '../../API/Water/getMonthInfoAPI';
import axios from 'axios';

//санка для отримання даних по воді за поточний місяць
export const getCurrentMonthInfoThunk = createAsyncThunk(
  'water/getMonth',
  async (_, thunkAPI) => {
    try {
      const currentDate = new Date();

      const currentMonth = await getMonthInfoAPI({
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
      });
      return currentMonth; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//санка для получения данных по текущему
export const getCurrentDayInfo = createAsyncThunk(
  'water/getDay',
  async (_, thunkAPI) => {
    try {
      const date = new Date();
      const { data } = await axios.post('water', { date });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
