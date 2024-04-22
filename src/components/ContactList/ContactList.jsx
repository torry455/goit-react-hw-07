import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectorsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContacts = filteredContacts
    ? filteredContacts.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  return (
    <div>
      {currentContacts.length > 0 ? (
        <>
          <ul className={css.contactList}>
            {currentContacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </ul>
          {/* Умовний рендерінг пагінації */}
          {filteredContacts.length > itemsPerPage && (
            <Pagination
              pageCount={Math.ceil(filteredContacts.length / itemsPerPage)}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={({ selected }) => setCurrentPage(selected + 1)}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          )}
        </>
      ) : (
        <p className={css.contactInfo}>No contacts in your contact list!</p>
      )}
    </div>
  );
};

export default ContactList;
