import React from "react";
import "./Categories.css";
import categoriesData from "./../../data/mocks/es-mx/product-categories.json";

function seeMore() {
  var hidenElements = document.querySelectorAll(".column.see-more");
  console.log(hidenElements);
  for (var i = 0; i < hidenElements.length; i++) {
    console.log(i);
    hidenElements[i].classList.remove("see-more");
  }

  document.getElementById("btn-see-more").style.display = "none";
}

export default function Categories() {
  return (
    <div className="row">
      <h1>Categories</h1>
      {categoriesData.results.map((record, index) => (
        <div
          className={
            window.innerWidth > 600 && index >= 3
              ? "column see-more"
              : window.innerWidth < 600 && index >= 4
              ? "column see-more"
              : "column"
          }
          key={record.id}
        >
          <img
            className="card"
            src={record.data.main_image.url.replace(
              /(&w=([0-9]+&h=[0-9]+))/g,
              "&w=180&h=120"
            )}
            alt={""}
          />
          <div id="title">{record.data.name}</div>
        </div>
      ))}
      <button id={"btn-see-more"} className="btn-see-more" onClick={seeMore}>
        Ver mas
      </button>
    </div>
  );
}
