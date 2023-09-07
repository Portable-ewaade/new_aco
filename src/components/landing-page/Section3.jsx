import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Section3 = () => {

  return (
    <section className="position-relative">
      <div className="bx-section text-center">
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
        <div className="position-absolute top-100 translate-middle blur-c pt-5">
        <img
                src="/assets/blur-c.png"
                alt="a & co"
                style={{ width: "20rem", marginTop: "10rem" }}
              />
        </div>
      </div>
    </section>
  );
};

export default Section3;
