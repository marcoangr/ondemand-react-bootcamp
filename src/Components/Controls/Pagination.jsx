import React from "react";
import "./Controls.css";
const VISIBLE_PAGES = 2;

const PaginationControls = ({ pages, currentPage, setCurrentPage }) => {
  if (pages === 1) {
    return <></>;
  }
  const start =
    currentPage - VISIBLE_PAGES <= 0 ? 1 : currentPage - VISIBLE_PAGES;
  const end =
    currentPage + VISIBLE_PAGES >= pages ? pages : currentPage + VISIBLE_PAGES;

  return (
    <div className="center">
      <div className="pagination">
        <span
          href="#prev"
          onClick={() =>
            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
          }
        >
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
        <span
          onClick={() =>
            setCurrentPage(currentPage < pages ? currentPage + 1 : currentPage)
          }
        >
          &raquo;
        </span>
      </div>
    </div>
  );
};

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export default PaginationControls;
