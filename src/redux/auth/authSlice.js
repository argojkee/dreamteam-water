import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.registration.pending, state => {})
      .addCase(authOperations.registration.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(authOperations.registration.rejected, state => {})
      .addCase(authOperations.logIn.pending, state => {})
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
      })
      .addCase(authOperations.logIn.rejected, state => {})
      .addCase(authOperations.logOut.pending, state => {})
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(authOperations.logOut.rejected, state => {})
      .addCase(authOperations.fetchCurrentUser.pending, state => {})
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, state => {
        state.token = null;
      });
  },
});
export default authSlice.reducer;
