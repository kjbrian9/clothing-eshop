import { useEffect, useState } from "react";
import "../Styles/AboutUsPage.css";

function AboutUsPage() {
  const [aboutUsSlide, setAboutUsSlide] = useState(1);

  const [aboutUsDivClass, setAboutUsDivCLass] = useState(
    "about-us-page-background-div"
  );
  const [aboutUsDivClassTwo, setAboutUsDivClassTwo] = useState(
    "about-us-page-background-div-two"
  );
  const [aboutUsDivClassThree, setAboutUsDivClassThree] = useState(
    "about-us-page-background-div-three"
  );

  const [aboutUsDivClassFour, setAboutUsDivClassFour] = useState(
    "about-us-page-background-div-four"
  );

  const secondSlideFunction = () => {
    switch (aboutUsSlide) {
      case 4:
        return (
          <div className={"about-us-page-background-div-four"}>
            <div className="about-us-description-title-container-four">
              <div className="company-description-text-four-container">
                <div className="company-description-text-container-three">
                  <h1 className="company-description-text-three">
                    Our mission is to empower individuals through fashion that
                    tells their story. We curate collections that blend timeless
                    elegance with contemporary trends, making it easy for you to
                    express your unique style. Join us on this journey, and
                    let’s create something beautiful together!
                  </h1>
                </div>
              </div>
              <div className="company-description-text-container-four">
                <h1 className="company-description-slide-title">Our Mission</h1>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={aboutUsDivClassTwo}>
            <div className="about-us-title-description-container">
              <h1 className="company-description-slide-two-title">Our story</h1>
              <div className="company-description-text-container">
                <h1 className="company-description-text">
                  At Dawes, we believe that fashion is more than just clothing;
                  it’s a way for young people to express their individuality and
                  creativity. Our mission is to provide premium, trend-setting
                  apparel that empowers you to showcase your unique style.
                </h1>
              </div>
            </div>
            <div className="about-us-button-container">
              <button
                className="about-us-page-button"
                onClick={() => {
                  console.log("hello");
                  setAboutUsDivClassTwo(
                    "about-us-page-background-div-two slow-fade-out"
                  );
                  console.log(aboutUsDivClassTwo);
                  setTimeout(() => {
                    setAboutUsDivClassTwo(
                      "about-us-page-background-div-two slow-fade-out"
                    );
                    setAboutUsSlide(3);
                  }, 1000);
                }}
              >
                Our Values
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={aboutUsDivClassThree}>
            <div className="about-us-title-description-container">
              <div className="company-description-text-container-three">
                <h1 className="company-description-text-three">
                  Sustainability, inclusivity, and creativity are at the core of
                  everything we do. We are committed to ethical sourcing and
                  environmentally friendly practices, ensuring that our impact
                  on the planet is as positive as our impact on your style. We
                  celebrate diversity and aim to provide fashion for everyone.
                </h1>
              </div>
              <h1 className="about-us-slide-three-title">Our Values</h1>
            </div>
            <div className="about-us-button-container">
              <button
                className="about-us-page-button"
                onClick={() => {
                  setAboutUsDivClassThree(
                    "about-us-page-background-div-three slow-fade-out"
                  );
                  console.log(aboutUsDivClassThree);
                  setTimeout(() => {
                    setAboutUsDivClassThree(
                      "about-us-page-background-div-three slow-fade-out"
                    );
                    setAboutUsSlide(4);
                  }, 1000);
                }}
              >
                Our Mission
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className={aboutUsDivClass}>
            <button
              className="about-us-page-button-one"
              onClick={() => {
                setAboutUsDivCLass(
                  "about-us-page-background-div slow-fade-out"
                );
                setTimeout(() => {
                  setAboutUsSlide(2);
                }, 1000);
              }}
            >
              About us
            </button>
          </div>
        );
    }
  };

  return <div className="about-us-page-content">{secondSlideFunction()}</div>;
}

export default AboutUsPage;
