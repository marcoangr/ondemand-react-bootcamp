import React from "react";
import "./FeaturedProducts.css";
import Link from "../Controls/Link";

export default function FeaturedProducts({ data, parent }) {
  return (
    <div className="container">
      {parent === "home" && <h1>Best sellers</h1>}
      <ul className={parent === "home" ? "products" : "products list"}>
        {data?.map((record, index) => (
          <li className={"card-p"} key={record.id}>
            <img
              src={record.data.mainimage.url + "&w=500&h=700"}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <h3>{record.data.name}</h3>
            <p className="price">{"$" + record.data.price}</p>
            <span className="category">{record.data.category.slug}</span>
            <button key={"btn-" + index}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {parent === "home" && (
        <Link
          href="/ondemand-react-bootcamp/all-products"
          id={"btn-see-all"}
          className="btn-see-all"
        >
          Ver todos los productos
        </Link>
      )}
    </div>
  );
}
