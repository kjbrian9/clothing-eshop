import { Link } from "react-router-dom";
import "../Styles/ProductTab.css";
import BuyButton from "./BuyButton";

interface Props {
  id: number;
  image: string;
  productName: string;
  price: string;
  sizes: string[];
}

function ProductTab({ id, image, productName, price, sizes }: Props) {
  return (
    <div key={id}>
      <Link to={`/product/${id}`} className="product-tab-container">
        <img
          alt={productName}
          className="product-tab-image"
          src={`${process.env.PUBLIC_URL}/${image}`}
        ></img>
        <h1 className="product-tab-name">{productName}</h1>
        <h1 className="product-tab-price">{price}€</h1>

        <div className="product-sizes-div">
          {sizes.map((e) => (
            <h1 className="product-tab-sizes">{e}&nbsp;</h1>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default ProductTab;
