import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "@/styles/about.module.css"

const Section2 = () => {
  return (
    <section className={ `${styles.about_consultants} bx-container pt-md-5 `}>
      {/* laptop-view */}
      <div
        className="card border-0 rounded-5 color laptop-view position-relative"
        
      >
        <Row className="mt-3 pt-md-4">
          <Col md={6}>
            <div className="avatar">
              <img
                src="/assets/avatar-img.png"
                alt="a & co"
                style={{
                  height: "552px",
                  width: "639px",
                  padding: "2.5rem",
                  marginLeft: "-2.5rem",
                }}
              />
            </div>
          </Col>
          <Col md={6} className="mt-md-">
            <div className="mt-4">
              <h1 className="fs-medium fw-bold lh-sm px-3 px-md-0">
                We are <br />
                Consultants
              </h1>
              <p className="my-3 fs-normal lh-base fw-bold mt-4">
                We are tech enthusiasts, data geeks, process mavens, delivery
                strategists and industry experts focused on helping you grow and
                achieve your goals. We are curious, driven and love to tackle
                the big challenges that make a difference. We go over and beyond
                for our clients and teammates.
              </p>
              <p className="my-3 fs-normal lh-base mt-5">
                A & co consulting is an innovation driven consultancy that
                harnesses the power of technology to provide sustainable and
                profitable solutions to clients world wide across various
                industries. We help organizations strategize, design, develop,
                implement and manage technological systems that drive revenue
                increase and growth to achieve goals.If you are ready to
                innovate and revolutionize your business, A & Co can help
                envision, execute and elevate you to the next level using the
                latest technologies. We recognize that impact is not created
                alone and together we can make history.
              </p>
            </div>
          </Col>
        </Row>

        <div className="position-absolute top-0 end-50 translate-middle pt-3 about-elps">
          <img
            src="/assets/Ellipse3.png"
            alt="a & co"
            style={{ width: "35rem", marginLeft: "-8rem" }}
          />
        </div>
      </div>

      {/* mobile-view */}
      <div
        className={`${styles.about_consultants} card border-0 rounded-5 mt-5 mobile-view`}
      >
        <Row className="mt-3 ">
          <Col md={6} className="mt-md-5 pt-md-5">
            <div className="mt-4 consultant px-3 px-md-0">
              <h1 className="mb-3 mb-md-0 fw-bold lh-sm">
                We are <br />
                Consultants
              </h1>
              <p className="fs-6 fw-bold">
                We are tech enthusiasts, data geeks, process mavens, delivery
                strategists and industry experts focused on helping you grow and
                achieve your goals. We are curious, driven and love to tackle
                the big challenges that make a difference. We go over and beyond
                for our clients and teammates.
              </p>
              <p className="fs-6">
                A & co consulting is an innovation driven consultancy that
                harnesses the power of technology to provide sustainable and
                profitable solutions to clients world wide across various
                industries. We help organizations strategize, design, develop,
                implement and manage technological systems that drive revenue
                increase and growth to achieve goals.If you are ready to
                innovate and revolutionize your business, A & Co can help
                envision, execute and elevate you to the next level using the
                latest technologies. We recognize that impact is not created
                alone and together we can make history.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="avatar-man">
              <img
                src="/assets/avatar-img.png"
                alt="a & co"
                style={{
                  height: "22rem",
                  width: "24rem",
                  padding: "0",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>

     

   
    </section>
  );
};

export default Section2;
