import React, { useState } from "react";
import { useCategories } from "./../../utils/hooks/useCategories";
import Loader from "../Controls/Loader";
import CategoryItem from "./CategoryItem";
import PropTypes from "prop-types";

export default function CategoryList({ start, itemsPerRow: lastItem }) {
  const { dataCategories, isLoadingCategories } = useCategories();
  const [seeMore, setSeeMore] = useState(false);

  if (isLoadingCategories) {
    return <Loader />;
  }

  return (
    <>
      <div className="row">
        {dataCategories?.results.slice(start, lastItem).map((record) => (
          <CategoryItem key={record.id} record={record} />
        ))}

        {seeMore &&
          dataCategories?.results
            .slice(lastItem)
            .map((record) => <CategoryItem record={record} />)}
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
