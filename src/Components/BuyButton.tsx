import { useState } from "react";
import "../Styles/ProductTab.css";
import cartContext, { useCartContext } from "./CartContext";
interface Props {
  productId: number;
  productImage: string;
  productName: string;
  productPrice: string;
  productSize: string;
}
let k = 0;
function BuyButton({
  productId,
  productImage,
  productName,
  productPrice,
  productSize,
}: Props) {
  const { cart, setCart } = useCartContext();

  return (
    <button
      className="buy-button"
      onClick={() => {
        k = k + 1;
        let oldCart = [...cart];
        let newCart = [
          {
            cartItemName: productName,
            cartItemPrice: productPrice,
            cartItemQuantity: 1,
            cartItemImage: productImage,
            cartItemSize: productSize,
            cartItemId: productId,
          },
        ];
        let index = oldCart.findIndex(
          (v) => v.cartItemName === newCart[0].cartItemName
        );

        if (index !== -1) {
          oldCart[index].cartItemQuantity = oldCart[index].cartItemQuantity + 1;
          oldCart[index].cartItemPrice = productPrice;
        } else {
          oldCart = cart.concat(newCart);
        }
        if (productSize === " ") {
          console.log("Please sellect a size");
          return;
        } else {
          setCart(oldCart);
          console.log(cart);
        }
      }}
    >
      Buy now
    </button>
  );
}

export default BuyButton;
