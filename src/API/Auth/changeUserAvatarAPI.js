import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastSuccess, toastError } from 'services/toastNotification';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

export const changeUserAvatarAPI = createAsyncThunk(
  'auth/changeUserAvatarAPI',
  async (formData, { rejectWithValue }) => {
    console.log(formData);
    try {
      await axios.patch('/users/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toastSuccess('Avatar changed successful ');
      // console.log(result);
    } catch (error) {
      toastError('Something went wrong');
      console.log(error.message);
      return rejectWithValue('Something went wrong');
    }
  }
);
