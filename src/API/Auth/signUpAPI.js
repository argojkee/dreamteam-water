import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastError, toastSuccess } from 'services/toastNotification';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const signUpAPI = createAsyncThunk(
  'signUp/signUpAPI', 
  
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);

      // write token to axios parameter
      axios.defaults.headers.common.Authorization = `Bearer ${data}`;

      toastSuccess('Registration successful. Welcome');
      return data;
    } catch (error) {
      toastError('Something went wrong. Please try again or log in');
      return rejectWithValue(error.message);
    }
  }
);

export default signUpAPI;