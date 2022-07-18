import React, { useState } from "react";
import { useGetData } from "./../../utils/hooks/useGetData";
import Loader from "../Controls/Loader";
import CategoryItem from "./CategoryItem";
import PropTypes from "prop-types";
import { API_CATEGORIES_URL } from "../../utils/api-urls";

export default function CategoryList({ start, itemsPerRow: lastItem }) {
  const { data, isLoading } = useGetData(API_CATEGORIES_URL);
  const [seeMore, setSeeMore] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="row">
        {data?.results.slice(start, lastItem).map((record) => (
          <CategoryItem key={record.id} record={record} />
        ))}

        {seeMore &&
          data?.results
            .slice(lastItem)
            .map((record) => <CategoryItem key={record.id} record={record} />)}
      </div>

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

CategoryList.propTypes = {
  start: PropTypes.number,
  lastItem: PropTypes.number,
};
