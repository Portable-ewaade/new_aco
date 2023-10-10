import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/home.module.css"

const Section5 = () => {
  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main className="grid-container">

    <section className={`${styles.home_greatbrand}`}>

    <div className="bx-section text-center mt-3 mt-md-0 pt-5 pb-5">
      <h1 className="fs-large fw-bold mt-md-5 pt-md-5">
        Great brands <br />
        we work with
      </h1>
      <div className="partner-logos slider py-5">
        <Slider {...sliderSettings}>
          <div className="slide logo">
            <img
              src="/assets/pathway-icon.png "
              alt="a & co"
              style={{ width: "8rem" }}
            />
          </div>
          <div className="slide logo">
            <img
              src="/assets/pathway-icon.png "
              alt="a & co"
              style={{ width: "8rem" }}
            />
          </div>
          <div className="slide logo">
            <img
              src="/assets/pathway-icon.png "
              alt="a & co"
              style={{ width: "8rem" }}
            />
          </div>
          <div className="slide logo">
            <img
              src="/assets/pathway-icon.png "
              alt="a & co"
              style={{ width: "8rem" }}
            />
          </div>
          <div className="slide logo">
            <img
              src="/assets/pathway-icon.png "
              alt="a & co"
              style={{ width: "8rem" }}
            />
          </div>
          <div className="slide logo">
            <img
              src="/assets/pathway-icon.png "
              alt="a & co"
              style={{ width: "8rem" }}
            />
          </div>
          <div className="slide logo">
            <img
              src="/assets/pathway-icon.png "
              alt="a & co"
              style={{ width: "8rem" }}
            />
          </div>
          <div className="slide logo">
            <img
              src="/assets/pathway-icon.png "
              alt="a & co"
              style={{ width: "8rem" }}
            />
          </div>
        </Slider>
      </div>
    </div>
    </section>
    </main>
  );
};

export default Section5;
