import { useEffect, useState } from "react";
import "../Styles/CartPage.css";
import { useCartContext } from "./CartContext";
import CartProduct from "./CartProduct";

function CartPage() {
  useEffect(() => {
    let totaln: number = 0;
    cart.forEach((e) => {
      let num = Number(e.cartItemPrice) * Number(e.cartItemQuantity);
      totaln += num;
      setTotalPrice(totaln);
    });
  });

  const { cart, setCart } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div>
      <div>
        <h1 className="cart-page-title">Cart</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="cart-page-content">
            <div className="cart-page-product-title-div">
              <div className="cart-title-empty-div"></div>
              <div className="cart-title">
                <h1 className="cart-page-product-title">Product</h1>
              </div>
              <div className="cart-title">
                <h1 className="cart-page-product-title">Quantity</h1>
              </div>
              <div className="cart-title">
                <h1 className="cart-page-product-title">Size</h1>
              </div>
              <div className="cart-title">
                <h1 className="cart-page-product-title">Price</h1>
              </div>
            </div>

            {cart.length > 0 ? (
              <>
                {cart.map((cartItem) => (
                  <CartProduct
                    key={cartItem.cartItemId} // Add key prop for better performance
                    productName={cartItem.cartItemName}
                    productPrice={cartItem.cartItemPrice}
                    productQuantity={cartItem.cartItemQuantity}
                    productSize={cartItem.cartItemSize}
                    productImage={cartItem.cartItemImage}
                    productId={cartItem.cartItemId}
                  />
                ))}
                <div className="total-price-container">
                  <h1 className="total-price">Total price: {totalPrice}€</h1>
                </div>
              </>
            ) : (
              <div className="empty-cart-text-container">
                <h1 className="empty-cart-text">Your cart is empty</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
