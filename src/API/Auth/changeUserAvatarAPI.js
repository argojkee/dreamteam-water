import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastSuccess, toastError } from 'services/toastNotification';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

export const changeUserAvatarAPI = createAsyncThunk(
  'auth/changeUserAvatarAPI',
  async (formData, { rejectWithValue }) => {
    try {
      const {
        data: { avatarURL },
      } = await axios.patch('/users/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toastSuccess('Avatar changed successful ');
      return avatarURL;
    } catch (error) {
      toastError('Something went wrong');
      return rejectWithValue('Something went wrong');
    }
  }
);
