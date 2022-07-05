import React, { useState } from "react";
import featuredProducts from "./../../data/mocks/es-mx/featured-products.json";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

export default function ProductList({ start, itemsPerRow: lastItem }) {
  return (
    <>
      {featuredProducts?.results.slice(start, lastItem).map((record) => (
        <ProductItem record={record} />
      ))}
    </>
  );
}

ProductList.propTypes = {
  start: PropTypes.number,
  lastItem: PropTypes.number,
};
