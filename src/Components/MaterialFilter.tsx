import { useState } from "react";
import "../Styles/Filters.css";
import sizeFilterContext, { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";

function SizeFilter() {
  const { filters, setFilters } = useFilterContext();
  const [isFilterPressed, setFilterPressed] = useState(false);
  let materials = ["Silver", "Stainless steel", "White gold", "Gold"];
  const [selectedMaterial, setSelectedMaterial] = useState(" ");

  return (
    <div className="material-filter-container">
      {materials.map((e) => (
        <button
          onClick={() => {
            if (isFilterPressed === false) {
              let newSizeFilter: FilterProps = {
                sizeFilter: filters.sizeFilter,
                colorFilter: filters.colorFilter,
                priceRange: filters.priceRange,
                isFilterOn: filters.isFilterOn,
                materialFilter: e,
              };

              setFilters(newSizeFilter);
              setSelectedMaterial(e);
              setFilterPressed(true);
              console.log(isFilterPressed);
            } else {
              setFilterPressed(false);
              console.log(isFilterPressed);
              console.log(e);
            }
          }}
          className={"material-filter-button"}
          style={{
            backgroundColor:
              selectedMaterial === e && isFilterPressed === true
                ? "rgb(30, 29, 29)"
                : "",
            opacity:
              selectedMaterial === e && isFilterPressed === true ? "0.8" : "",
            border:
              selectedMaterial === e && isFilterPressed === true
                ? "solid 3px rgb(30, 29, 29)"
                : "",
            color:
              selectedMaterial === e && isFilterPressed === true
                ? " white"
                : "",
            borderRadius:
              selectedMaterial === e && isFilterPressed === true ? "40px" : "",
          }}
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;
