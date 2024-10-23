import Header from "./Header";
import "../Styles/SummerCollectionFrontPage.css";
import { Link } from "react-router-dom";
function SummerCollectionFrontPage() {
  return (
    <>
      <div className="summer-collection-front-page">
        <div className="summer-collection-front-page-content">
          <div className="summer-collection-front-page-text-div">
            <h1 className="summer-collection-front-page-title">
              New Collection
            </h1>
            <h1
              style={{ fontSize: "35px", marginTop: "0px", fontWeight: "300" }}
            >
              2024 summer
            </h1>
            <Link to="/SummerCollectionPage" className="explore-now-button">
              Explore now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummerCollectionFrontPage;
