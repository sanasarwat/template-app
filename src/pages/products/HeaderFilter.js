import React from "react";
import { Link } from "react-router-dom";

export default function HeaderFilter(props) {
  const {
    setSelectedCategories,
    selectedCategories,
    selectedRating,
    setSelectedRating,
    setSelectedBrand,
  } = props;

  // if (selectedCategories + (selectedRating ? 1 : 0) === 0) return null;

  const onClearAll = () => {
    setSelectedCategories([]);
    setSelectedRating("");
    setSelectedBrand("");
  };

  return (
    <div>
      <div className="widget widget-head">
        <div className="d-flex justify-content-between align-items-center">
          <h6>Filter</h6>
          <Link to="#" onClick={onClearAll}>
            Clear All
          </Link>
        </div>
      </div>
    </div>
  );
}
