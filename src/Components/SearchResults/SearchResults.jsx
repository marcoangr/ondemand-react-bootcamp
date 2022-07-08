import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../../utils/hooks/useSearch";
import Loader from "../Controls/Loader";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import PaginationControls from "../Controls/Pagination";
import "./SearchResults.css";
const ITEMS_PER_PAGE = 20;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    dataProducts: { results, total_pages },
    isLoadingProducts,
  } = useSearch(searchParams.get("q"), currentPage, ITEMS_PER_PAGE);

  if (isLoadingProducts) {
    return <Loader />;
  }

  return (
    <>
      <h1>
        {results?.length === 0 && "No "}Results for "{searchParams.get("q")}"
      </h1>
      <FeaturedProducts data={results} parent={"search"} />
      <PaginationControls
        pages={
          results?.length > 0
            ? Math.ceil(results?.length / ITEMS_PER_PAGE)
            : total_pages
        }
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default SearchResults;
