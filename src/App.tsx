import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeroPage from "./HeroPage";
import SummerCollectionFrontPage from "./Components/SummerCollectionFrontPage";
import SummerCollectionPage from "./Components/SummerCollectionPage";
import WomenPage from "./Components/WomenPage";
import UserPage from "./Components/UserPage";
import ContactPage from "./Components/ContactPage";
import Header from "./Components/Header";

import ProductPage from "./Components/ProductPage";
import { Products } from "./Products";
import CartPage from "./Components/CartPage";
import { useEffect, useState } from "react";
import CartContext from "./Components/CartContext";
import JewelleryPage from "./Components/JewelleryPage";
import FilterContext from "./Components/FilterContext";
import AboutUsPage from "./Components/AboutUsPage";
import MobileHeader from "./Components/MobileHeader";

export interface CartItemProps {
  cartItemName: string;
  cartItemQuantity: number;
  cartItemPrice: string;
  cartItemImage: string;
  cartItemSize: string;
  cartItemId: number;
}

export interface FilterProps {
  colorFilter: string;
  sizeFilter: string;
  priceRange: number;
  isFilterOn: string;
}

function App() {
  const [cart, setCart] = useState<CartItemProps[]>([]);
  const cartValue = { cart, setCart };
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

  console.log();

  const [filters, setFilters] = useState<FilterProps>({
    colorFilter: "",
    sizeFilter: "",
    isFilterOn: "false",
    priceRange: 0,
  });
  const filterValue = { filters, setFilters };

  return (
    <>
      <CartContext.Provider value={cartValue}>
        <FilterContext.Provider value={filterValue}>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/AboutUs" element={<AboutUsPage />} />
              <Route
                path="/product/:id"
                element={<ProductPage products={Products} />}
              />
              <Route path="/" element={<HeroPage />}></Route>
              <Route
                path="/SummerCollectionFrontPage"
                element={<SummerCollectionFrontPage />}
              ></Route>
              <Route
                path="/SummerCollectionPage"
                element={<SummerCollectionPage />}
              ></Route>
              <Route path="/WomenPage" element={<WomenPage />}></Route>
              <Route path="/UserPage" element={<UserPage />}></Route>
              <Route path="/ContactPage" element={<ContactPage />}></Route>
              <Route path="/CartPage" element={<CartPage />}></Route>
              <Route
                path="/JewelleryPage"
                element={<JewelleryPage></JewelleryPage>}
              ></Route>
            </Routes>
          </BrowserRouter>
        </FilterContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
