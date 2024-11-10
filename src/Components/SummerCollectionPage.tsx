import "../Styles/SummerCollectionFrontPage.css";
import ProductList from "./ProductList";
import { Products } from "../Products";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import FilterButton from "./FilterButton";
import { useFilterContext } from "./FilterContext";
import PriceSlider from "./PriceSlider";
import ResetFiltersButton from "./ResetFiltersButton";
import { useEffect, useState } from "react";
import { FilterProps } from "../App";

function SummerCollectionPage() {
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
      materialFilter: "",
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
          <h1 className="gender-text">Men</h1>
        </div>
        <div className="summer-collection-bg-image-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/SummerCollectionImagewebp.webp`}
            className="sc-background-image"
          ></img>
          <div className="sc-img-background-text-container">
            <h1 className="summer-text">2024 Summer</h1>
            <h1 className="new-collection-text">New collection</h1>
          </div>
          <div className="sc-img-background-text-container-bottom">
            <h1 style={{ fontWeight: "100" }} className="available-now-text">
              Available now
            </h1>
          </div>
        </div>
        <div className="filters-container">
          <ColorFilter></ColorFilter>
          <SizeFilter></SizeFilter>
          <PriceSlider></PriceSlider>
          <div className="reset-filters-button-container">
            <FilterButton></FilterButton>
            <ResetFiltersButton></ResetFiltersButton>
          </div>
        </div>

        <ProductList productType="Men" products={Products}></ProductList>
      </div>
    </div>
  );
}

export default SummerCollectionPage;
