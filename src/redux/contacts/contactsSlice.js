import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  handleFulfilledAddContact,
  handleFulfilledDeleteContact,
  handleFulfilledFetchAllContacts,
} from './handlers';



const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchAllContacts)
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
  },
});

export const contactsReducer = contactsSlice.reducer;
