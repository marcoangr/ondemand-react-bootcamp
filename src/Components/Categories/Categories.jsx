import React from "react";
import "./Categories.css";
import CategoryList from "./../List/CategoryList.jsx";
import { ITEMS_PER_VIEW_LIMIT } from "./../../utils/constants.js";

export default function Categories() {
  return (
    <div className="row-container">
      <div>
        <h1 className="title">Categorias</h1>
      </div>
      {<CategoryList start={0} itemsPerRow={ITEMS_PER_VIEW_LIMIT} />}
    </div>
  );
}
