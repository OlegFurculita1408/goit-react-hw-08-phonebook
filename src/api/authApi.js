import {
  clearAuthHeader,
  instanceForContacts,
  setAuthHeader,
  setTokenLocal,
} from './api';

export const fetchRegister = async credentials => {
  const { data } = await instanceForContacts.post('/users/signup', credentials);
  setAuthHeader(data.token);
  setTokenLocal(data.token);
  return data;
};

export const fetchLogIn = async credentials => {
  const { data } = await instanceForContacts.post('users/login', credentials);
  setAuthHeader(data.token);
  setTokenLocal(data.token);
  return data;
};

export const fetchRefresh = async ({ rejectWithValue }) => {
  const persistedToken = localStorage.getItem('token');
  if (persistedToken === null || persistedToken === 'null') {
    return rejectWithValue();
  }
  setAuthHeader(persistedToken);
  const { data } = await instanceForContacts.get('users/current');
  return data;
};

export const fetchLogOut = async () => {
  const data = await instanceForContacts.post('users/logout');
  clearAuthHeader();
  setTokenLocal(null);
  return data;
};
