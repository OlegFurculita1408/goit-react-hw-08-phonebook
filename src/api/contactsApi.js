import { instanceForContacts } from "./api";

export const fetchAllContacts = async () => {
     const { data } = await instanceForContacts.get('/contacts');
    return data;
}

export const fetchAddContact = async (contact) => {
     const { data } = await instanceForContacts.post('/contacts', contact);
     return data;
}

export const fetchDeleteContact = async (id) => {
     const { data } = await instanceForContacts.delete(`contacts/${id}`);
     return data;
}