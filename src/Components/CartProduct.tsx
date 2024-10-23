import { Link } from "react-router-dom";
import DeleteFromCartButton from "./DeleteFromCartButton";

interface Props {
  productImage: string;
  productName: string;
  productPrice: string;
  productQuantity: number;
  productSize: string;
  productId: number;
}

function CartProduct({
  productImage,
  productQuantity,
  productName,
  productPrice,
  productSize,
  productId,
}: Props) {
  return (
    <div className="cart-product-row-div">
      <div className="cart-product-image-container">
        <Link to={`/product/${productId}`}>
          <img className="cart-product-image" src={productImage}></img>
        </Link>
      </div>
      <div className="cart-product-name-quantity-size-container">
        <h1 className="cart-product-name">{productName}</h1>
        <div className="quantity-container">
          <div className="quantity-border">
            <button className="change-quantity-button">+</button>
            <h1 className="cart-product-quantity">{productQuantity}</h1>
            <button className="change-quantity-button">-</button>
          </div>
        </div>
        <h1 className="cart-product-size ">{productSize}</h1>
      </div>
      <div className="cart-product-price-container">
        <h1 className="cart-product-price">{productPrice}€</h1>

        <DeleteFromCartButton ProductName={productName}></DeleteFromCartButton>
      </div>
    </div>
  );
}

export default CartProduct;
