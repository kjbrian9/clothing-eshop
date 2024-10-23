import { useParams } from "react-router-dom";
import Header from "./Header";
import Product from "./ProductList";
import "../Styles/ProductPage.css";
import BuyButton from "./BuyButton";
import { useState } from "react";
import { escape } from "querystring";
import ProductTab from "./ProductTab";
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  sizes: string[];
  color?: string;
  material?: string;
}

interface Props {
  products: Product[];
}

function ProductPage({ products }: Props) {
  const [selectedSize, setSelectedSize] = useState(" ");
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id || "", 10));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      <div className="product-page-div">
        <div className="product-details-div">
          <div className="product-details-right-left-side-container">
            <div className="product-details-right-side-container">
              <h1 className="product-name">{product?.name}</h1>
              <h1 className="product-stock">5 in stock</h1>
            </div>
            <div className="product-details-left-side-container">
              <h1 className="product-price">{product?.price}€</h1>
              <h1 className="product-description-title">Description</h1>

              <h1 className="free-shipping-text">
                Free shipping over orders that cost 45€
              </h1>
              <div className="product-page-product-sizes-div">
                {product.sizes.map((e) => (
                  <button
                    onClick={() => {
                      setSelectedSize(e.toString());
                      console.log("selected size" + selectedSize);
                      console.log("e:" + e.toString());
                    }}
                    className={"size-button"}
                    style={{
                      backgroundColor:
                        selectedSize === e ? "rgb(30, 29, 29)" : "",
                      opacity: selectedSize === e ? "0.8" : "",
                      border:
                        selectedSize === e ? "solid 3px rgb(30, 29, 29)" : "",
                      color: selectedSize === e ? " white" : "",
                      borderRadius: selectedSize === e ? "40px" : "",
                    }}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="buy-button-div">
            <BuyButton
              productId={product?.id}
              productName={product?.name}
              productImage={product?.image}
              productPrice={product?.price}
              productSize={selectedSize}
            ></BuyButton>
          </div>
        </div>
        <div className="product-image-div">
          <img className="product-image" src={product.image}></img>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
