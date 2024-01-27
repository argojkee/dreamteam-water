import { createSlice } from '@reduxjs/toolkit';
import logOutAPI from 'API/Auth/logOutAPI';
import signInAPI from '../../API/Auth/signInAPI';
import signUpAPI from '../../API/Auth/signUpAPI';
import fetchCurrentUserAPI from 'API/Auth/fetchCurrentUserAPI';

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
      .addCase(signInAPI.pending, state => {
        state.authIsLoading = true;
      })
      .addCase(signInAPI.fulfilled, (state, action) => {
        state.authIsLoading = false;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
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
        console.log(action);
      })
      /*****************end********************/

      /****************log out */
      .addCase(logOutAPI.fulfilled, state => {
        state.authIsLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(logOutAPI.pending, (state, action) => {
        state.authIsLoading = true;
      })
      .addCase(logOutAPI.rejected, (state, action) => {
        state.authIsLoading = false;
      })
      /******************************fetch current user */

      .addCase(fetchCurrentUserAPI.fulfilled, (state, { payload }) => {
        state.authIsLoading = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
      })
      .addCase(fetchCurrentUserAPI.pending, state => {
        state.authIsLoading = true;
      })
      .addCase(fetchCurrentUserAPI.rejected, state => {
        state.authIsLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
      });
  },
});
export default authSlice.reducer;
