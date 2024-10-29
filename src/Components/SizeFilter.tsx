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
          className={"size-button"}
          style={{
            backgroundColor:
              selectedSize === e && isFilterPressed === true
                ? "rgb(30, 29, 29)"
                : "",
            opacity:
              selectedSize === e && isFilterPressed === true ? "0.8" : "",
            border:
              selectedSize === e && isFilterPressed === true
                ? "solid 3px rgb(30, 29, 29)"
                : "",
            color:
              selectedSize === e && isFilterPressed === true ? " white" : "",
            borderRadius:
              selectedSize === e && isFilterPressed === true ? "40px" : "",
          }}
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;
