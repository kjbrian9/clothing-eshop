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
          className={
            selectedMaterial === e && isFilterPressed === true
              ? "material-filter-button-selected"
              : "material-filter-button"
          }
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default SizeFilter;
