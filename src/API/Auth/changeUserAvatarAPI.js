import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastSuccess, toastError } from 'services/toastNotification';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

export const changeUserAvatarAPI = createAsyncThunk(
  'auth/changeUserAvatarAPI',
  async (file, { rejectWithValue }) => {
    try {
      const result = await axios.patch('/users/avatars', file);
      console.log('hello');
      toastSuccess('Deleted successful ');
      console.log(result);
    } catch (error) {
      toastError('Something went wrong');
      console.log(error.message);
      return rejectWithValue('Something went wrong');
    }
  }
);
