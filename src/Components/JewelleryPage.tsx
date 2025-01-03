import { useEffect, useState } from "react";
import { Products } from "../Products";
import "../Styles/JewelleryPage.css";
import ColorFilter from "./ColorFilter";
import FilterButton from "./FilterButton";
import PriceSlider from "./PriceSlider";
import ProductList from "./ProductList";
import ResetFiltersButton from "./ResetFiltersButton";
import SizeFilter from "./SizeFilter";
import { FilterProps } from "../App";
import { useFilterContext } from "./FilterContext";
import MaterialFilter from "./MaterialFilter";

function JewelleryPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const { filters, setFilters } = useFilterContext();
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    let newSizeFilter: FilterProps = {
      colorFilter: "",
      sizeFilter: "",
      priceRange: 0,
      isFilterOn: "false",
      materialFilter: filters.materialFilter,
    };
    setFilters(newSizeFilter);
  }, [setFilters]);

  const resizeHandler = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    console.log("height" + screenHeight);
    console.log("width" + screenWidth);
  };
  return (
    <div>
      <div className="jewellery-page-content">
        <div className="jewellery-page-title-container">
          <h1 className="jewellery-page-title">Jewellery</h1>
        </div>

        <div className="filters-container">
          <MaterialFilter></MaterialFilter>
          <SizeFilter></SizeFilter>
          <PriceSlider></PriceSlider>
          <div className="reset-filters-button-container">
            <FilterButton></FilterButton>
            <ResetFiltersButton></ResetFiltersButton>
          </div>
        </div>

        <ProductList productType="Jewellery" products={Products}></ProductList>
      </div>
    </div>
  );
}

export default JewelleryPage;
