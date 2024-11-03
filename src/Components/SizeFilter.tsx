import { useState } from "react";
import "../Styles/Filters.css";
import sizeFilterContext, { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";

function SizeFilter() {
  const { filters, setFilters } = useFilterContext();
  let Sizes = ["XS", "S", "M", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState(" ");
  const [isFilterPressed, setFilterPressed] = useState(false);

  return (
    <div className="size-filter-container">
      {Sizes.map((e) => (
        <button
          onClick={() => {
            if (isFilterPressed === false) {
              let newSizeFilter: FilterProps = {
                colorFilter: filters.colorFilter,
                sizeFilter: e,
                priceRange: filters.priceRange,
                isFilterOn: filters.isFilterOn,
                materialFilter: filters.materialFilter,
              };

              setFilterPressed(true);
              setFilters(newSizeFilter);
              setSelectedSize(e);
              console.log("\nsizefilter: " + newSizeFilter.sizeFilter);
              console.log("e:" + e.toString());
            } else {
              setFilterPressed(false);
            }
          }}
          className={
            selectedSize === e && isFilterPressed === true
              ? "size-filter-button-selected"
              : "size-button"
          }
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;
