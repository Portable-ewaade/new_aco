import React from "react";
import { Col, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import styles from "@/styles/about.module.css";

const Banner = () => {
  return (
    <main className="grid-container">

    <section className={` ${styles.about_banner} position-relative`}>
      <TrackVisibility>
        {({ isVisible }) => (
          <div
            className={isVisible ? " animate__animated animate__fadeIn " : ""}
          >
            <div className={styles.about_inner}>
              <h1 className="fs-large lh-base fw-bold mb-3 mt-5 text-md-center p-1 p-md-0">
                We build <br className=" d-md-none" /> bridges between 
                 <br className=" d-md-block" /> 
                companies and customers
              </h1>

              <div className="mt-4 text-center">
                <Row className=" mt-4">
                  <Col md={12}>
                    <img
                      src="/assets/business-img.png"
                      alt="a & co"
                      style={{ width: "428px", height: "303px" }}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
    </main>
  );
};

export default Banner;
