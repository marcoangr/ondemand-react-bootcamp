import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetData } from "../../utils/hooks/useGetData";
import Loader from "../Controls/Loader";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import PaginationControls from "../Controls/Pagination";
import "./SearchResults.css";
import {
  API_SEARCHPRODUCTS_URL,
  urlHandlingSearch,
} from "../../utils/api-urls";

const ITEMS_PER_PAGE = 20;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: { results, total_pages },
    isLoading,
  } = useGetData(
    urlHandlingSearch(API_SEARCHPRODUCTS_URL, searchParams.get("q"))
  );

  if (isLoading) {
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
