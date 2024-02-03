import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMonthInfoAPI } from '../../API/Water/getMonthInfoAPI';
import axios from 'axios';
import { toastError, toastSuccess } from 'services/toastNotification';

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
export const getCurrentDayInfoThunk = createAsyncThunk(
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

//Санка добавления воды
export const addWaterThunk = createAsyncThunk(
  'water/add',
  async (data, thunkAPI) => {
    const { drink, dayId } = data;
    try {
      const { data } = await axios.post(`water/drinks/${dayId}`, drink);
      toastSuccess('Drink has been added successful');
      return data;
    } catch (error) {
      toastError('Sorry, something went wrong. Please, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Санка удаления напитка

export const deleteDrinkThunk = createAsyncThunk(
  'water/delete',
  async (drinkId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`water/drinks/${drinkId}`);
      toastSuccess('Drink has been deleted successful');
      console.log(data);
      return data;
    } catch (error) {
      toastError('Sorry, something went wrong. Please, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Санка редактирования напитка
export const editDrinkThunk = createAsyncThunk(
  'water/edit',
  async (drink, thunkAPI) => {
    const { id, time, ml } = drink;
    try {
      const { data } = await axios.patch(`water/drinks/${id}`, { time, ml });
      toastSuccess('Drink has been edited successful');
      return data;
    } catch (error) {
      toastError('Sorry, something went wrong. Please, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Смена дневной нормы

export const editDailyNorm = createAsyncThunk(
  'auth/editDailyNorm',
  async (norm, { rejectWithValue }) => {
    try {
      const date = new Date();
      const { data } = await axios.patch('/water/norm', {
        date,
        norm,
      });

      toastSuccess('Deleted successful ');
      return data;
    } catch (error) {
      toastError('Something went wrong');
      return rejectWithValue('Something went wrong');
    }
  }
);
