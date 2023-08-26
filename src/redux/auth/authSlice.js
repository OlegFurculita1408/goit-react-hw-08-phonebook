import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './operations';



const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  isRefreshing: false,
};

const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload;
  state.token = payload.token;
  state.isAuth = true;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuth = true;
};

const handleFulfilledLogout = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isAuth = false;
};

const handlePendingRefresh = (state, actions) => {
  state.isRefreshing = true;
};

const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isAuth = true;
  state.isRefreshing = false;
};

const handleRejectedRefresh = (state, action) => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(login.fulfilled, handleFulfilledLogin)
      .addCase(refresh.pending, handlePendingRefresh)
      .addCase(refresh.fulfilled, handleFulfilledRefresh)
      .addCase(refresh.rejected, handleRejectedRefresh)
      .addCase(logout.fulfilled, handleFulfilledLogout);
  },
});
export const authReducer = authSlice.reducer;
