// import contactsSlice from './filtersSlice';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, addContact, deleteContact } from './contactsSlice';
import { filtersReducer, changeFilter } from './filtersSlice';

// const initState = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: '',
//   },
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
