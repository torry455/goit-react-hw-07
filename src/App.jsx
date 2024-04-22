import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetContacts } from "./redux/contactsOps";
import { selectIsError, selectIsLoading } from "./redux/selectorsSlice";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="phonebook-list">Phonebook</h1>
      <ScrollUp />
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isLoading && !isError && <ContactList />}
    </div>
  );
}

export default App;
