import React from "react";
import "./Controls.css";

const PaginationControls = () => {
  return (
    <div class="center">
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">
          2
        </a>
        <a href="#">3</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
};

export default PaginationControls;
