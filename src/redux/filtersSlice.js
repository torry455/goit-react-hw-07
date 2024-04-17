import { createSelector, createSlice } from "@reduxjs/toolkit";

// Створення slice для управління станом контактів
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [], // Початковий стан для списку контактів
    loading: false, // Стан завантаження
    error: null, // Стан помилок
  },
  reducers: {
    // Екшен для оновлення списку контактів
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    // Екшен для оновлення стану завантаження
    setLoading(state, action) {
      state.loading = action.payload;
    },
    // Екшен для оновлення стану помилок
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Експорт екшенів
export const { setContacts, setLoading, setError } = contactsSlice.actions;

// Селектор для вибору списку контактів
export const selectContacts = state => state.contacts.contacts;

// Селектор для вибору значення фільтра
export const selectFilter = state => state.filters.name;

// Мемоізований селектор для фільтрації контактів за ім'ям
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter, state => state.contacts.loading, state => state.contacts.error],
  (contacts, filter, loading, error) => {
    // Ви можете виконати операції фільтрації та обробки помилок лише якщо loading === false та error === null
    if (!loading && !error) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      // Якщо loading або error встановлені, поверніть порожній масив або обробте помилку
      return [];
    }
  }
);

// Експорт редуктора
export const contactsReducer = contactsSlice.reducer;