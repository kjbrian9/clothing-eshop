import sizeFilterContext, { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";
import { useState } from "react";

function PriceSlider() {
  const { filters, setFilters } = useFilterContext();
  const [price, setPrice] = useState(0);

  let newSizeFilter: FilterProps = {
    colorFilter: filters.colorFilter,
    sizeFilter: filters.sizeFilter,
    priceRange: price,
    isFilterOn: filters.isFilterOn,
  };

  var slider = document.getElementById("Slider");
  const onChange = () => {};
  return (
    <div className="price-slider-container">
      <h1 className="filter-title">Price:</h1>
      <input
        type="range"
        min={0}
        max={2000}
        className="price-slider"
        value={price}
        id="sliderId"
        onChange={(e) => {
          setPrice(Number(e.target.value));
          console.log(price);
          console.log(newSizeFilter.priceRange);
          setFilters(newSizeFilter);
        }}
      ></input>
      <h1 className="filter-selected-price">{filters.priceRange}€</h1>
    </div>
  );
}

export default PriceSlider;
