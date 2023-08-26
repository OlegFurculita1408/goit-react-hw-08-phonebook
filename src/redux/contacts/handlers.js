export const handleFulfilledFetchAllContacts = (state, { payload }) => {
  state.items = payload;
};

export const handleFulfilledAddContact = (state, { payload }) => {
  state.items.push(payload);
};

export const handleFulfilledDeleteContact = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};
