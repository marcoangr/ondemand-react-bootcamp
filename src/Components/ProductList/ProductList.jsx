import React, { useState, useEffect } from "react";
import "./ProductList.css";
import categoriesData from "./../../data/mocks/es-mx/product-categories.json";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import products from "./../../data/mocks/es-mx/products.json";
import PaginationControls from "../Controls/Pagination";
import Loader from "../Controls/Loader.jsx";

const ProductList = () => {
  const [filter, setFilter] = useState([]);
  const [productsF, setProducts] = useState(products.results);
  const [isLoading, setLoading] = useState(true);
  let timer = setTimeout(() => {
    clearTimeout(timer);
    return setLoading(false);
  }, 2000);

  useEffect(() => {
    if (filter.length === 0) {
      setProducts(products.results);
    } else {
      setProducts(
        products.results.filter(
          (prod, j) =>
            filter.find(
              (currentFilter) => currentFilter.id === prod.data.category.id
            ) !== undefined
        )
      );
    }
  }, [filter]);
  return (
    <>
      <div className={"current-filter"}>
        {filter.map((item) => item.name).join(" • ")}
      </div>
      <div className="products-container">
        <aside className="aside-filter">
          <div
            style={{
              backgroundColor: "rgb(237, 225, 102)",
              color: "red",
              padding: "10px",
              fontWeight: "700",
            }}
          >
            Categorias
          </div>
          <ul className="aside-categories">
            {categoriesData.results.map((item, index) => (
              <FilterItem
                key={"ac-" + item.id}
                item={item}
                setFilter={setFilter}
                filter={filter}
              />
            ))}
          </ul>
        </aside>
        {isLoading && <Loader />}
        {!isLoading && <Products products={productsF} />}
      </div>
    </>
  );
};

const FilterItem = ({ item, setFilter, filter }) => {
  const [isActive, setIsActive] = useState("normal");

  const updateFilter = () => {
    if (isActive === "normal") {
      setFilter([...filter, { id: item.id, name: item.data.name }]);
      setIsActive("active");
    } else {
      setFilter(filter.filter((itemFilter) => itemFilter.id !== item.id));
      setIsActive("normal");
    }
  };

  return (
    <li key={"li-" + item.id} className={isActive} onClick={updateFilter}>
      {item.data.name}
    </li>
  );
};

const Products = ({ products }) => {
  return products.length > 0 ? (
    <section className="main-content">
      <FeaturedProducts data={products} parent={"list"} />
      <PaginationControls />
    </section>
  ) : (
    <section className="main-content">
      <div className="no-data-found">Ooops! Intenta con otra categoria</div>
    </section>
  );
};

export default ProductList;
