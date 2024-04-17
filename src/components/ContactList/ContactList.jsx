import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectorsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

const getVisibleContacts = (contacts, filter) => {
  if (filter.length > 0) {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  } else {
    return contacts;
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filterContacts = getVisibleContacts(contacts, filter);

  const [currentPage, setCurrentPage] = useState(0);
  const contactsPerPage = 6;
  const pageCount = Math.ceil(filterContacts.length / contactsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedContacts = filterContacts.slice(
    currentPage * contactsPerPage,
    (currentPage + 1) * contactsPerPage
  );

  return (
    <>
      {filterContacts.length > contactsPerPage ? (
        <div>
          <ul className={css.contactList}>
            {displayedContacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
        </div>
      ) : (
        <p className={css.contactInfo}>Your contact list is empty!</p>
      )}
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </>
  );
};

export default ContactList;
