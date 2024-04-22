import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsReducer.js';
import { filtersReducer } from './filtersSlice.js';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});