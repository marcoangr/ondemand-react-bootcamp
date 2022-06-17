import React, { useState } from "react";
import categoriesData from "./../../data/mocks/es-mx/product-categories.json";

export default function CategoryList(props) {
  const [seeMore, setSeeMore] = useState(false);
  let lastItem = props.itemsPerRow;
  return (
    <div className="row">
      <CategoryItem
        start={props.start}
        lastItem={lastItem}
        list={categoriesData.results}
      />

      {seeMore && (
        <CategoryItem
          start={lastItem}
          lastItem={categoriesData.results.length}
          list={categoriesData.results}
        />
      )}

      <button
        id={"btn-see-more"}
        className="btn-see-more"
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "Ver menos" : "Ver mas"}
      </button>
    </div>
  );
}

function CategoryItem({ start, lastItem, list }) {
  return list.slice(start, lastItem).map((record) => (
    <div className="column" key={record.id}>
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
  ));
}
