import React, { useState } from "react";
import { useCategories } from "./../../utils/hooks/useCategories";
import Loader from "../Controls/Loader";
import { Link } from "react-router-dom";

export default function CategoryList(props) {
  const { dataCategories, isLoadingCategories } = useCategories();
  const [seeMore, setSeeMore] = useState(false);

  if (isLoadingCategories) {
    return <Loader />;
  }
  let lastItem = props.itemsPerRow;
  return (
    <>
      <div className="row">
        <CategoryItem
          start={props.start}
          lastItem={lastItem}
          list={dataCategories.results}
        />

        {seeMore && (
          <CategoryItem
            start={lastItem}
            lastItem={dataCategories.results.length}
            list={dataCategories.results}
          />
        )}
      </div>

      <button
        id={"btn-see-more"}
        className="btn-see-more"
        onClick={() => setSeeMore(!seeMore)}
      >
        {seeMore ? "Ver menos" : "Ver mas"}
      </button>
    </>
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
      <div id="title">
        <Link className="link" to={"/products?category=" + record.data.name}>
          {record.data.name}
        </Link>
      </div>
    </div>
  ));
}
