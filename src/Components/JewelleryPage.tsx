import { useEffect, useState } from "react";
import { Products } from "../Products";
import "../Styles/JewelleryPage.css";
import ColorFilter from "./ColorFilter";
import FilterButton from "./FilterButton";
import PriceSlider from "./PriceSlider";
import ProductList from "./ProductList";
import ResetFiltersButton from "./ResetFiltersButton";
import SizeFilter from "./SizeFilter";
import MobileFilter from "./MobileFilter";

function JewelleryPage() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
  });

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
        {screenWidth >= 769 ? (
          <div className="filters-container">
            <ColorFilter></ColorFilter>
            <SizeFilter></SizeFilter>
            <PriceSlider></PriceSlider>
            <div className="filter-reset-button">
              <FilterButton></FilterButton>
              <ResetFiltersButton></ResetFiltersButton>
            </div>
          </div>
        ) : (
          <MobileFilter></MobileFilter>
        )}
        <div className="product-grid-container">
          <ProductList
            productType="Jewellery"
            products={Products}
          ></ProductList>
        </div>
      </div>
    </div>
  );
}

export default JewelleryPage;
