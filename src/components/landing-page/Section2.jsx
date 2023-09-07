import React from "react";
import { Col, Row } from "react-bootstrap";

const Section2 = () => {
  return (
    <section className="background-bg" style={{ height: "30rem" }}>
      <div className="bx-container">
        <Row className="py-5">
          <Col md={6} className="text-white mt-4">
            <h1 className="fw-bold ">What We Do</h1>
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

      <div className="bx-container mt-4">
        <Row className="justify-end">
          <Col md="3">
            <div className="card p-3  text-color2">
              <h6 className="fs-small">Software Development</h6>
              <p className="fs-small">
                Take your business to the next level with reliable, scalable and
                unique software solutions built with the latest tools and
                technologies.
              </p>
            </div>
          </Col>
          <Col md="3">
            <div className="card p-3 text-color2">
              <h6 className="fs-small">Cloud Migration</h6>
              <p className="fs-small">
                Take your business to the next level with reliable, scalable and
                unique software solutions built with the latest tools and
                technologies.
              </p>
            </div>
          </Col>
          <Col md="3">
            <div className="card p-3 text-color2">
              <h6 className="fs-small">Product Design and Branding</h6>
              <p className="fs-small">
                Take your business to the next level with reliable, scalable and
                unique software solutions built with the latest tools and
                technologies.
              </p>
            </div>
          </Col>
          <Col md="3">
            <div className="card p-3 text-color2">
              <h6 className="fs-small">Dedicated Team Building</h6>
              <p className="fs-small">
                Take your business to the next level with reliable, scalable and
                unique software solutions built with the latest tools and
                technologies.
              </p>
            </div>
          </Col>
        </Row>
        {/* <div className="position-absolute top-100 end-0 translate-middle blur-c">
          <img
            src="/assets/color-c.png"
            alt="a & co"
            style={{ width: "9rem", marginTop: "0rem" }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Section2;
