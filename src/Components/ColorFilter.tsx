import { useState } from "react";
import "../Styles/Filters.css";
import sizeFilterContext, { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";

function SizeFilter() {
  const { filters, setFilters } = useFilterContext();
  let Colors = ["Red", "Black", "White", "Grey", "Blue", "Yellow"];
  const [selectedColor, setSelectedColor] = useState(" ");

  return (
    <div className="color-filter-container">
      {Colors.map((e) => (
        <button
          onClick={() => {
            let newSizeFilter: FilterProps = {
              sizeFilter: filters.sizeFilter,
              colorFilter: e,
              priceRange: filters.priceRange,
              isFilterOn: filters.isFilterOn,
            };

            setFilters(newSizeFilter);
            setSelectedColor(e);
            console.log("\nsizefilter: " + newSizeFilter.colorFilter);
            console.log("e:" + e.toString());
          }}
          className={"color-filter-button"}
          style={{
            backgroundColor: selectedColor === e ? "rgb(30, 29, 29)" : "",
            opacity: selectedColor === e ? "0.8" : "",
            border: selectedColor === e ? "solid 3px rgb(30, 29, 29)" : "",
            color: selectedColor === e ? " white" : "",
            borderRadius: selectedColor === e ? "40px" : "",
          }}
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;
