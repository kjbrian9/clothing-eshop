import ColorFilter from "./ColorFilter";
import FilterButton from "./FilterButton";
import PriceSlider from "./PriceSlider";
import ResetFiltersButton from "./ResetFiltersButton";
import SizeFilter from "./SizeFilter";
import "../Styles/Filters.css";
function MobileFilter() {
  return (
    <div className="mobile-filter-container">
      <div className="mobile-filter-upper-container">
        <ColorFilter></ColorFilter>
        <SizeFilter></SizeFilter>
      </div>
      <div className="mobile-filter-lower-container">
        <PriceSlider></PriceSlider>
        <FilterButton></FilterButton>
        <ResetFiltersButton></ResetFiltersButton>
      </div>
    </div>
  );
}

export default MobileFilter;
