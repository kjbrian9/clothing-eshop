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
        let index;
        index = oldCart.findIndex((e) => e.cartItemName === ProductName);
        oldCart.splice(index, 1);
        setCart(oldCart);
      }}
    ></button>
  );
}

export default DeleteFromCartButton;
