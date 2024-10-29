import { Link } from "react-router-dom";
import DeleteFromCartButton from "./DeleteFromCartButton";
import cartContext, { useCartContext } from "./CartContext";
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
  const { cart, setCart } = useCartContext();
  return (
    <div className="cart-product-row-div">
      <div className="cart-product-image-container">
        <Link to={`/product/${productId}`}>
          <img
            className="cart-product-image"
            src={`${process.env.PUBLIC_URL}/${productImage}`}
          ></img>
        </Link>
      </div>
      <div className="cart-product-name-quantity-size-container">
        <h1 className="cart-product-name">{productName}</h1>
        <div className="quantity-container">
          <div className="quantity-border">
            <button
              className="change-quantity-button"
              onClick={() => {
                let oldCart = [...cart];
                let newCart = [
                  {
                    cartItemName: productName,
                    cartItemPrice: productPrice,
                    cartItemQuantity: productQuantity,
                    cartItemImage: productImage,
                    cartItemSize: productSize,
                    cartItemId: productId,
                  },
                ];
                let index = oldCart.findIndex(
                  (v) => v.cartItemName === newCart[0].cartItemName
                );
                if (index !== -1) {
                  oldCart[index].cartItemQuantity =
                    oldCart[index].cartItemQuantity + 1;
                  oldCart[index].cartItemPrice = productPrice;
                  setCart(oldCart);
                  console.log(cart);
                }
              }}
            >
              +
            </button>
            <h1 className="cart-product-quantity">{productQuantity}</h1>
            <button
              className="change-quantity-button"
              onClick={() => {
                let oldCart = [...cart];
                let newCart = [
                  {
                    cartItemName: productName,
                    cartItemPrice: productPrice,
                    cartItemQuantity: productQuantity,
                    cartItemImage: productImage,
                    cartItemSize: productSize,
                    cartItemId: productId,
                  },
                ];
                let index = oldCart.findIndex(
                  (v) => v.cartItemName === newCart[0].cartItemName
                );
                if (index !== -1 && oldCart[index].cartItemQuantity > 1) {
                  oldCart[index].cartItemQuantity =
                    oldCart[index].cartItemQuantity - 1;
                  oldCart[index].cartItemPrice = productPrice;
                  setCart(oldCart);
                  console.log(cart);
                }
              }}
            >
              -
            </button>
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
