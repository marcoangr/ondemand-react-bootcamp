import React, { useState } from "react";
import featuredProducts from "./../../data/mocks/es-mx/featured-products.json";

export default function ProductList(props) {
  const [seeMore, setSeeMore] = useState(false);
  let lastItem = props.itemsPerRow;
  return (
    <>
      <ProductItem
        start={props.start}
        lastItem={lastItem}
        list={featuredProducts.results}
      />

      {seeMore && (
        <ProductItem
          start={lastItem}
          lastItem={featuredProducts.results.length}
          list={featuredProducts.results}
        />
      )}

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

function ProductItem({ start, lastItem, list }) {
  return list?.slice(start, lastItem).map((record, index) => (
    <div className={"card-p"} key={record.id}>
      <img
        src={record.data.mainimage.url + "&w=500&h=700"}
        alt="Denim Jeans"
        style={{ width: "100%" }}
      />
      <h3>{record.data.name}</h3>
      <p className="price">{"$" + record.data.price}</p>
      <span className="category">{record.data.category.slug}</span>
      <button key={"btn-" + index}>Add to Cart</button>
    </div>
  ));
}
