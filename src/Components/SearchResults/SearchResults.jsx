import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../utils/hooks/useSearch";
import Loader from "../Controls/Loader";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import PaginationControls from "../Controls/Pagination";
import "./SearchResults.css";
const ITEMS_PER_PAGE = 20;

const SearchResults = () => {
  let [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { dataProducts, isLoadingProducts } = useSearch(
    searchParams.get("q"),
    currentPage,
    ITEMS_PER_PAGE
  );

  if (isLoadingProducts) {
    return <Loader />;
  }

  return (
    <>
      <h1>
        {dataProducts?.results?.length === 0 && "No "}Results for "
        {searchParams.get("q")}"
      </h1>
      <FeaturedProducts data={dataProducts?.results} parent={"search"} />
      <PaginationControls
        pages={
          dataProducts?.results?.length > 0
            ? Math.ceil(dataProducts?.results?.length / ITEMS_PER_PAGE)
            : dataProducts?.total_pages
        }
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default SearchResults;
