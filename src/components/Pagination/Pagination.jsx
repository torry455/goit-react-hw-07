import ReactPaginate from "react-paginate";

import css from "./Pagination.module.css";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      onPageChange={onPageChange}
      containerClassName={css.pagination}
      activeClassName={css.active}
      disableInitialCallback={true}
      renderOnZeroPageCount={null}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName={css.break}
      previousClassName={css.previous}
      nextClassName={css.next}
      pageClassName={css.page}
      pageLinkClassName={css.pageLink}
    />
  );
};

export default Pagination;
