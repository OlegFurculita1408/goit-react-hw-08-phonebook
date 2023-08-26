import axios from 'axios';

export const instanceForContacts = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
})

export const setAuthHeader = token => {
    instanceForContacts.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`;
};

export const setTokenLocal = token => {
  localStorage.setItem('token', token);
};

export const clearAuthHeader = () => {
delete instanceForContacts.defaults.headers.common['Authorization']
};