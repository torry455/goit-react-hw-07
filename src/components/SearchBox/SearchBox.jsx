import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/contactsReducer.js";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const searchName = e.target.value;
    dispatch(changeFilter(searchName));
  };

  return (
    <div className={css.searchWrap}>
      <label>
        Find contacts by name
        <input
          className={css.searchInput}
          placeholder="Enter name"
          name="searchName"
          type="text"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
