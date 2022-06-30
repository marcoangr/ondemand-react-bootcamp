import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { useCategories } from "./../../utils/hooks/useCategories";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import PaginationControls from "../Controls/Pagination";
import Loader from "../Controls/Loader.jsx";
import { useProducts } from "../../utils/hooks/useProducts";
import { useSearchParams } from "react-router-dom";
const ITEMS_PER_PAGE = 9;
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
  }, [filter, products]);

  useEffect(() => {
    if (searchParams.get("category") !== null) {
      setFilter(new Map([[searchParams.get("category").toLowerCase(), ""]]));
    }
  }, [searchParams]);

  return (
    <>
      <div className={"current-filter"}>
        {Array.from(filter.keys())
          .map((item) => item)
          .join(" • ")}
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

const FilterItem = ({ item, setFilter, filter }) => {
  const [isActive, setIsActive] = useState("normal");

  function updateFilter() {
    if (isActive === "normal") {
      setFilter(new Map(filter.set(item.data.name.toLowerCase(), item.id)));
      setIsActive("active");
    } else {
      filter.delete(item.data.name.toLowerCase());
      setFilter(new Map(filter));
      setIsActive("normal");
    }
  }
  return (
    <li
      className={filter.size > 0 ? isActive : "normal"}
      onClick={updateFilter}
    >
      {item.data.name}
    </li>
  );
};

const Products = ({ products, pages, currentPage, setCurrentPage }) => {
  return products?.length > 0 ? (
    <section className="main-content">
      <FeaturedProducts data={products} parent={"list"} />
      <PaginationControls
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  ) : (
    <section className="main-content">
      <div className="no-data-found">Ooops! Intenta con otra categoria</div>
    </section>
  );
};

export default ProductList;
