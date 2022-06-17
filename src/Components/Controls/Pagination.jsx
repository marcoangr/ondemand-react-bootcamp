import React from "react";
import "./Controls.css";

const PaginationControls = () => {
  return (
    <div className="center">
      <div className="pagination">
        <a href="#prev">&laquo;</a>
        <a href="#1">1</a>
        <a href="#2" className="active">
          2
        </a>
        <a href="#3">3</a>
        <a href="#next">&raquo;</a>
      </div>
    </div>
  );
};

export default PaginationControls;
