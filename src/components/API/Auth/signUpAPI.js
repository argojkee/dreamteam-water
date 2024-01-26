import { createAsyncThunk } from "@reduxjs/toolkit";

const signUpAPI = createAsyncThunk(
  'signUp/signUpAPI', 
  
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      toastSuccess('Registration successful. Welcome');
      return data;
    } catch (error) {
      toastError('Something went wrong. Please try again or log in');
      return rejectWithValue(error.message);
    }
  }
);

export default signUpAPI

