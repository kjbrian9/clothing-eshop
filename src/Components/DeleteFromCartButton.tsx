import cartContext, { useCartContext } from "./CartContext";

interface Props {
  ProductName: string;
}

function DeleteFromCartButton({ ProductName }: Props) {
  const { cart, setCart } = useCartContext();
  return (
    <button
      className="remove-from-cart-button"
      onClick={() => {
        let oldCart = [...cart];
        console.log(oldCart);
        let index;
        index = oldCart.findIndex((e) => e.cartItemName === ProductName);
        console.log(index);

        if (oldCart[index].cartItemQuantity > 1) {
          oldCart[index].cartItemQuantity = oldCart[index].cartItemQuantity - 1;
        } else {
          oldCart.splice(index, 1);
        }
        setCart(oldCart);
      }}
    ></button>
  );
}

export default DeleteFromCartButton;
