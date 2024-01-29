import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

export const editDailyNorm = createAsyncThunk(
  'auth/editDailyNorm',
  async (data, { rejectWithValue }) => {
    try {
      const {
        data: { norm },
      } = await axios.patch('/water/norm', data);

      toastSuccess('Deleted successful ');
      return norm;
    } catch (error) {
      toastError('Something went wrong');
      return rejectWithValue('Something went wrong');
    }
  }
);
