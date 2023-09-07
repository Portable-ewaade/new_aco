import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css"; 
// import "owl.carousel/dist/assets/owl.theme.default.css";


const Secction3 = () => {
//   const options = {
//     margin: 10,
//     nav: true,
//     dots: true,
//     rewind: true,
//     autoplay: true,
//     responsive: {
//     0: {
//         items: 2,
//     },
//     400: {
//         items: 2,
//     },
//     600: {
//         items: 2,
//     },
//     700: {
//         items: 3,
//     },
//     1000: {
//         items:3,
//     },
//     1100: {
//         items: 4,
//     },
//     },

    
// } 

  return (
    <section style={{ height: "74rem" }} className="section-3 position-relative">
      <div className="bx-section3 text-center">
        <h1 className="fw-bold mb-3 mt-4">Our Projects</h1>
        <p className="fs-small">
          A & co consulting is an innovation driven consultancy that harnesses
          the power of <br /> technology to provide sustainable and profitable
          solutions to clients world wide
        </p>
        <div className="mt-4">
          <Link href="/" className="text-color fs-small">
            View all projects
          </Link>
          <Row className="ms-md-5 ps-md-5 mt-4 project">
            <Col md={5}>
              <img
                src="/assets/pathway-img.png"
                alt="a & co"
                style={{ width: "15rem" }}
              />
            </Col>
            <Col md={5}>
              <img
                src="/assets/ojanow-img.png"
                alt="a & co"
                style={{ width: "15rem" }}
              />
            </Col>
          </Row>
        </div>
        <div class="position-absolute top-50 translate-middle blur-c">
        <img
                src="/assets/blur-c.png"
                alt="a & co"
                style={{ width: "22rem" }}
              />
        </div>
      </div>

      <div className="bx-section3 text-center mt-5 pt-5">
        <h1 className="fw-bold mb-3 mt-4">
          Let's kick off your <br />
          project in 4 easy steps
        </h1>
        <p className="fs-small">
          A & co consulting is an innovation driven consultancy that harnesses
          the power of technology to provide <br /> sustainable and profitable
          solutions to clients world wide across various industries.
        </p>
        <div className="mt-4">
          <Row className=" mt-5" >
            <Col md={3} className="my-4 my-md-0">
              <img
                src="/assets/icon-3.png"
                alt="a & co"
                style={{ width: "3rem" }}
              />
              <h6 className="my-3">Step 1</h6>
              <p className="d-block d-md-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ligula et nisl hendrerit sodales ut et dui.</p>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <img
                src="/assets/icon-2.png"
                alt="a & co"
                style={{ width: "3rem" }}
              />
              <h6 className="my-3">Step 2</h6>
              <p className="d-block d-md-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ligula et nisl hendrerit sodales ut et dui.</p>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <img
                src="/assets/icon-1.png"
                alt="a & co"
                style={{ width: "3rem" }}
              />
              <h6 className="my-3">Step 3</h6>
              <p className="d-block d-md-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ligula et nisl hendrerit sodales ut et dui.</p>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <img
                src="/assets/icon-3.png"
                alt="a & co"
                style={{ width: "3rem" }}
              />
              <h6 className="my-3">Step 4</h6>
             <p className="d-block d-md-none"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ligula et nisl hendrerit sodales ut et dui.</p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="bx-section3 text-center mt-5 mt-md-0 pt-5">
        <h1 className="fw-bold mb-3 mt-md-5 pt-md-5">
          Great brands <br />
          we work with
        </h1>

        <div className="mt-5">
          <img src="/assets/pathway-icon.png " alt="a & co" style={{ width: "6rem" }}/>
        </div>
        {/* <div className="row">
              <div className="col-md-12">
                <div className="row ">
                  <OwlCarousel
                    className="owl-theme owl-controls active-o custom-nav owl-nav mrgt1"
                    {...options}
                  >
                    <div className="item">
                      <div className=" col-sm-6 col-md-3 company">
                        <img
                          src="../../../../assets/images/ojanow.png "
                          alt="oja-now"
                          className=""
                          style={{ position: "relative", top: "5px" }}
                        />
                      </div>
                    </div>

                    <div className="item">
                      <div className=" col-sm-6 col-md-3 company">
                        <img
                          src="../../../../assets/images/artcolony.png"
                          alt="artcolony"
                          className=""
                          style={{ position: "relative", top: "5px" }}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className=" col-sm-6 col-md-3 company">
                        <img
                          src="../../../../assets/images/path.png"
                          alt="pathway"
                          className=""
                          style={{ position: "relative", top: "5px" }}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className=" col-sm-6 col-md-3 company">
                        <img
                          src="../../../../assets/images/google.png"
                          alt="google"
                          className=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className=" col-sm-6 col-md-3 company">
                        <img
                          src="../../../../assets/images/zend.png"
                          alt="zend"
                          className=""
                          style={{ position: "relative", top: "13px" }}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className=" col-sm-6 col-md-3 company">
                        <img
                          src="../../../../assets/images/paystack.png"
                          alt="paystack"
                          className=""
                          style={{ position: "relative", top: "13px" }}
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className=" col-sm-6 col-md-3 company">
                        <img
                          src="../../../../assets/images/amp.webp"
                          alt=""
                          className=""
                        />
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
          </div> */}
       
        
      </div>
    </section>
  );
};

export default Secction3;
