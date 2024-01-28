import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/toastNotification';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

const signInAPI = createAsyncThunk(
  'signIn/signInAPI',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);

      // write token to axios parameter
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      toastSuccess('Log in successful. Welcome back ');
      return data;
    } catch (error) {
      toastError(
        'Not valid email or password. Please, try again or register new account'
      );
      return rejectWithValue('Not valid email or password. Please, try again');
    }
  }
);

export default signInAPI;
