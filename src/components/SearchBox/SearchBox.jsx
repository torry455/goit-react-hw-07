import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectorsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={css.searchWrap}>
      <label>
        Find contacts by name
        <input
          className={css.searchInput}
          placeholder="Enter name"
          name="searchName"
          type="text"
          value={value}
          onChange={(event) => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
