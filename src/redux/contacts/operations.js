import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddContact, fetchAllContacts, fetchDeleteContact } from 'api/contactsApi';



export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
     return await fetchAllContacts()
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
     return await fetchAddContact(contact)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
     return await fetchDeleteContact(id)
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
