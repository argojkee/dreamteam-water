import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError } from 'services/toastNotification';

axios.defaults.baseURL = 'https://dreamteam-water-server.onrender.com/api/';

export default createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { token: currentToken } = getState().auth;

    if (currentToken === null) {
      return rejectWithValue('Without token');
    }

    axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`;
    try {
      const { data: user } = await axios.get('/users/current');

      return user;
    } catch (error) {
      axios.defaults.headers.common.Authorization = '';
      toastError(
        'Auth state is old. Please enter to your personal cabinet again'
      );
      return rejectWithValue(
        'Auth state is old. Please enter to your personal cabinet again'
      );
    }
  }
);
