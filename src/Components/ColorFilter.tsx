import { useState } from "react";
import "../Styles/Filters.css";
import sizeFilterContext, { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";

function SizeFilter() {
  const { filters, setFilters } = useFilterContext();
  const [isFilterPressed, setFilterPressed] = useState(false);
  let Colors = ["Red", "Black", "White", "Grey", "Blue", "Yellow"];
  const [selectedColor, setSelectedColor] = useState(" ");

  return (
    <div className="color-filter-container">
      {Colors.map((e) => (
        <button
          onClick={() => {
            if (isFilterPressed === false) {
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
              setFilterPressed(true);
              console.log(isFilterPressed);
            } else {
              setFilterPressed(false);
              console.log(isFilterPressed);
            }
          }}
          className={"color-filter-button"}
          style={{
            backgroundColor:
              selectedColor === e && isFilterPressed === true
                ? "rgb(30, 29, 29)"
                : "",
            opacity:
              selectedColor === e && isFilterPressed === true ? "0.8" : "",
            border:
              selectedColor === e && isFilterPressed === true
                ? "solid 3px rgb(30, 29, 29)"
                : "",
            color:
              selectedColor === e && isFilterPressed === true ? " white" : "",
            borderRadius:
              selectedColor === e && isFilterPressed === true ? "40px" : "",
          }}
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;
