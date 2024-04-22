import { createSlice } from '@reduxjs/toolkit';
import {
  apiGetContacts,
  apiPostContacts,
  apiDeleteContacts,
} from './contactsOps';

const contactsInitialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: '',
  },
};
const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(apiGetContacts.pending, handlePending)
      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(apiGetContacts.rejected, handleRejected)

      .addCase(apiPostContacts.pending, handlePending)
      .addCase(apiPostContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items.push(action.payload);
      })
      .addCase(apiPostContacts.rejected, handleRejected)

      .addCase(apiDeleteContacts.pending, handlePending)
      .addCase(apiDeleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContacts.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;