import { createSlice } from '@reduxjs/toolkit';
import logOutAPI from 'API/Auth/logOutAPI';
import signInAPI from '../../API/Auth/signInAPI';
import signUpAPI from '../../API/Auth/signUpAPI';
import fetchCurrentUserAPI from 'API/Auth/fetchCurrentUserAPI';
import editDailyNorm from 'API/Auth/editDailyNorm';

const initialState = {
  user: { name: null, email: null, avatar: null, norm: null, id: null },
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
      .addCase(signInAPI.fulfilled, (state, { payload }) => {
        state.authIsLoading = false;
        state.user = { ...payload.user };
        state.token = payload.token;
      })
      /*****************end********************/

      /*****************signUp********************/
      .addCase(signUpAPI.pending, state => {
        state.authIsLoading = true;
      })
      .addCase(signUpAPI.fulfilled, state => {
        state.authIsLoading = false;
      })
      /*****************end********************/

      /****************log out */
      .addCase(logOutAPI.fulfilled, state => {
        state.authIsLoading = false;
        state.user = { ...initialState.user };
        state.token = null;
      })
      .addCase(logOutAPI.pending, state => {
        state.authIsLoading = true;
      })
      .addCase(logOutAPI.rejected, state => {
        state.authIsLoading = false;
        state.user = { ...initialState.user };
        state.token = null;
      })
      /******************************fetch current user */

      .addCase(fetchCurrentUserAPI.fulfilled, (state, { payload }) => {
        state.authIsLoading = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.avatar = payload.avatarURL;
        state.user.norm = payload.norm;
        state.user.id = payload._id;
      })
      .addCase(fetchCurrentUserAPI.pending, state => {
        state.authIsLoading = true;
      })
      .addCase(fetchCurrentUserAPI.rejected, state => {
        state.authIsLoading = false;
        state.user = { ...initialState.user };
        state.token = null;
      })

      /*******************edit daily norm */

      .addCase(editDailyNorm.fulfilled, (state, { payload }) => {
        state.user.norm = payload;
      });
    // .addCase(editDailyNorm.pending, state => {})
    // .addCase(editDailyNorm.rejected, state => {});
  },
});
export default authSlice.reducer;
