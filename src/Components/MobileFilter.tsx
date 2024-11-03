import ColorFilter from "./ColorFilter";
import FilterButton from "./FilterButton";
import PriceSlider from "./PriceSlider";
import ResetFiltersButton from "./ResetFiltersButton";
import SizeFilter from "./SizeFilter";
import "../Styles/Filters.css";
function MobileFilter() {
  return (
    <div className="mobile-filter-container">
      <ColorFilter></ColorFilter>
      <SizeFilter></SizeFilter>

      <PriceSlider></PriceSlider>
      <FilterButton></FilterButton>
      <ResetFiltersButton></ResetFiltersButton>
    </div>
  );
}

export default MobileFilter;
