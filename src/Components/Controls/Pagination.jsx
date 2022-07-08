import React from "react";
import "./Controls.css";
import PropTypes from "prop-types";

const VISIBLE_PAGES = 2;

export default function PaginationControls({
  pages,
  currentPage,
  setCurrentPage,
}) {
  if (pages === 1 || pages === 0) {
    return <></>;
  }
  const start =
    currentPage - VISIBLE_PAGES <= 0 ? 1 : currentPage - VISIBLE_PAGES;
  const end =
    currentPage + VISIBLE_PAGES >= pages ? pages : currentPage + VISIBLE_PAGES;

  const handlePrevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage < pages ? currentPage + 1 : currentPage);
  };

  return (
    <div className="center">
      <div className="pagination">
        <span href="#prev" onClick={handlePrevPage}>
          &laquo;
        </span>
        {range(start, end).map((page) => (
          <span
            className={page === currentPage ? "active" : "inactive"}
            key={"pag-" + page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </span>
        ))}
        <span onClick={handleNextPage}>&raquo;</span>
      </div>
    </div>
  );
}

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

PaginationControls.propTypes = {
  pages: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
