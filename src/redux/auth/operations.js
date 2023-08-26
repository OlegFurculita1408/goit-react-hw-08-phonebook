import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchLogIn,
  fetchLogOut,
  fetchRefresh,
  fetchRegister,
} from 'api/authApi';



export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      return await fetchRegister(credentials);
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue('Email or password error');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await fetchLogIn(credentials);
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue('Email or password error');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    return await fetchRefresh(thunkAPI);
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await fetchLogOut();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
