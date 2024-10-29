import Header from "./Header";
import ProductTab from "./ProductTab";
import "../Styles/WomenPage.css";
import ProductList from "./ProductList";
import { Products } from "../Products";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import PriceSlider from "./PriceSlider";
import FilterButton from "./FilterButton";
import ResetFiltersButton from "./ResetFiltersButton";
import { useEffect, useState } from "react";
import MobileFilter from "./MobileFilter";
import { useFilterContext } from "./FilterContext";
import { FilterProps } from "../App";

function WomenPage() {
  const { filters, setFilters } = useFilterContext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    let newSizeFilter: FilterProps = {
      colorFilter: "",
      sizeFilter: "",
      priceRange: 0,
      isFilterOn: "false",
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
      <div className="summer-collection-page-content">
        <div className="gender-container">
          <h1 className="gender-text">Women</h1>
        </div>

        <div className="summer-collection-bg-image-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/WomenPageBackgroundImg.webp`}
            className="women-page-backrgound-img"
          ></img>
          <div className="women-img-background-text-container"></div>
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
          <ProductList productType="Women" products={Products}></ProductList>
        </div>
      </div>
    </div>
  );
}

export default WomenPage;
