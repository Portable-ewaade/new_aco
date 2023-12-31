import React from "react";
import { Col, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import styles from "@/styles/services.module.css"

const Banner = () => {
  return (
    <main className="grid-container">

    <section className={` ${styles.service_banner} mt-5 pt-md-3`}>
      {/* laptop-view */}
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={
              isVisible ? " animate__animated animate__fadeIn inner" : ""
            }
          >
            <div className={`${styles.service_banner_inner} laptop-view`}>
              <Row>
                <Col md={3}>
                  <img
                    src="/assets/blur-a.png"
                    alt="a & co"
                    style={{ width: "21.5rem", marginTop: "2rem", marginLeft: "-0.5rem" }}
                  />
                </Col>
                <Col md={6}>
                  <div className="text-center ms-md-5 ms-lg-0 ">
                    <h1 className=" fs-large fw-bold mb-3 mt-5">
                      Smart Solutions for <br /> complex challenges
                    </h1>
                    <p className="fs-normal mt-md-4 fw-medium px-3 px-md-0">
                      We understand that modern technology challenges are
                      multi-dimensional and require a holistic approach. At
                      A&Co, we bring a unique blend of industry expertise,
                      technical skills, and business acumen to help you solve
                      your most complex challenges and identify new
                      opportunities for growth.
                    </p>
                  </div>
                </Col>
                <Col md={3}>
                  <img
                    src="/assets/blur-c1.png"
                    alt="a & co"
                    style={{ width: "16rem", marginTop: "0.5rem", marginLeft: "-2rem" }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        )}
      </TrackVisibility>

      {/* mobile-view */}
      <div  className={`mobile-view ${styles.service_banner_mobile} `}>
        <Row>
          <Col sm={12} className="text-center">
            <img
              src="/assets/aco-img.png"
              alt="a & co"
              style={{ width: "22rem", marginTop: "1rem" }}
            />
          </Col>
          <Col sm={12}>
            <div className="text-center">
              <h2 className="fs-large fw-bold mb-3 mt-2">
                Smart <br /> Solutions for complex challenges
              </h2>
              <p className=" px-3 px-md-0">
                We understand that modern technology challenges are
                multi-dimensional and require a holistic approach.At A&Co, we
                bring a unique blend of industry expertise, technical skills,
                and business acumen to help you solve your most complex
                challenges and identify new opportunities for growth.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
    </main>
  );
};

export default Banner;
