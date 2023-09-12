import React from "react";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="bx-container mt-4">
      <Row>
        <Col md={3}>
          <img
            src="/assets/blur-a.png"
            alt="a & co"
            style={{ width: "16rem", marginTop: "2rem" }}
          />
        </Col>
        <Col md={6}>
        <div className="text-center">
        <h2 className="fw-bold mb-3 mt-5">
          Smart Solutions for <br /> complex challenges
        </h2>
        <p className="fs-small px-3 px-md-0">
          We understand that modern technology challenges are multi-dimensional
          and require a holistic approach.At A&Co, we bring a unique blend of
          industry expertise, technical skills, and business acumen to help you
          solve your most complex challenges and identify new opportunities for
          growth.
        </p>
      </div>
        </Col>
        <Col md={3}>
          <img
            src="/assets/blur-c1.png"
            alt="a & co"
            style={{ width: "12rem", marginTop: "1.5rem" }}
            className="laptop-view"
          />
        </Col>
      </Row>
     
    </section>
  );
};

export default Banner;
