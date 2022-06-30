import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { useCategories } from "./../../utils/hooks/useCategories";

import Loader from "../Controls/Loader.jsx";
import { useProducts } from "../../utils/hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import FilterItem from "./FilterItem.jsx";
import Products from "./Products";

const ITEMS_PER_PAGE = 16;
let timestamp;
const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const { dataCategories, isLoadingCategories } = useCategories();
  const { dataProducts: products, isLoadingProducts } = useProducts(
    currentPage,
    ITEMS_PER_PAGE
  );
  const [filter, setFilter] = useState(new Map());
  const [productsF, setProducts] = useState(products);

  useEffect(() => {
    if (filter.size === 0) {
      setProducts(products?.results);
    } else {
      setCurrentPage(1);
      setProducts(
        products?.results?.filter((prod) => {
          return (
            filter.get(prod.data.category.slug.toLowerCase()) !== undefined
          );
        })
      );
    }

    if (searchParams.get("category") !== null) {
      setFilter(new Map([[searchParams.get("category").toLowerCase(), ""]]));
    }
  }, [filter, products, searchParams]);

  return (
    <>
      <div className={"current-filter"}>
        {Array.from(filter.keys())
          .map((item) => item)
          .join(" • ")}
      </div>
      <div className="products-container">
        <aside className="aside-filter">
          <div className="sticky-container">
            <span
              style={{
                display: "block",
                backgroundColor: "rgb(237, 225, 102)",
                color: "red",
                padding: "10px",
                fontWeight: "700",
              }}
            >
              {"Categories"}
            </span>
            <ul className="aside-categories">
              {isLoadingCategories && <Loader />}
              {!isLoadingCategories &&
                dataCategories?.results?.map((item, index) => (
                  <FilterItem
                    key={"ac-" + item.id + timestamp}
                    item={item}
                    setFilter={setFilter}
                    filter={filter}
                  />
                ))}
              {filter.size > 0 && (
                <button
                  className={"btn-see-more"}
                  onClick={() => {
                    setFilter(new Map());
                    timestamp = new Date().getTime();
                  }}
                >
                  Remove filters
                </button>
              )}
            </ul>
          </div>
        </aside>
        {isLoadingProducts && <Loader />}
        {!isLoadingProducts && (
            <Products
              products={productsF}
              pages={
                filter?.size > 0
                  ? Math.ceil(productsF?.length / ITEMS_PER_PAGE)
                  : products?.total_pages
              }
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
        )}
      </div>
    </>
  );
};

export default ProductList;
