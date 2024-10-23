import { useState } from "react";

function SecondSlide() {
  const [aboutUsDivClass, setAboutUsDivCLass] = useState(
    "about-us-page-background-div-two"
  );
  return (
    <div className={aboutUsDivClass}>
      <div className="about-us-description-button-container ">
        <div className="company-description-text-container">
          <h1 className="company-description-slide-title">Our story</h1>
          <h1 className="company-description-text">
            Our mission is to empower individuals through fashion that tells
            their story. We curate collections that blend timeless elegance with
            contemporary trends, making it easy for you to express your unique
            style. Join us on this journey, and let’s create something beautiful
            together!
          </h1>
        </div>
        <button
          className="about-us-page-button"
          onClick={() => {
            console.log("hello");
            setAboutUsDivCLass("slow-fade-out");
            console.log(aboutUsDivClass);
            setTimeout(() => {}, 1000);
          }}
        >
          Our Values
        </button>
      </div>
    </div>
  );
}

export default SecondSlide;
