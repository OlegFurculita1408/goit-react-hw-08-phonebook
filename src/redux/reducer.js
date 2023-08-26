import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';
import { rootReducer } from './root/rootSlice';



export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
  root: rootReducer,
});
