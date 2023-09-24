import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section2 = () => {
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
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section
      className="background-bg"
      style={{ height: "100%" }}
    >
      <div className="bx-container px-3 pt-md-3 p-md-0">
        <Row className="py-md-5 py-3">
          <Col md={6} className="text-white mt-4">
            <h1 className="fw-bold fs-large ps-md-4 pt-md-4">What We Do</h1>
          </Col>
          <Col md={6} className="text-color3">
            <p className="px-md-3">
              A & co consulting is an innovation driven consultancy that
              harnesses the power of technology to provide sustainable and
              profitable solutions to clients world wide across various
              industries. We help organizations strategize, design, develop,
              implement and manage technological systems that drive revenue
              increase and growth to achieve goals.
            </p>
          </Col>
        </Row>
      </div>

      {/* laptop view */}

      <div
        className=" mt-4 laptop-view"
        style={{
          width: "88%",
          height: "140%",
          margin: "auto 0 auto auto",
          justifyContent: "flex-end",
        }}
      >
        <div className="partner-logos slider py-5">
          <Slider {...sliderSettings}>
            <Col md={3} className="slide logo">
              <div className="card rounded-4 wht-card p-4 what-we-do">
                <h6 className="fw-bold mt-md-2 mb-md-4">
                  Software Development
                </h6>
                <p className="fs-normal">
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </Col>
            <Col md={3} className="slide logo">
              <div className="card rounded-4 wht-card p-4 what-we-do">
                <h6 className="fw-bold mt-md-2 mb-md-4">Cloud Migration</h6>
                <p className="fs-normal">
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </Col>
            <Col md={3} className="slide logo">
              <div className="card rounded-4 wht-card p-4 what-we-do">
                <h6 className="fw-bold mt-md-2 mb-md-4">
                  Product Design and Branding
                </h6>
                <p className="fs-normal">
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </Col>
            <Col md={3} className="slide logo">
              <div className="card rounded-4 wht-card p-4 what-we-do">
                <h6 className="fw-bold mt-md-2 mb-md-4">
                  Dedicated Team Building
                </h6>
                <p className="fs-normal">
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </Col>
            <Col md={3} className="slide logo">
              <div className="card rounded-4 wht-card p-4 what-we-do">
                <h6 className="fw-bold mt-md-2 mb-md-4">
                  Business Development & Strategy
                </h6>
                <p className="fs-normal">
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </Col>
            <Col md={3} className="slide logo">
              <div className="card rounded-4 wht-card p-4 what-we-do">
                <h6 className="fw-bold mt-md-2 mb-md-4">Data Analytics</h6>
                <p className="fs-normal">
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </Col>
          </Slider>
        </div>
      </div>
      {/* <div className="position-absolute top-100 end-0 translate-middle ">
          <img
            src="/assets/color-c.png"
            alt="a & co"
            style={{ width: "9rem", marginTop: "0rem" }}
          />
        </div> */}

      {/* mobile view */}

      <div className="px-4 pb-5 mobile-view">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Software Development
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Cloud Migration
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Product Design and Branding
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Dedicated Team Building
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Business Development & Strategy
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Data Analytics
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Take your business to the next level with reliable, scalable
                  and unique software solutions built with the latest tools and
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
