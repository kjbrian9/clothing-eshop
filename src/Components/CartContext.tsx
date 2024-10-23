import { createContext, useContext } from "react";
import { CartItemProps } from "../App";

const cartContext = createContext({
  cart: [
    {
      cartItemName: "",
      cartItemPrice: "",
      cartItemQuantity: 0,
      cartItemImage: "",
      cartItemSize: "",
      cartItemId: 0,
    },
  ],
  setCart: (value: CartItemProps[]) => {},
});

export default cartContext;

export function useCartContext() {
  const cartItemProps = useContext(cartContext);
  if (cartItemProps === undefined) throw new Error("error");
  else return cartItemProps;
}
