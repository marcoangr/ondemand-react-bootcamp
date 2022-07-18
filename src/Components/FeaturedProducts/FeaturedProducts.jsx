import React from "react";
import "./FeaturedProducts.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Add2CartBtn from "../Controls/Add2CartBtn";

export default function FeaturedProducts({ data, parent }) {
  return (
    <div className="container">
      {parent === "home" && <h1>Best sellers</h1>}
      <div
        className={
          parent === "home"
            ? "products"
            : parent === "list"
            ? "products list"
            : "products list search"
        }
      >
        {data?.map((record, index) => (
          <div className={"card-p"} key={record.id}>
            <img
              src={record.data.mainimage.url + "&w=500&h=700"}
              alt="Denim Jeans"
              style={{ width: "100%" }}
            />
            <Link to={"/product/" + record.id} className="link">
              <h3 className="title">{record.data.name}</h3>
            </Link>
            <p className="price">{"$" + record.data.price}</p>
            {parent === "search" && (
              <p className="description">{record.data.short_description}</p>
            )}
            <span className="category">
              {record.data.category.slug.replace("--", " & ")}
            </span>
            <Add2CartBtn productId={record.id} price={record.data.price} />
          </div>
        ))}
      </div>
      {parent === "home" && (
        <Link to="/products" id={"btn-see-all"} className="btn-see-all">
          Ver todos los productos
        </Link>
      )}
    </div>
  );
}

FeaturedProducts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
  parent: PropTypes.string,
};
