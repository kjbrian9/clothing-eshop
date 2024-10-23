import { useState } from "react";
import "../Styles/Filters.css";
import sizeFilterContext, { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";

function SizeFilter() {
  const { filters, setFilters } = useFilterContext();
  let Sizes = ["XS", "S", "M", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState(" ");

  return (
    <div className="size-filter-container">
      {Sizes.map((e) => (
        <button
          onClick={() => {
            let newSizeFilter: FilterProps = {
              colorFilter: filters.colorFilter,
              sizeFilter: e,
              priceRange: filters.priceRange,
              isFilterOn: filters.isFilterOn,
            };
            setFilters(newSizeFilter);
            setSelectedSize(e);
            console.log("\nsizefilter: " + newSizeFilter.sizeFilter);
            console.log("e:" + e.toString());
          }}
          className={"size-button"}
          style={{
            backgroundColor: selectedSize === e ? "rgb(30, 29, 29)" : "",
            opacity: selectedSize === e ? "0.8" : "",
            border: selectedSize === e ? "solid 3px rgb(30, 29, 29)" : "",
            color: selectedSize === e ? " white" : "",
            borderRadius: selectedSize === e ? "40px" : "",
          }}
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;
