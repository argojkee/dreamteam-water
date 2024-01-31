import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

export const fetchUserData = createAsyncThunk(
  'auth/userData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/info');
      return data;
    } catch (error) {
      toastError('Something went wrong');
      return rejectWithValue('Something went wrong');
    }
  }
);

export const changeUserData = createAsyncThunk(
  'auth/changeUserData',
  async (user, { rejectWithValue }) => {
    try {
      await axios.patch('/users/info', user);
      toastSuccess('User info changed successful ');
      const { data } = await axios.get('/users/info');
      return data;
    } catch (error) {
      toastError('Invalid password');
      return rejectWithValue('Something went wrong');
    }
  }
);
