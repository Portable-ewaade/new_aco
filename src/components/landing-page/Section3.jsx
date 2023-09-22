import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";


const Section3 = () => {

  return (
    <section className="position-relative">
      <div className="bx-section text-center">
        <h1 className="fs-large fw-bold mb-3 mt-md-5 ">Our Projects</h1>
        <p className="fs-normal">
          A & co consulting is an innovation driven consultancy that harnesses
          the power of <br /> technology to provide sustainable and profitable
          solutions to clients world wide
        </p>
        <div className="mt-4">
          <Link href="/" className="text-color my-3">
            View all projects
          </Link>
          <Row className="ms-lg-5 ps-lg-5 mt-4 project">
            <Col md={5} className="mb-4 mb-md-0">
              <img
                src="/assets/pathway-img.png"
                alt="a & co"
                className="py-md-3 py-2 ms-md-5 px-3 px-md-0"
                style={{ width: "19rem" }}
              />
            </Col>
            <Col md={5}>
              <img
                src="/assets/ojanow-img.png"
                alt="a & co"
                className="py-md-3 py-2 me-md-5 px-3 px-md-0"
                style={{ width: "19rem" }}
              />
            </Col>
          </Row>
        </div>
        <div className="position-absolute top-100 translate-middle blur-c c-img pt-5">
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
