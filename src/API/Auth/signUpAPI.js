import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

const signUpAPI = createAsyncThunk(
  'signUp/signUpAPI',

  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', user);

      // write token to axios parameter
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      toastSuccess(
        'We have sent email verification on your email. Please, check it'
      );
      return data;
    } catch (error) {
      toastError('Something went wrong. Please try again or log in');
      return rejectWithValue(error.message);
    }
  }
);

export default signUpAPI;
