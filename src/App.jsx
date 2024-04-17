import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiGetContacts } from "./redux/contactsOps";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="phonebook-list">Phonebook</h1>
      <ScrollUp />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
