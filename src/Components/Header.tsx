import "../Styles/Header.css";
import "../Styles/Global.css";

import cartContext, { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useCartContext();

  return (
    <div className="header">
      <div className="empty-container"></div>
      <div className="title-sentence-container">
        <Link to={"/clothing-eshop"}>
          <h1 className="webpage-title">Dawes</h1>
        </Link>
        <button onClick={() => console.log(process.env.PUBLIC_URL)}>
          Test
        </button>
        <h1 className="header-sentence">Elevate your style effortlessly</h1>
      </div>
      <nav className="header-tabs-container">
        <ul className="header-tabs">
          <li>
            <Link to={"/SummerCollectionFrontPage"} className="header-tab">
              Men
            </Link>
          </li>
          <li>
            <Link to={"/WomenPage"} className="header-tab">
              Women
            </Link>
          </li>
          <li>
            <Link to={"/JewelleryPage"} className="header-tab">
              Jewellery
            </Link>
          </li>
          <li>
            <Link
              to={"/AboutUs"}
              className="header-tab"
              style={{ whiteSpace: "nowrap" }}
            >
              About us
            </Link>
          </li>
          <li>
            <Link to={"/ContactPage"} className="header-tab">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/UserPage  "}>
              <img
                className="profile-logo"
                src={`${process.env.PUBLIC_URL}/images/ProfileLogo.svg`}
              ></img>
            </Link>
          </li>
          <li>
            <Link to={"/CartPage"}>
              <div className="cart-count-div">
                <p>{cart.length}</p>
                <img
                  className="cart-logo"
                  src={`${process.env.PUBLIC_URL}/images/CartLogo.svg`}
                ></img>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
