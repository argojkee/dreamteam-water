import { createSlice } from '@reduxjs/toolkit';
import signInAPI from '../../API/Auth/signInAPI'
import signUpAPI from '../../API/Auth/signUpAPI'

const initialState = {
  user: { name: null, email: null },
  token: null,
  authIsLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    /*****************signIn********************/
      .addCase(signInAPI.pending, (state) => {
        state.authIsLoading = true; 
      })
      .addCase(signInAPI.fulfilled, (state, action) => {

        state.authIsLoading = false; 
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;

      })
      .addCase(signInAPI.rejected, state => {
        state.authIsLoading = false; 
      })
    /*****************end********************/  

    /*****************signUp********************/
      .addCase(signUpAPI.pending, state => {
        state.authIsLoading = true; 
      })
      .addCase(signUpAPI.fulfilled, (state, action) => {

        state.authIsLoading = false; 
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;

      })
      .addCase(signUpAPI.rejected, state => {
        state.authIsLoading = false; 
      })
    /*****************end********************/  
  },
});
export default authSlice.reducer;
