import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { apiDeleteContacts } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    if (contact && contact.id) {
      dispatch(apiDeleteContacts(contact.id));
    } else {
      console.error("Contact id is missing");
    }
  };
  return (
    <li>
      <div className={css.contactCard}>
        <div>
          <p className={css.cardText}>
            <BsFillPersonFill className={css.cardIcon} />
            {contact.name}
          </p>

          <p className={css.cardText}>
            <BsFillTelephoneFill className={css.cardIcon} />
            {contact.number}
          </p>
        </div>
        <button
          className={css.contactCardBtn}
          type="button"
          onClick={handleDeleteContact}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
