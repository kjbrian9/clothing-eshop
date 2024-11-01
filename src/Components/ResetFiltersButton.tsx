import { useState } from "react";
import sizeFilterContext, { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";
import "../Styles/Filters.css";
function ResetFiltersButton() {
  const { filters, setFilters } = useFilterContext();

  const ResetFilters = () => {
    let newSizeFilter: FilterProps = {
      colorFilter: "",
      sizeFilter: "",
      priceRange: 0,
      isFilterOn: "false",
      materialFilter: filters.materialFilter,
    };
    setFilters(newSizeFilter);
    console.log(filters.isFilterOn);

    return;
  };
  return (
    <button onClick={() => ResetFilters()} className="reset-filters-button">
      Reset filters
    </button>
  );
}

export default ResetFiltersButton;
