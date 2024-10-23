import { useState } from "react";
import sizeFilterContext, { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";

function FilterButton() {
  const { filters, setFilters } = useFilterContext();

  const onClickReload = () => {
    let newSizeFilter: FilterProps = {
      colorFilter: filters.colorFilter,
      sizeFilter: filters.sizeFilter,
      priceRange: filters.priceRange,
      isFilterOn: "true",
    };

    setFilters(newSizeFilter);

    console.log(filters.isFilterOn);

    return;
  };

  return (
    <button className="filter-button" onClick={() => onClickReload()}>
      Filter
    </button>
  );
}
export default FilterButton;
