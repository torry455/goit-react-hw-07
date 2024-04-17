import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://661cd961e7b95ad7fa6b578a.mockapi.io/contacts'
  );
  return data;
};

export const addContact = async contactData => {
  const { data } = await axios.post(
    'https://661cd961e7b95ad7fa6b578a.mockapi.io/contacts',
    contactData
  );
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(
    `https://661cd961e7b95ad7fa6b578a.mockapi.io/contacts/${contactId}`
  );
  return data;
};